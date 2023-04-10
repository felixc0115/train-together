import ProgramCard from "../components/ProgramCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllProgramsData } from "../store/program-actions";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { sendProgramData } from "../store/program-actions";

const ProgramsPage = () => {
  const allPrograms = useSelector((state) => state.allPrograms.programs);
  const { token, username } = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllProgramsData(token));
  }, [dispatch, token]);

  const titleRef = useRef(null);
  const youtubeLinkRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const durationRef = useRef(null);

  const addProgramHandler = (event) => {
    event.preventDefault();

    const newProgram = {
      username,
      youtubeLink: youtubeLinkRef.current.value,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      durationInMins: durationRef.current.value,
    };
    dispatch(sendProgramData(newProgram, token));
    navigate("/programs");
  };

  return (
    <>
      <div>
        <label
          htmlFor="my-modal-3"
          className="btn btn-secondary fixed bottom-20 right-6"
        >
          add program
        </label>

        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold mb-5">
              add program details below!
            </h3>
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
            <button onClick={addProgramHandler} className="btn">
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-5 mx-auto my-7 flex-wrap justify-center">
        {allPrograms.map((program) => (
          <ProgramCard key={program["_id"]} program={program} />
        ))}
      </div>
    </>
  );
};

export default ProgramsPage;
