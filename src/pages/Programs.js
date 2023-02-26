import ProgramCard from "../components/ProgramCard";

const ProgramsPage = () => {
  return (
    // <div>
    //   <ProgramCard />
    //   <ProgramCard />
    // </div>
    <div className="flex w-full gap-5 mx-5 my-7 flex-wrap justify-center">
      <ProgramCard />
      <ProgramCard />
      <ProgramCard />
      <ProgramCard />
      <ProgramCard />
      <ProgramCard />
    </div>
  );
};

export default ProgramsPage;
