import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { sendExerciseDetail } from "../store/program-actions";
import ExerciseForm from "../components/AddExerciseButton";

const ProgramDetailsPage = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const setRef = useRef();
  const repsOrTimePerSetRef = useRef();
  const timestampRef = useRef();
  const programs = useSelector((state) => state.allPrograms.programs);
  const { token } = useSelector((state) => state.auth.user);

  const { programId } = useParams();

  const program = programs.find((program) => program._id === programId);

  const addExerciseHandler = (e) => {
    e.preventDefault();

    const newExercise = {
      name: nameRef.current.value,
      sets: setRef.current.value,
      repsOrDurationPerSet: repsOrTimePerSetRef.current.value,
      timestamp: timestampRef.current.value,
    };

    const allExercises = [...program.exercises, newExercise];

    dispatch(sendExerciseDetail(allExercises, token, programId));
  };

  const timeJumpHandler = (timestamp) => {
    const iframe = document.querySelector("#video");
    console.log(iframe);
    const video = iframe.contentWindow.document.querySelector("video");
    video.currentTime = 120;
    video.play();
  };

  return (
    <>
      <div className="flex mx-auto flex-wrap justify-center prose prose-headings:font-serif prose-headings:text-black-700">
        <h1 className="mb-0">{program.title}</h1>
        <p className="mt-0">
          added by: {program.username} | category: {program.category} |
          duration: {program.durationInMins} mins | 20 people training
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-5 justify-center h-4/6 w-min border-double border-4 border-black-600 mx-auto">
        <div className="grid h-32 card rounded-box">
          <iframe
            id="video"
            width="960"
            height="536"
            className="block"
            src={`https://www.youtube.com/embed/${
              program.youtubeLink.split("=")[1]
            }`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="program video"
          />
        </div>
        <div className="grid h-32 card rounded-box place-items-left">
          <div className="w-96">
            <h2 className="ml-5 underline">Exercises</h2>
            <ul>
              {program.exercises
                ? program.exercises.map((exercise, index) => (
                    <li className="ml-5" key={index}>
                      {exercise.name}: {exercise.sets}x for{" "}
                      {exercise.repsOrDurationPerSet}{" "}
                      <span
                        onClick={timeJumpHandler}
                      >{`(${exercise.timestamp})`}</span>
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
      </div>

      {/* <div className=" mt-5 m-auto w-min">
        <div className="form-control mb-3">
          <label className="input-group ml-5">
            <span>exercise name</span>
            <input
              ref={nameRef}
              type="text"
              placeholder="figure 4 stretch"
              className="input input-bordered"
            />
            <span># of sets</span>
            <input
              ref={setRef}
              type="text"
              placeholder="3"
              className="input input-bordered"
            />
            <span>reps/time per set</span>
            <input
              ref={repsOrTimePerSetRef}
              type="text"
              placeholder="15 reps, 30 seconds"
              className="input input-bordered"
            />
            <span>timestamp</span>
            <input
              ref={timestampRef}
              type="text"
              placeholder="2:30"
              className="input input-bordered"
            />
            <button onClick={addExerciseHandler} className="ml-3 btn">
              Submit
            </button>
          </label>
        </div>
        <h2 className="ml-5 underline">Exercises</h2>
        <ul>
          {program.exercises
            ? program.exercises.map((exercise, index) => (
                <li className="ml-5" key={index}>
                  {exercise.name}: {exercise.sets}x for{" "}
                  {exercise.repsOrDurationPerSet}{" "}
                  <span
                    onClick={timeJumpHandler}
                  >{`(${exercise.timestamp})`}</span>
                </li>
              ))
            : ""}
        </ul>
      </div> */}
    </>
  );
};

export default ProgramDetailsPage;
