import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const main = useRouteError();
  console.log(main);

  return (
    <>
      <h1>Error</h1>
    </>
  );
};
export default ErrorPage;
