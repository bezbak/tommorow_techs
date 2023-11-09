import { useState } from "react";
import Header from "../../components/Header/Header";
import lol from './AboutUs.module.scss'
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import AboutPostBanner from "../../components/AboutPostBanner/AboutPostBanner";
import AboutNowWe from "../../components/AboutNowWe/AboutNowWe";
import AboutThisUs from "../../components/AboutThisUs/AboutThisUs";
import AboutMission from "../../components/AboutMission/AboutMission";
const AboutUs = () => {

    return (
        <div className={lol.AboutUs}>
            <Header />
            <AboutBanner/>
            <AboutPostBanner/>
            <AboutNowWe/>
            <AboutThisUs/>
            <AboutMission/>
        </div>
    );
}

export default AboutUs;