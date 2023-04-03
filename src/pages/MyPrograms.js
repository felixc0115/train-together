import { useSelector } from "react-redux";
import FavoritedProgramCard from "../components/FavoritedProgramCard";

const MyProgramsPage = () => {
  const favoritedProgramIds = useSelector(
    (state) => state.auth.user.favoritedPrograms
  );
  console.log(favoritedProgramIds);
  const allPrograms = useSelector((state) => state.allPrograms.programs);
  console.log(allPrograms);

  const filterFavoritePrograms = (id) => {
    return favoritedProgramIds.indexOf(id) !== -1;
  };

  const favoritedPrograms = allPrograms.filter((program) =>
    filterFavoritePrograms(program._id)
  );
  console.log(favoritedPrograms);

  return (
    <div className="flex w-full gap-5 mx-auto my-7 flex-wrap justify-center">
      {favoritedPrograms.map((program) => (
        <FavoritedProgramCard key={program["_id"]} program={program} />
      ))}
    </div>
  );
};

export default MyProgramsPage;
