import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <Link to="/"className=" bg-black text-white">Go Back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
