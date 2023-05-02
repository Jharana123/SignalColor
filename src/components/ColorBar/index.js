import style from "./style.module.css";
const ColorBar = (props) => {
  return (
    <div
      className={style.circle}
      style={{ backgroundColor: props?.status ? "green" : "red" }}
    />
  );

  {
    /* {props.status?"green":"red"} */
  }
};
export default ColorBar;
