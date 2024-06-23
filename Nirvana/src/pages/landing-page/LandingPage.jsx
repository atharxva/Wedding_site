import React from "react";
import styles from "./LandingPage.module.css";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import FeatureSection from "../../components/FeatureSection";
import Workflow from "../../components/Workflow";
import Pricing from "../../components/Pricing";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";


function LandingPage() {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <HeroSection />
                <FeatureSection />
                <Workflow />
                <Pricing />
                <Testimonials />
                <Footer />
            </div>
        </>
    );
}

export default LandingPage;
