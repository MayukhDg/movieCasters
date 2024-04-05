import { User, Session } from 'next-auth'

export interface userProps {
    userName:string,
    email:string,
    image:string
    
  }


  export interface auditionProps {

    creator: string,
    startDate:Date,
    endDate:Date,
   description:string,
   address:string,
   city:string
   title:string
  }



  export interface SessionInterface extends Session {
    user: User & {
      id: string;
      name: string;
      email: string;
      image: string;
    };
  }

