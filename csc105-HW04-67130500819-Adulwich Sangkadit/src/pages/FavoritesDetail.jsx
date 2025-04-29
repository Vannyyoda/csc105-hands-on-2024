import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const FavoriteDetailPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q") || "unknown";
  const size = searchParams.get("size") || "unknown";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Favorite Details</h1>
        <p className="text-gray-700 text-lg">
          Your favorite post is <span className="font-semibold text-blue-600">{q}</span>.
          <br />
          Post ID is <span className="font-semibold text-blue-600">{id}</span>.
          <br />
          Size is <span className="font-semibold text-blue-600">{size}</span>.
        </p>
      </div>
    </div>
  );
};

export default FavoriteDetailPage;
