import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("location", location?.pathname);

  const activeFunc = (path) => {
    navigate(path);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white py-3">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            <img src={"https://avtoticket.uz/svg/Logo.svg"} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                style={
                  location?.pathname === "/about-me"
                    ? {
                        backgroundColor: "#18aaf2",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }
                    : { backgroundColor: "white" }
                }
                onClick={() => activeFunc("/about-me")}
              >
                <a className="nav-link text-black fw-bold" href="#">
                  Biz haqimizda
                </a>
              </li>
              <li
                style={
                  location?.pathname === "/question-answer"
                    ? {
                        backgroundColor: "#18aaf2",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }
                    : { backgroundColor: "white", cursor:"pointer" }
                }
                onClick={() => {
                  activeFunc("/question-answer");
                }}
              >
                <a className="nav-link text-black fw-bold" aria-disabled="true">
                  Savol / Javob
                </a>
              </li>
              <li
                style={
                  location?.pathname === "/tiklash"
                    ? {
                        backgroundColor: "#18aaf2",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }
                    : { backgroundColor: "white", cursor:"pointer" }
                }
                onClick={() => {
                  activeFunc("/tiklash");
                }}
                className="nav-item"
              >
                <a className="nav-link text-black fw-bold" aria-disabled="true">
                  Chiptani tiklash
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
