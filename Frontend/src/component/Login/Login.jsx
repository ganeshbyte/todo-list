import { stringify } from "postcss";
import { useState } from "react";
import { Snackbar } from "../../shared/component/Snackbar";
import { json, redirect, useNavigate } from "react-router-dom";
import { Heading } from "../../shared/component/Heading";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarState, setSnackbarState] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [refresh, setRefresh] = useState(true);

  const navigate = useNavigate();

  function onChangePassword(event) {
    const password = event.target.value;
    setPassword(password);
  }
  function onChangeUsername(event) {
    const username = event.target.value;
    setUsername(username);
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      // Ensure the response is in JSON format
      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token", result.token);
        setSnackbarState(true);
        setAlertMessage(result.message);
        setRefresh(!refresh);
        navigate("/home");
      } else {
        setSnackbarState(true);
        setAlertMessage(result.message || "An error occurred.");
        setRefresh(!refresh);
      }
    } catch (error) {
      setSnackbarState(true);
      setAlertMessage("An unexpected error occurred.");
      setRefresh(!refresh);
    }
  }
  return (
    <>
      <Snackbar
        open={snackbarState}
        message={alertMessage}
        badge={"New"}
        refresh={refresh}
      />
      <Heading title={"Login"}></Heading>
      <div className="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email" className="block text-gray-800 font-bold">
              Username:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="@email"
              onChange={onChangeUsername}
              value={username}
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
              onChange={onChangePassword}
              value={password}
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
