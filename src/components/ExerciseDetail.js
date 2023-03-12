import { useRef } from "react";

const ExerciseDetail = ({
  forwardedNameRef,
  forwardedSetRef,
  forwardedRepsOrTimeRef,
}) => {
  const nameRef = useRef();
  const setRef = useRef();
  const repOrTimeRef = useRef();

  return (
    <div className="form-control mb-3">
      <label className="input-group input-group-s">
        <span>exercise name</span>
        <input
          ref={forwardedNameRef}
          type="text"
          placeholder="Figure 4 Stretch"
          className="input input-bordered"
        />
        <span># of sets</span>
        <input
          ref={forwardedSetRef}
          type="text"
          placeholder="3"
          className="input input-bordered"
        />
        <span># of reps/time per set</span>
        <input
          ref={forwardedRepsOrTimeRef}
          type="text"
          placeholder="15 reps, 30 seconds"
          className="input input-bordered"
        />
      </label>
    </div>
  );
};

export default ExerciseDetail;

//set up input refs within this component and then initialize a function within the AddForm page to send an object with all of the exercise attributes
