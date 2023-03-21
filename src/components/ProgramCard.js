import heartLogo from "../assets/images/heartIcon";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProgramCard = ({ program }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.user);

  const viewProgramHandler = () => {
    navigate(`/programs/${program._id}`);
  };

  return (
    <div className="card w-80 bg-base-80 shadow-xl card-compact card-bordered ">
      <figure className="">
        <img
          src={`https://img.youtube.com/vi/${
            program.youtubeLink.split("=")[1]
          }/0.jpg`}
          alt="video thumbnail"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{program.title}</h2>
        <div>
          <div className="badge badge-outline  ">{program.category}</div>
          <div className="badge badge-outline  ">
            {`${program.durationInMins}mins`}{" "}
          </div>
        </div>
        <p>{program.description}</p>
        <div className="card-actions justify-end mt-5">
          <button className="btn btn-primary" onClick={viewProgramHandler}>
            View
          </button>
          {isLoggedIn && <button className="btn gap-2">{heartLogo}</button>}
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
