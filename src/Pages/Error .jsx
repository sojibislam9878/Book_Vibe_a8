import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p className="text-lg font-medium mt-4">sorry, an unexpected error has occurred.</p>
        <p className="text-red-700 font-medium mt-2">Not Found</p>
        <Link to="/"><button className="btn mt-4">Back to Home</button></Link>
      </div>
    </div>
  );
};

export default Error;
