import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { sendExerciseDetail } from "../store/program-actions";

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

    dispatch(sendExerciseDetail(newExercise, token, programId));
  };

  return (
    <>
      <div className="flex mx-auto my-7 flex-wrap justify-center prose prose-headings:font-serif prose-headings:text-black-700">
        <h1 className="mb-1">{program.title}</h1>
        <p>
          added by: {program.username} <strong>|</strong> category:{" "}
          {program.category} <strong>|</strong> duration:{" "}
          {program.durationInMins} mins <strong>|</strong> 20 people training
        </p>
      </div>
      <iframe
        width="1060"
        height="500"
        className="m-auto"
        src={`https://www.youtube.com/embed/${
          program.youtubeLink.split("=")[1]
        }`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="program video"
      />
      <div className="m-auto mt-5">
        <div className="form-control mb-3">
          <label className="input-group input-group-s ml-5">
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
            <span># of reps/time per set</span>
            <input
              ref={repsOrTimePerSetRef}
              type="text"
              placeholder="15 reps, 30 seconds"
              className="input input-bordered"
            />
            <span>exercise timestamp in video</span>
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
        <h2 className="ml-5">Exercises:</h2>
        <ul>
          {program.exercises
            ? program.exercises.map((exercise, index) => (
                <li key={index}>
                  {exercise.name}: {exercise.sets}x for{" "}
                  {exercise.repsOrDurationPerSet} {`(${exercise.timestamp})`}
                </li>
              ))
            : ""}
        </ul>
      </div>
    </>
  );
};

export default ProgramDetailsPage;
