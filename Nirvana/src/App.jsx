import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import AboutUs from "./pages/about-us/AboutUs";
import UserForm from "./pages/user-form/UserForm";
// import PreferenceForm from "./pages/preference-form/PreferenceForm";
import Matches from "./pages/matches/Matches";
import YourMatches from "./pages/your-matches/YourMatches";
import MyProfile from "./pages/my-profile/MyProfile";
import NotFound from "./pages/not-found/NotFound";
import LoginForm from "./pages/login/LoginForm";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <BrowserRouter>
            
                <Routes>
                    <Route path="" element={<LandingPage />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/userForm" element={<UserForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    {/* <Route path="/prefernceForm" element={<PreferenceForm />} /> */}
                    <Route path="/matches" element={<Matches />} />
                    <Route path="/yourMatches" element={<YourMatches />} />
                    <Route path="/myProfile" element={<MyProfile />} />
                    {/* <Route path= '/update/:id' element={<UpdateProducts/>}/>
            <Route path= '/view/:id' element={<ViewProduct/>}/> */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;