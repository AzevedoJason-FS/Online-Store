import { Routes, Route } from "react-router-dom";
import { React, Suspense, lazy } from "react";
import { ReactComponent as RollingLoader } from "./static/rolling.svg";
import "./App.scss";

const LandingPage = lazy(() => import("./pages/LandingPage"));

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <RollingLoader />
                  </div>
                </div>
              }
            >
              <LandingPage />
            </Suspense>
          }
        />
        {/* <Route
          path="/leaderboard"
          element={
            <Suspense
              fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <RollingLoader />
                  </div>
                </div>
              }
            >
              <Leaderboard />
            </Suspense>
          }
        /> */}
      </Routes>
    </div>
  );
};

export default App;
