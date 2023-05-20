import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h2>OOPS Something Went Wrong</h2>
      <p>{error.status}</p>
      <p>{error.statusText}</p>
      <p>{error.data}</p>
    </>
  );
};

export default Error;
