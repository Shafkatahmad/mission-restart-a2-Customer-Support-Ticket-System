import ResolvedTask from "../ResolvedTask/ResolvedTask";

const ResolvedTasks = ({complete}) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Resolved Task</h3>
      {
        complete.length === 0? (
          <h3 className="text-[#627382]">No resolved tasks yet.</h3>
        ) : (
          complete.map(ticket => <ResolvedTask ticket={ticket}></ResolvedTask>)
        )
      }
    </div>
  );
};

export default ResolvedTasks;