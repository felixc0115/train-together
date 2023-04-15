import { useState } from "react";
import { sendExerciseDetail } from "../store/program-actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AddExerciseButton = () => {
  const dispatch = useDispatch();
  const programs = useSelector((state) => state.allPrograms.programs);
  const { token } = useSelector((state) => state.auth.user);
  const { programId } = useParams();
  console.log(programId);

  const [isOpen, setIsOpen] = useState(false);
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const [repsOrTimePerSet, setRepsOrTimePerSet] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const program = programs.find((program) => program._id === programId);
  console.log(program);

  const addExerciseHandler = (e) => {
    e.preventDefault();

    console.log(program);
    console.log(programId);
    const newExercise = {
      name: exerciseName,
      sets,
      repsOrDurationPerSet: repsOrTimePerSet,
      timestamp,
    };

    const allExercises = [...program.exercises, newExercise];

    dispatch(sendExerciseDetail(allExercises, token, programId));

    // reset the form data
    setExerciseName("");
    setSets("");
    setRepsOrTimePerSet("");
    setTimestamp("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 right-6">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={toggleForm}
      >
        Add Exercise
      </button>
      {isOpen && (
        <div className="fixed bottom-20 right-0 bg-white p-4">
          <form onSubmit={addExerciseHandler}>
            <div className="mb-3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="exerciseName"
              >
                exercise name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="exerciseName"
                type="text"
                placeholder="ex. hanging leg raise  "
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="sets"
              >
                sets
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="sets"
                type="number"
                placeholder="ex. 3"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="repsOrTimePerSet"
              >
                reps or time per set
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="repsOrTimePerRep"
                type="text"
                placeholder="ex. 20, 30 seconds"
                value={repsOrTimePerSet}
                onChange={(e) => setRepsOrTimePerSet(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="timestamp"
              >
                timestamp
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="timestamp"
                type="text"
                placeholder="ex. 1:30"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mr-1">
              submit
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="btn btn-accent"
            >
              close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddExerciseButton;
