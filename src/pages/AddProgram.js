const AddProgramPage = () => {
  return (
    <div className="flex w-full mx-auto my-7 mx-auto">
      <form>
        <div className="form-control mb-3">
          <label className="input-group input-group-s">
            <span>Program Title</span>
            <input
              type="text"
              placeholder="Hip Mobility Routine"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control mb-3">
          <label className="input-group input-group-s">
            <span>Youtube Link</span>
            <input
              type="text"
              placeholder="https://www.youtube.com/watch?v=jj2AAH6jbHk"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control mb-3">
          <label className="input-group input-group-s">
            <span>Exercise Name</span>
            <input
              type="text"
              placeholder="Figure 4 Stretch"
              className="input input-bordered"
            />
            <span># of Sets</span>
            <input
              type="text"
              placeholder="3"
              className="input input-bordered"
            />
            <span># of Reps/Time per Set</span>
            <input
              type="text"
              placeholder="30 Seconds"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control mb-5">
          <div className="input-group">
            <select className="select select-bordered">
              <option disabled selected>
                Pick category
              </option>
              <option>Mobility</option>
              <option>Rehabilitation</option>
              <option>Workout</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddProgramPage;
