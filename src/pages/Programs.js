import ProgramCard from "../components/ProgramCard";
import { useSelector } from "react-redux";

const ProgramsPage = () => {
  const allPrograms = useSelector((state) => state.allPrograms.programs);

  return (
    <div className="flex w-full gap-5 mx-auto my-7 flex-wrap justify-center">
      {allPrograms.map((program) => (
        <ProgramCard program={program} />
      ))}
    </div>
  );
};

export default ProgramsPage;
