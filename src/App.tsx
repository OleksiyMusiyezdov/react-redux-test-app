import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Feed from "./components/feed/feed.component";
import SignIn from "./components/login/sign-in.component";
import Profile from "./components/profile/profile";
import { isAuthSelector } from "./redux/selectors";

const theme = createTheme();

function App() {
  const isAuth = useSelector(isAuthSelector);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          {isAuth ? (
            <>
              <Route path="/" element={<Profile />} />
              <Route path="profile" element={<Profile />} />
            </>
          ) : (
            <>
              <Route path="/" element={<SignIn />} />
            </>
          )}
          <Route path="feed" element={<Feed />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
