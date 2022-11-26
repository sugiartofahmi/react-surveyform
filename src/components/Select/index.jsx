const Select = ({ data, onChange, value }) => {
  return (
    <>
      <select
        value={value}
        onChange={onChange}
        className="text-gray-700 text-sm  border  rounded-lg  w-full p-2.5"
      >
        {data.map((el, i) => (
          <option key={i} value={el.value}>
            {el.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
