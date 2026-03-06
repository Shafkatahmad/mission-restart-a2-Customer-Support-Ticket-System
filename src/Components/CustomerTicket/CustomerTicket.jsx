import React from 'react';

const CustomerTicket = ({ticket}) => {
  const {title, status, description, id, priority, customerName, createdAt} = ticket
  console.log(ticket)
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body p-4">
          <div className='flex justify-between'>
            <h2 className="card-title line-clamp-1">{title}</h2>
            <div className={`flex gap-1.5 ${status=="Open"?"bg-[#B9F8CF]": "bg-[#F8F3B9]"} px-3 py-1 rounded-[400px]`}>
              <div className={`w-5 h-5 rounded-full ${status=="Open"?"bg-green-500": "bg-yellow-500"}`}></div>
              <h3>{status}</h3>
            </div>
          </div>
          <p className='text-[#627382]'>{description}</p>
          <div className="flex justify-between">
            <div className='flex gap-4'>
              <p className='text-[#627382] font-medium'>#{id}</p>
              <p className={`${priority==="High Priority"?"text-red-500": "text-green-500"}`}>{priority}</p>
            </div>
            <div className='flex gap-4'>
              <p className='text-[#627382]'>{customerName}</p>
              <p className='text-[#627382]'><i class="fa-regular fa-calendar"></i> {createdAt}</p>
            </div>
          </div>
        </div>
</div>
    </div>
  );
};

export default CustomerTicket;