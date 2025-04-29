import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  number: z
    .coerce.number({ invalid_type_error: "Expected number" })
    .min(1, "Number must be greater than 0"),
  q: z.enum(["love", "like"], { message: "Select either 'love' or 'like'" }),
  size: z.enum(["small", "medium", "large"], { message: "Select a valid size" }),
});

const FavoritesPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate(`/fav/${data.number}?q=${data.q}&size=${data.size}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Favorites Page
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
              Number:
            </label>
            <input
              type="number"
              id="number"
              {...register("number")}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            {errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p>}
          </div>

          <div>
            <label htmlFor="q" className="block text-sm font-medium text-gray-700">
              Q:
            </label>
            <select
              id="q"
              {...register("q")}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="">Select an option</option>
              <option value="love">Love</option>
              <option value="like">Like</option>
            </select>
            {errors.q && <p className="text-red-500 text-sm">{errors.q.message}</p>}
          </div>

          <div>
            <label htmlFor="size" className="block text-sm font-medium text-gray-700">
              Size:
            </label>
            <select
              id="size"
              {...register("size")}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="">Select a size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            {errors.size && <p className="text-red-500 text-sm">{errors.size.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FavoritesPage;