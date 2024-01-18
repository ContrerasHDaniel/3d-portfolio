import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Daniel</span> 👋🏼
      <br />A Software Engineer from México
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "Picked up many skills and experience working in startup-like companies"
      }
      link={"/about"}
      btnText={"Learn more"}
    />
  ),
  3: (
    <InfoBox
      text={
        "Worked in numerous successfull projects over the years. Let's see some!"
      }
      link={"/projects"}
      btnText={"Visit my portfolio"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Need a project done or looking for a dev? I'm just a few keystrokes away"
      }
      link={"/contact"}
      btnText={"Let's talk"}
    />
  ),
};

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
