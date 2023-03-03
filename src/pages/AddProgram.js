import ExerciseDetail from "../components/ExerciseDetail";
import { useDispatch } from "react-redux";
import { allProgramsActions } from "../store/all-programs-slice";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddProgramPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleRef = useRef();
  const youtubeLinkRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const durationRef = useRef();

  const addProgramHandler = (event) => {
    event.preventDefault();
    const newProgram = {
      youtubeLink: `https://img.youtube.com/vi/${youtubeLinkRef.current.value}/0.jpg`,
      title: titleRef.current.value,
      description: "Mobility routine to work on your hips!",
      exercises: [
        { name: "figure 4 stretch", sets: 3, repsOrDurationPerSet: 30 },
      ],
      category: categoryRef.current.value,
      durationInMins: durationRef.current.value,
    };
    dispatch(allProgramsActions.addProgram(newProgram));
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
        <ExerciseDetail />
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
