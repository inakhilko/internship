import "./Switch.styles.scss";

function Switch({ label }) {
  return (
    <label className="switch">
      {label}
      <input type="checkbox" />
      <span className="slider round" />
    </label>
  );
}

export default Switch;
