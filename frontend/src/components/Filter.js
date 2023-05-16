const Filter = () => {
  return (
    <div className="flex justify-end">
      <select className="select select-bordered w-full max-w-xs mb-3 mr-10">
        <option disabled selected>
          filter by program type
        </option>
        <option value="mobility">mobility</option>
        <option value="stretching">stretching</option>
        <option value="workout">workout</option>
      </select>
    </div>
  );
};

export default Filter;
