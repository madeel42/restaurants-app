import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { MainPage } from "./components/main-page";
import { ThemeProvider } from "@mui/styles";
import theme from "./components/theme";
import { connect } from "react-redux";
import { fetchData } from "./store/middleWares/data";
import { ResturantsDetails } from "./components/resturants-details";

const App = ({ fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact  path="/details/:id" element={<ResturantsDetails />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default connect(null, { fetchData })(App);
