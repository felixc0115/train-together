const ExerciseDetail = ({
  forwardedNameRef,
  forwardedSetRef,
  forwardedRepsOrTimeRef,
  forwardedTimestampRef,
}) => {
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
        <span>exercise timestamp in video</span>
        <input
          ref={forwardedTimestampRef}
          type="text"
          placeholder="2:30"
          className="input input-bordered"
        />
      </label>
    </div>
  );
};

export default ExerciseDetail;
