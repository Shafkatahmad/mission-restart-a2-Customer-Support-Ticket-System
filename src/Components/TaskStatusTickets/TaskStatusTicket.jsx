import { toast } from "react-toastify";

const TaskStatusTicket = ({ticket, handleComplete}) => {
  console.log(ticket)
  return (
    <div>
      <div className='p-4 rounded-sm bg-white mb-4'>
        <h3 className='mb-4 text-lg font-medium'>{ticket.title}</h3>
        <button onClick={()=> {
          handleComplete(ticket)
          toast.success('Removed This Ticket From The Customer Tickets List')
        }} className='w-full bg-[#02A53B] py-3 text-white rounded-sm'>Complete</button>
      </div>
    </div>
  );
};

export default TaskStatusTicket;