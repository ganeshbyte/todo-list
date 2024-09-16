import React from "react";
import { Login } from "./component/login/login";
import { Signup } from "./component/Signup/Signup";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from "./component/Home/Home";
import { Contact } from "./component/Contact/Contact";
import { NoPage } from "./component/NoPage/NoPage";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          {/* Default route, renders Login component */}
          <Route path="/" element={<Login />} />
          {/* Other routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
