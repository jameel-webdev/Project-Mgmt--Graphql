import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle size={"5em"} className="icon" />
      <h1>404</h1>
      <p className="lead"> Sorry! This page does not exists</p>
      <Link to="/" className="btn btn-primary">
        Go Back
      </Link>
    </div>
  );
};

export default Notfound;
