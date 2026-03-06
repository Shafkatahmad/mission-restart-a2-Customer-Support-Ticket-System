import React from 'react';
import TaskStatusTicket from '../TaskStatusTickets/TaskStatusTicket';
import ResolvedTasks from '../ResolvedTasks/ResolvedTasks'

const TaskStatus = ({status,handleComplete, complete}) => {
  console.log(status)
  return (
    <div>
      <h3 className='text-3xl font-semibold mb-4'>Task Status</h3>
      {
        status.length === 0? (
          <h3 className='text-[#627382] mb-10'>Select a ticket to add to Task Status</h3>
        ) : (
          status.map(ticket => <TaskStatusTicket
          ticket={ticket}
          handleComplete={handleComplete}
        ></TaskStatusTicket>)
        )
      }
      {/* <ResolvedTasks complete={complete}></ResolvedTasks> */}
      <ResolvedTasks complete={complete}></ResolvedTasks>
    </div>
  );
};

export default TaskStatus;