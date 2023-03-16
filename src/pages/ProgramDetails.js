import YoutubeEmbed from "../components/YoutubeEmbed";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProgramDetailsPage = () => {
  const programs = useSelector((state) => state.allPrograms.programs);

  console.log(programs);
  const { programId } = useParams();
  console.log(programId);

  const program = programs.find((program) => program._id === programId);
  console.log(program.youtubeLink.split("=")[1]);

  return (
    <div className="min-h-screen bg-base-100 my-7">
      <h1>{program.title}</h1>
      <p>
        Uploaded by: felix | category: {program.category} | duration:{" "}
        {program.durationInMins} mins | 20 people training
      </p>
      <YoutubeEmbed embedId={program.youtubeLink.split("=")[1]} />
      <h2>Exercises:</h2>
      <ul>
        {program.exercises.map((exercise) => (
          <li>
            {exercise.name}: {exercise.sets}x for{" "}
            {exercise.repsOrDurationPerSet} {`(${exercise.timestamp})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramDetailsPage;
