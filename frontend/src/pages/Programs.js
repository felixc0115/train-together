import ProgramCard from "../components/ProgramCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllProgramsData } from "../store/program-actions";
import AddProgramButton from "../components/AddProgramButton";
import Filter from "../components/Filter";

const ProgramsPage = () => {
  const allPrograms = useSelector((state) => state.allPrograms.programs);
  const { token } = useSelector((state) => state.auth.user);
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProgramsData(token));
  }, [dispatch, token]);

  const filterHandler = (e) => {
    e.target.value === "show all" ? setFilter(null) : setFilter(e.target.value);
  };

  const programsToShow = !filter
    ? allPrograms
    : allPrograms.filter((program) => program.category === filter);

  return (
    <>
      <h2 className="text-center font-bold normal-case text-2xl mb-2">
        All Community Uploaded Programs
      </h2>
      <Filter filterHandler={filterHandler} />
      <AddProgramButton />
      <div className="flex w-full gap-5 mx-auto flex-wrap justify-center">
        {programsToShow.map((program) => (
          <ProgramCard key={program["_id"]} program={program} />
        ))}
      </div>
    </>
  );
};

export default ProgramsPage;
