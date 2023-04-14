import { useState } from "react";

const ExerciseForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const [repsOrTimePerRep, setRepsOrTimePerRep] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the form data
    console.log({
      exerciseName,
      sets,
      repsOrTimePerRep,
      timestamp,
    });
    // reset the form data
    setExerciseName("");
    setSets("");
    setRepsOrTimePerRep("");
    setTimestamp("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-0 right-0">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={toggleForm}
      >
        Add Exercise
      </button>
      {isOpen && (
        <div className="fixed bottom-0 right-0 bg-white p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="exerciseName"
              >
                Exercise Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="exerciseName"
                type="text"
                placeholder="Enter exercise name"
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="sets"
              >
                Sets
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="sets"
                type="number"
                placeholder="Enter number of sets"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="repsOrTimePerRep"
              >
                Reps or Time per Rep
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="repsOrTimePerRep"
                type="text"
                placeholder="Enter reps or time per rep"
                value={repsOrTimePerRep}
                onChange={(e) => setRepsOrTimePerRep(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="timestamp"
              >
                Timestamp
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="timestamp"
                type="text"
                placeholder="Enter timestamp"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ExerciseForm;
