import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProgramToFavorites } from "../store/user-actions";

const FavoritedProgramCard = ({ program }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const viewProgramHandler = () => {
    navigate(`/programs/${program._id}`);
  };

  const removeFromFavoritesHandler = () => {
    const remainingFavoritedPrograms = user.favoritedPrograms.filter(
      (favoritedProgram) => favoritedProgram._id !== program._id
    );
    console.log(user.favoritedPrograms);
    console.log(typeof program._id);
    console.log(remainingFavoritedPrograms);

    // dispatch(addProgramToFavorites(program._id, user.username));
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
          <div className="badge badge-outline  ml-1">
            {`${program.durationInMins}mins`}{" "}
          </div>
        </div>
        <p>{program.description}</p>
        <div className="card-actions justify-end mt-5">
          <button className="btn btn-primary" onClick={viewProgramHandler}>
            View
          </button>
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
