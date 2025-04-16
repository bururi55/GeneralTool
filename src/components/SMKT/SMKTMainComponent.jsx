import React from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "./Snowflakes/Snowflakes";
import Garland from "./Garland/Garland";
import NavigationButtons from "./NavigationButtons/NavigationButtons";
import Ticker from "./Ticker/Ticker";
import CopyButtons from "./CopyButtons/CopyButtons";
import CopyButtons2 from "./CopyButtons/CopyButtons2";
import "../../App.css";

const SMKTMainComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="app">
      <FloatingHearts />
      <Garland />
      <center>
        <NavigationButtons />

        <button
          className="switchButton"
          onClick={() => navigate("/GeneralTool/mm")}
        >
          Переключиться на Мегамаркет
        </button>
      </center>
      <Ticker />
      <div id="parent">
        <div id="left">
          <CopyButtons />
        </div>
        <div id="right">
          <CopyButtons2 />
        </div>
      </div>
    </div>
  );
};

export default SMKTMainComponent;
