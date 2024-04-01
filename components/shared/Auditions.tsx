import { fetchAllAuditions } from '@/lib/actions/audition.actions';
import AuditionCard from './AuditionCard';
import { auditionProps } from '@/types';




const Auditions = async() => {
  const auditions = await fetchAllAuditions();   
   

    return (
    <div className='flex flex-wrap w-full items-center gap-5' >
     {auditions?.map((item:any)=>(
      <AuditionCard key={item?._id} title={item?.title} />
     )) }
    </div>
  )
}

export default Auditions