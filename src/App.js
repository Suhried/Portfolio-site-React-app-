import './App.css';
import React from "react";
import Homepage from "./pages/homepage/homepage";
import TopBanner from "./component/topBanner/topBanner";
import TopNavigation from "./component/topNavigation/topNavigation";
import PageTop from "./component/pageTop/pageTop";
import AboutPage from "./pages/homepage/aboutPage";
import PortfolioPage from "./pages/homepage/portfolioPage";
import ContactSpa from "./pages/homepage/contactSPA";
import ServiceSpa from "./pages/homepage/serviceSPA";
import {BrowserRouter} from "react-router-dom";
import PageRoute from "./router/pageRoute";


function App() {
  return (
    <div>
        <BrowserRouter>
            <PageRoute/>
        </BrowserRouter>
    </div>
  );
}
export default App;