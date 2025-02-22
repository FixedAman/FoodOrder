import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const main = useRouteError();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src="https://media.tenor.com/TUJ_WGkQ6pcAAAAM/dog-computer.gif"
          alt="Error Dog"
          className="w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-6xl font-extrabold text-red-600 mb-4">Status Code: {main.status}</h1>
        <p className="text-2xl text-gray-800 font-semibold mb-2">{main.statusText}</p>
        <p className="text-lg text-gray-600">{main.error?.message || "Something went wrong!"}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
