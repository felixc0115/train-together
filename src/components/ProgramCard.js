const ProgramCard = () => {
  return (
    <div className="card w-80 bg-base-90 shadow-xl card-compact card-bordered ">
      <figure className="">
        <img src="https://img.youtube.com/vi/jj2AAH6jbHk/0.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Hip Mobility
          <div className="badge badge-outline">Mobility</div>
          <div className="badge badge-outline">25 mins</div>
        </h2>
        <p>Mobility routine to work on your hips!</p>
        <div className="">
          <button className="btn btn-primary p-0">Favorite</button>
          <button className="btn btn-secondary py-0">View</button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
