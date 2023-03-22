import ExerciseDetail from "../components/ExerciseDetail";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { sendProgramData } from "../store/program-actions";
import { useSelector } from "react-redux";

const AddProgramPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, username } = useSelector((state) => state.auth.user);

  const titleRef = useRef(null);
  const youtubeLinkRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const durationRef = useRef(null);

  const exerciseOneNameRef = useRef(null);
  const exerciseOneSetRef = useRef(null);
  const exerciseOneRepOrTimeRef = useRef(null);
  const exerciseOneTimestampRef = useRef(null);

  const exerciseTwoNameRef = useRef(null);
  const exerciseTwoSetRef = useRef(null);
  const exerciseTwoRepOrTimeRef = useRef(null);
  const exerciseTwoTimestampRef = useRef(null);

  const exerciseThreeNameRef = useRef(null);
  const exerciseThreeSetRef = useRef(null);
  const exerciseThreeRepOrTimeRef = useRef(null);
  const exerciseThreeTimestampRef = useRef(null);

  const exerciseFourNameRef = useRef(null);
  const exerciseFourSetRef = useRef(null);
  const exerciseFourRepOrTimeRef = useRef(null);
  const exerciseFourTimestampRef = useRef(null);

  const exerciseFiveNameRef = useRef(null);
  const exerciseFiveSetRef = useRef(null);
  const exerciseFiveRepOrTimeRef = useRef(null);
  const exerciseFiveTimestampRef = useRef(null);

  const addProgramHandler = (event) => {
    event.preventDefault();

    const newProgram = {
      username,
      youtubeLink: youtubeLinkRef.current.value,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      exercises: [
        {
          name: exerciseOneNameRef.current.value,
          sets: exerciseOneSetRef.current.value,
          repsOrDurationPerSet: exerciseOneRepOrTimeRef.current.value,
          timestamp: exerciseOneTimestampRef.current.value,
        },
        {
          name: exerciseTwoNameRef.current.value,
          sets: exerciseTwoSetRef.current.value,
          repsOrDurationPerSet: exerciseTwoRepOrTimeRef.current.value,
          timestamp: exerciseTwoTimestampRef.current.value,
        },
        {
          name: exerciseThreeNameRef.current.value,
          sets: exerciseThreeSetRef.current.value,
          repsOrDurationPerSet: exerciseThreeRepOrTimeRef.current.value,
          timestamp: exerciseThreeTimestampRef.current.value,
        },
        {
          name: exerciseFourNameRef.current.value,
          sets: exerciseFourSetRef.current.value,
          repsOrDurationPerSet: exerciseFourRepOrTimeRef.current.value,
          timestamp: exerciseFourTimestampRef.current.value,
        },
        {
          name: exerciseFiveNameRef.current.value,
          sets: exerciseFiveSetRef.current.value,
          repsOrDurationPerSet: exerciseFiveRepOrTimeRef.current.value,
          timestamp: exerciseFiveTimestampRef.current.value,
        },
      ],
      category: categoryRef.current.value,
      durationInMins: durationRef.current.value,
    };
    dispatch(sendProgramData(newProgram, token));
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
          forwardedTimestampRef={exerciseOneTimestampRef}
        />
        <ExerciseDetail
          forwardedNameRef={exerciseTwoNameRef}
          forwardedSetRef={exerciseTwoSetRef}
          forwardedRepsOrTimeRef={exerciseTwoRepOrTimeRef}
          forwardedTimestampRef={exerciseTwoTimestampRef}
        />
        <ExerciseDetail
          forwardedNameRef={exerciseThreeNameRef}
          forwardedSetRef={exerciseThreeSetRef}
          forwardedRepsOrTimeRef={exerciseThreeRepOrTimeRef}
          forwardedTimestampRef={exerciseThreeTimestampRef}
        />
        <ExerciseDetail
          forwardedNameRef={exerciseFourNameRef}
          forwardedSetRef={exerciseFourSetRef}
          forwardedRepsOrTimeRef={exerciseFourRepOrTimeRef}
          forwardedTimestampRef={exerciseFourTimestampRef}
        />
        <ExerciseDetail
          forwardedNameRef={exerciseFiveNameRef}
          forwardedSetRef={exerciseFiveSetRef}
          forwardedRepsOrTimeRef={exerciseFiveRepOrTimeRef}
          forwardedTimestampRef={exerciseFiveTimestampRef}
        />

        <button onClick={addProgramHandler} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProgramPage;
