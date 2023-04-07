import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProgramDetailsPage = () => {
  const programs = useSelector((state) => state.allPrograms.programs);

  const { programId } = useParams();

  const program = programs.find((program) => program._id === programId);

  return (
    <>
      <div className="flex mx-auto my-7 flex-wrap justify-center prose prose-headings:font-serif prose-headings:text-black-700">
        <h1>{program.title}</h1>
        <p>
          Uploaded by: {program.username} <strong>|</strong> category:{" "}
          {program.category} <strong>|</strong> duration:{" "}
          {program.durationInMins} mins <strong>|</strong> 20 people training
        </p>
      </div>
      <div className="overflow-hidden pb-32  h-full relative ">
        <iframe
          className="top-0 left-0 h-4/5 w-4/5 absolute"
          src={`https://www.youtube.com/embed/${
            program.youtubeLink.split("=")[1]
          }`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div>
        <h2>Exercises:</h2>
        {/* <ul>
          {program.exercises.map((exercise, index) => (
            <li key={index}>
              {exercise.name}: {exercise.sets}x for{" "}
              {exercise.repsOrDurationPerSet} {`(${exercise.timestamp})`}
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default ProgramDetailsPage;
