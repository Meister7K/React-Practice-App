import deer from "/src/assets/img/deer.svg";
import "./Title.scss";
import { Link } from "react-router-dom";

function Title() {
  return (
    <>
      <div className="title">
        <Link className="logo img-fluid img-thumbnail" to="/">
          <img src={deer} alt="" />
        </Link>
        <Link className="title-text display-1" to="/">
          <h1>Karl Finkel</h1>
        </Link>
      </div>
    </>
  );
}

export default Title;
