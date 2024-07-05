import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default Root;
