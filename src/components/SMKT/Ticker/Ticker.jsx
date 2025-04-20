import React from "react";
import "./Ticker.css";

const Ticker = () => {
  return (
    <div className="ticker-container">
      <div className="ticker">
        <marquee className="stroka">
          Аууу эй, ПИСЯТ ДВА © Albak52 &emsp;&emsp;&emsp;&emsp; Чат не хуй, сиди
          кайфуй © ilyaostr &emsp;&emsp;&emsp;&emsp; Не имей медведя, а раки
          зимуют © bururi &emsp;&emsp;&emsp;&emsp; Не суди, да судим не будешь,
          не буди, да не будидабудай © bururi &emsp;&emsp;&emsp;&emsp;
          ПОЖАЛУЙСТА © icyshaxcs &emsp;&emsp;&emsp;&emsp; Я НЕ ТВОЯ МАМА! ©
          ВерОчка &emsp;&emsp;&emsp;&emsp; Геншин топ АЭЭУАУЭ © Алуона
          &emsp;&emsp;&emsp;&emsp;
        </marquee>
      </div>
      <a
        className="svyaz"
        href="https://t.me/Bururi5586"
        target="_blank"
        rel="noopener noreferrer"
      >
        Связь
      </a>
      <p className="versia">Version 1.3</p>
    </div>
  );
};

export default Ticker;
