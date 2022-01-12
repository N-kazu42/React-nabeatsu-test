/* eslint react-hooks/exhaustive-deps: off */

import React, { useEffect, useState } from "react";
import { ColorfullMessage } from "./components/ColorfullMessage";

const App = () => {
  console.log("saisyo");

  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      let target = /[3]/.test(num.toString());
      if (num % 3 === 0 || target) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfullMessage color="blue"> お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">お元気です</ColorfullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(｀・ω・´)　←おもろー</p>}
    </>
  );
};

export default App;
