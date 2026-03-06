const Bars = () => {
  return (
    <div className="grid grid-cols-2 gap-6 w-11/12 mx-auto">
      <div className="flex flex-col h-62.5 text-center   justify-center rounded-lg"
          style={{
          backgroundImage: `linear-gradient(to bottom right, #632EE3, #9F62F2), url('/src/assets/vector1.png')`,
          backgroundBlendMode: "overlay"
        }}
      >
        <h3 className="text-white text-2xl">In Progress</h3>
        <h2 className="text-white text-6xl font-semibold">0</h2>
      </div>
      <div className="flex flex-col h-62.5 text-center  justify-center rounded-lg"
          style={{
          backgroundImage: `linear-gradient(to bottom right, #54CF68, #00827A), url('/src/assets/vector1.png')`,
          backgroundBlendMode: "overlay"
        }}
      >
        <h3 className="text-white text-2xl">Resolved</h3>
        <h2 className="text-white text-6xl font-semibold">0</h2>
      </div>
    </div>
  );
};

export default Bars;