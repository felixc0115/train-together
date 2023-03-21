import ProgramCard from "../components/ProgramCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProgramsData } from "../store/program-actions";

const ProgramsPage = () => {
  const allPrograms = useSelector((state) => state.allPrograms.programs);
  const { token } = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProgramsData(token));
  }, [dispatch, token]);

  return (
    <div className="flex w-full gap-5 mx-auto my-7 flex-wrap justify-center">
      {allPrograms.map((program) => (
        <ProgramCard key={program["_id"]} program={program} />
      ))}
    </div>
  );
};

export default ProgramsPage;
