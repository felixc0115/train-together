import ProgramCard from "../components/ProgramCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProgramData } from "../store/program-actions";

const ProgramsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProgramData());
  }, [dispatch]);

  const allPrograms = useSelector((state) => state.allPrograms.programs);

  return (
    <div className="flex w-full gap-5 mx-auto my-7 flex-wrap justify-center">
      {allPrograms.map((program) => (
        <ProgramCard key={program._id} program={program} />
      ))}
    </div>
  );
};

export default ProgramsPage;
