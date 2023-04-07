import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { modifyFavoritePrograms } from "../store/user-actions";

const FavoritedProgramCard = ({ program }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const viewProgramHandler = () => {
    navigate(`/programs/${program._id}`);
  };

  const removeFromFavoritesHandler = () => {
    const remainingFavoritedPrograms = user.favoritedPrograms.filter(
      (favoritedProgram) => favoritedProgram !== program._id
    );

    dispatch(modifyFavoritePrograms(remainingFavoritedPrograms, user.username));
  };

  return (
    <div
      onClick={viewProgramHandler}
      className="card w-80 bg-base-80 shadow-xl card-compact card-bordered cursor-pointer "
    >
      <figure>
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
          <div className="badge badge-outline  ml-1">
            {`${program.durationInMins}mins`}{" "}
          </div>
        </div>
        <p>{program.description}</p>
        <div className="card-actions justify-end mt-5">
          {user && (
            <button onClick={removeFromFavoritesHandler} className="btn gap-2">
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritedProgramCard;
