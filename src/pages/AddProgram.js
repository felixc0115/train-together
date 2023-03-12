import ExerciseDetail from "../components/ExerciseDetail";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { sendProgramData } from "../store/program-actions";

const AddProgramPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleRef = useRef();
  const youtubeLinkRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const durationRef = useRef();
  const exerciseOneNameRef = useRef();
  const exerciseOneSetRef = useRef();
  const exerciseOneRepOrTimeRef = useRef();

  const addProgramHandler = (event) => {
    event.preventDefault();

    const newProgram = {
      youtubeLink: youtubeLinkRef.current.value,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      exercises: [
        {
          name: exerciseOneNameRef.current.value,
          sets: exerciseOneSetRef.current.value,
          repsOrDurationPerSet: exerciseOneRepOrTimeRef.current.value,
        },
        { name: "figure 4 stretch", sets: 3, repsOrDurationPerSet: 30 },
      ],
      category: categoryRef.current.value,
      durationInMins: durationRef.current.value,
    };
    dispatch(sendProgramData(newProgram));
    navigate("/programs");
  };

  return (
    <div className="flex w-full mx-auto my-7 mx-auto">
      <form>
        <div className="form-control mb-3">
          <label className="input-group input-group-s">
            <span>program title</span>
            <input
              ref={titleRef}
              type="text"
              placeholder="hip mobility routine"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control mb-3">
          <label className="input-group input-group-s">
            <span>program description</span>
            <input
              ref={descriptionRef}
              type="text"
              placeholder="mobility routine to work on your hips!"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control mb-3">
          <label className="input-group input-group-s">
            <span>youtube link</span>
            <input
              ref={youtubeLinkRef}
              type="text"
              placeholder="https://www.youtube.com/watch?v=jj2AAH6jbHk"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control mb-3">
          <label className="input-group input-group-s">
            <span>program category</span>
            <input
              ref={categoryRef}
              type="text"
              placeholder="(e.g., mobility, stretching, workout, rehab)"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control mb-3">
          <label className="input-group input-group-s">
            <span>program duration (mins)</span>
            <input
              ref={durationRef}
              type="text"
              placeholder="15"
              className="input input-bordered"
            />
          </label>
        </div>
        <ExerciseDetail
          forwardedNameRef={exerciseOneNameRef}
          forwardedSetRef={exerciseOneSetRef}
          forwardedRepsOrTimeRef={exerciseOneRepOrTimeRef}
        />
        <ExerciseDetail />
        <ExerciseDetail />
        <ExerciseDetail />
        <ExerciseDetail />

        <button onClick={addProgramHandler} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProgramPage;
