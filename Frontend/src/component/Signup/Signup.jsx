import React from "react";

export function Signup() {
  return (
    <>
      <div className="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
        <form action="">
          <div>
            <label htmlFor="email" className="block text-gray-800 font-bold">
              Username:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="@email"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-800 font-bold">
              Password:
            </label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="password"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>
          <button className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">
            Signup
          </button>
        </form>
      </div>
    </>
  );
}
