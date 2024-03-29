import { heartIcon } from "../assets/images/programIcon";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { modifyFavoritePrograms } from "../store/user-actions";

const ProgramCard = ({ program }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const viewProgramHandler = () => {
    navigate(`/programs/${program._id}`);
  };

  const addToFavoritesHandler = (e) => {
    e.stopPropagation();
    const favoritedPrograms = [...user.favoritedPrograms, program._id];
    dispatch(modifyFavoritePrograms(favoritedPrograms, user.username));
  };

  return (
    <div
      onClick={viewProgramHandler}
      className="card w-80 bg-base-80 shadow-xl card-compact card-bordered cursor-pointer hover:bg-gray-200"
    >
      <figure className="">
        <img
          src={`https://img.youtube.com/vi/${
            program.youtubeLink.split("=")[1]
          }/0.jpg`}
          alt="video thumbnail"
        />
      </figure>
      <div className="card-body">
        <div>
          <div className="mb-3">
            <div className="badge badge-primary  font-bold">
              {program.category}
            </div>
            <div className="badge badge-secondary  font-bold ml-1">
              {`${program.durationInMins} minutes`}{" "}
            </div>
          </div>
          <div>
            <h2 className="card-title underline underline-offset-8">
              {program.title}
            </h2>
            <p className="text-base h-10">{program.description}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          {user && (
            <button
              onClick={addToFavoritesHandler}
              className="btn gap-2 hover:bg-gray-600"
            >
              {heartIcon}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
