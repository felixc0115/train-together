const Filter = () => {
  return (
    <>
      <label for="program-select">Filter by type:</label>

      <select name="types" id="program-select">
        <option value="">--Please choose an option--</option>
        <option value="mobility">mobility</option>
        <option value="stretching">stretching</option>
        <option value="workout">workout</option>
      </select>
    </>
  );
};

export default Filter;
