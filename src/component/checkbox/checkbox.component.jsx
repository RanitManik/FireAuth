const CheckboxComponent = ({ checkBoxLabel }) => {
  return (
    <>
      <div className="my-4 flex gap-3">
        <input
          className="my-auto h-4 w-4 accent-blue-600 focus-visible:outline-blue-800"
          id="user-agreement"
          name="user-agreement"
          type="checkbox"
        />
        <label htmlFor="user-agreement">{checkBoxLabel}</label>
      </div>
    </>
  );
};
export default CheckboxComponent;
