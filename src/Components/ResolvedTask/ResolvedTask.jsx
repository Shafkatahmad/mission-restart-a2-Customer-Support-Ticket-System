const ResolvedTask = ({ticket}) => {
  return (
    <div className='bg-[#E0E7FF] rounded-sm px-4 py-5 mb-4'>
      <h3 className="text-lg font-medium">{ticket.title}</h3>
    </div>
  );
};

export default ResolvedTask;