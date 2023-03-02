const ProgramCard = ({ program }) => {
  return (
    <div className="card w-80 bg-base-90 shadow-xl card-compact card-bordered ">
      <figure className="">
        <img src={program.youtubeLink} alt="video thumbnail" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {program.title}
          <div className="badge badge-outline  ">{program.category}</div>
          <div className="badge badge-outline ">
            {`${program.durationInMins}mins`}
          </div>
        </h2>
        <p>{program.description}</p>
        <div className="card-actions justify-end mt-5">
          <button className="btn btn-primary ">View</button>
          <button className="btn btn-secondary">Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
