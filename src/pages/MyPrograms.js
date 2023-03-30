import { useSelector } from "react-redux";
import ProgramCard from "../components/ProgramCard";

const MyProgramsPage = () => {
  const favoritedProgramIds = useSelector(
    (state) => state.auth.user.favoritedPrograms
  );
  const allPrograms = useSelector((state) => state.allPrograms.programs);

  const filterFavoritePrograms = (id) => {
    return favoritedProgramIds.indexOf(id) !== -1;
  };

  const favoritedPrograms = allPrograms.filter(filterFavoritePrograms);

  return (
    <div className="flex w-full gap-5 mx-auto my-7 flex-wrap justify-center">
      {favoritedPrograms.map((program) => (
        <ProgramCard key={program["_id"]} program={program} />
      ))}
    </div>
  );
};

export default MyProgramsPage;
