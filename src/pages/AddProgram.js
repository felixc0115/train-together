const AddProgramPage = () => {
  return (
    <form>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Email</span>
        </label>
        <label className="input-group">
          <span>Email</span>
          <input
            type="text"
            placeholder="info@site.com"
            className="input input-bordered"
          />
        </label>
      </div>
    </form>
  );
};

export default AddProgramPage;
