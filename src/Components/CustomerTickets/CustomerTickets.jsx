import React, { use } from 'react';
import CustomerTicket from '../CustomerTicket/CustomerTicket';

const CustomerTickets = ({issuePromise, className}) => {
  const issueTickets = use(issuePromise)
  // console.log(issueTickets)
  return (
    <div className={className}>
      <h3 className='text-3xl font-semibold'>Customer Tickets</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
        {
          issueTickets.map(ticket => <CustomerTicket ticket={ticket}></CustomerTicket>)
        }
      </div>
    </div>
  );
};

export default CustomerTickets;