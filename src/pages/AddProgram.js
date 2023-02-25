const AddProgramPage = () => {
  return (
    <form>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Program Title</span>
        </label>
        <label className="input-group input-group-xs">
          <span>Program Title</span>
          <input
            type="text"
            placeholder="Hip Mobility Routine"
            className="input input-bordered"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Youtube Link</span>
        </label>
        <label className="input-group input-group-xs">
          <span>Youtube Link</span>
          <input
            type="text"
            placeholder="https://www.youtube.com/watch?v=jj2AAH6jbHk"
            className="input input-bordered"
          />
        </label>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default AddProgramPage;
