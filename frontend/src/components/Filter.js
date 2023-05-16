const Filter = ({ filterHandler }) => {
  return (
    <div className="flex justify-end">
      <select
        onChange={filterHandler}
        className="select select-bordered w-full max-w-xs mb-3 mr-10"
        defaultValue="default"
      >
        <option disabled value="default">
          filter by program type
        </option>
        <option value="show all">show all</option>
        <option value="mobility">mobility</option>
        <option value="stretching">stretching</option>
        <option value="workout">workout</option>
      </select>
    </div>
  );
};

export default Filter;
