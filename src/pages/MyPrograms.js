import { useSelector } from "react-redux";
import ProgramCard from "../components/ProgramCard";

const MyProgramsPage = () => {
  const programs = useSelector((state) => state.user.favoritedPrograms);
  return (
    <div className="flex w-full gap-5 mx-auto my-7 flex-wrap justify-center">
      {programs.map((program) => (
        <ProgramCard key={program["_id"]} program={program} />
      ))}
    </div>
  );
};

export default MyProgramsPage;
