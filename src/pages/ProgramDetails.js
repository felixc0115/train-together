import YoutubeEmbed from "../components/YoutubeEmbed";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProgramDetailsPage = () => {
  const programs = useSelector((state) => state.allPrograms.programs);

  const { programId } = useParams();

  const program = programs.find((program) => program._id === programId);

  return (
    <div>
      <h1>{program.title}</h1>
      <p>
        Uploaded by: felix | category: {program.category} | duration:{" "}
        {program.durationInMins} mins | 20 people training
      </p>
      <YoutubeEmbed embedId={program.youtubeLink.split("=")[1]} />
      <h2>Exercises:</h2>
      <ul>
        {program.exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.name}: {exercise.sets}x for{" "}
            {exercise.repsOrDurationPerSet} {`(${exercise.timestamp})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramDetailsPage;
