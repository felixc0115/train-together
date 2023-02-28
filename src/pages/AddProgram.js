const AddProgramPage = () => {
  return (
    <div className="flex w-full justify-left">
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
            <span>Program Description</span>
            <input
              type="text"
              placeholder="Hip Mobility Routine"
              className="input input-bordered"
            />
          </label>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddProgramPage;
