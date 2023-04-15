import { useSelector } from "react-redux";
import FavoritedProgramCard from "../components/FavoritedProgramCard";

const MyProgramsPage = () => {
  const favoritedProgramIds = useSelector(
    (state) => state.auth.user.favoritedPrograms
  );

  const allPrograms = useSelector((state) => state.allPrograms.programs);

  const filterFavoritePrograms = (id) => {
    return favoritedProgramIds.indexOf(id) !== -1;
  };

  const favoritedPrograms = allPrograms.filter((program) =>
    filterFavoritePrograms(program._id)
  );

  return (
    <>
      <h2 className=" text-center font-bold normal-case text-2xl mb-2">
        My Favorited Programs
      </h2>
      <div className="flex w-full gap-5 mx-auto flex-wrap justify-center">
        {favoritedPrograms.map((program) => (
          <FavoritedProgramCard key={program["_id"]} program={program} />
        ))}
      </div>
    </>
  );
};

export default MyProgramsPage;
