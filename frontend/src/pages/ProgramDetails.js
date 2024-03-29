import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AddExerciseButton from "../components/AddExerciseButton";
import { useState, useEffect } from "react";

const ProgramDetailsPage = () => {
  const programs = useSelector((state) => state.allPrograms.programs);
  const { username } = useSelector((state) => state.auth.user);
  const { programId } = useParams();
  const [timestampLink, setTimestampLink] = useState(null);

  const program = programs.find((program) => program._id === programId);

  const timeJumpHandler = (timestamp, youtubeLink) => {
    const timestampArray = timestamp.split(":");
    console.log(timestampArray);
    const timestampInSeconds =
      parseInt(timestampArray[0]) * 60 + parseInt(timestampArray);
    console.log(timestampInSeconds);
    // const iframe = document.querySelector("#video");
    // console.log(iframe);
    // const video = iframe.contentWindow.document.querySelector("video");
    // video.currentTime = 120;
    // video.play();
    setTimestampLink(
      `https://www.youtube.com/embed/${
        program.youtubeLink.split("=")[1]
      }?t=${parseInt(timestampInSeconds)}`
    );
  };

  useEffect(() => {
    console.log(timestampLink);
  }, [timestampLink]);

  return (
    <div>
      <div className="flex mx-auto flex-wrap justify-center prose prose-headings:font-serif prose-headings:text-black-700">
        <h1 className="mb-0">{program.title}</h1>
        <p className="mt-0">
          added by: {program.username} | category: {program.category} |
          duration: {program.durationInMins} mins | 20 people training
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-5 justify-center w-min border-solid border-4 border-black rounded-lg mx-auto">
        <div id="player" className="grid h-min card rounded-box">
          <iframe
            id="video"
            width="820"
            height="536"
            className="block"
            src={
              timestampLink ||
              `https://www.youtube.com/embed/${
                program.youtubeLink.split("=")[1]
              }`
            }
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="program video"
          />
        </div>
        <div className="grid h-32 card rounded-box place-items-left">
          <div className="w-96">
            <h2 className="ml-5 underline text-xl mb-5">exercises</h2>
            <ul className="text-lg">
              {program.exercises
                ? program.exercises.map((exercise, index) => (
                    <li className="ml-5 mb-1" key={index}>
                      {exercise.name}: {exercise.sets}x for{" "}
                      {exercise.repsOrDurationPerSet}{" "}
                      <span
                        onClick={() =>
                          timeJumpHandler(
                            exercise.timestamp,
                            exercise.youtubeLink
                          )
                        }
                      >{`(${exercise.timestamp})`}</span>
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
      </div>
      {program.username === username ? (
        <AddExerciseButton programId={programId} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProgramDetailsPage;
