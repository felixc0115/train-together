import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { sendProgramData } from "../store/program-actions";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const AddProgramButton = () => {
  const { token, username } = useSelector((state) => state.auth.user);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      exercises: [],
    };
    dispatch(sendProgramData(newProgram, token));
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    youtubeLinkRef.current.value = "";
    categoryRef.current.value = "";
    durationRef.current.value = "";
    setShowModal(false);
  };

  return (
    <div>
      <label
        htmlFor="my-modal-3"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full fixed bottom-20 right-6"
        onClick={() => setShowModal(true)}
      >
        add program
      </label>

      {showModal && (
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-xl font-bold mb-5 text-center underline">
                add program
              </h3>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-lg underline">title</span>
                </label>
                <input
                  ref={titleRef}
                  type="text"
                  placeholder="hip mobility routine"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-lg underline">
                    description
                  </span>
                </label>
                <input
                  ref={descriptionRef}
                  type="text"
                  placeholder="mobility routine to work on your hips"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-lg underline">
                    youtube link
                  </span>
                </label>
                <input
                  ref={youtubeLinkRef}
                  type="text"
                  placeholder="https://www.youtube.com/watch?v=8cJt7nTTPl0"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-lg underline">category</span>
                </label>
                <input
                  ref={categoryRef}
                  type="text"
                  placeholder="mobility"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-lg underline">
                    duration (mins)
                  </span>
                </label>
                <input
                  ref={durationRef}
                  type="text"
                  placeholder="15"
                  className="input input-bordered w-full"
                />
              </div>

              <button
                onClick={addProgramHandler}
                className="btn lowercase w-full mt-5"
              >
                Add Program
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AddProgramButton;
