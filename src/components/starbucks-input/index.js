const StarbucksInput = ({ name, value, onChange, error }) => {
  return (
    <section>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div>{error}</div>
    </section>
  );
};

export default StarbucksInput;
