import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[85vh] flex flex-col justify-center items-center gap-5">
      <p>404 | Page Not Found</p>
      <button
        onClick={() => navigate("/")}
        className="p-3 text-white bg-mainBgCol rounded-lg border border-mainBgCol hover:bg-mainTextCol hover:text-black"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
