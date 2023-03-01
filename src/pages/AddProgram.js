import ExerciseDetail from "../components/ExerciseDetail";

const AddProgramPage = () => {
  return (
    <div className="flex w-full mx-auto my-7 mx-auto">
      <form>
        <div className="form-control mb-3">
          <label className="input-group input-group-s">
            <span>program title</span>
            <input
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
              type="text"
              placeholder="https://www.youtube.com/watch?v=jj2AAH6jbHk"
              className="input input-bordered"
            />
          </label>
        </div>
        <ExerciseDetail />
        <ExerciseDetail />
        <ExerciseDetail />
        <ExerciseDetail />
        <ExerciseDetail />
        <div className="form-control mb-5">
          <div className="input-group">
            <select className="select select-bordered">
              <option disabled selected>
                pick program category
              </option>
              <option>Mobility</option>
              <option>Rehabilitation</option>
              <option>Workout</option>
            </select>
          </div>
        </div>{" "}
        <div className="form-control mb-5">
          <div className="input-group">
            <select className="select select-bordered">
              <option disabled selected>
                Pick program duration (minutes)
              </option>
              <option>varies</option>
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
              <option>25</option>
              <option>30</option>
              <option>35</option>
              <option>40</option>
              <option>45</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddProgramPage;
