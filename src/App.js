//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionScore, setLionScore] = useState(12);
  const [tigerScore, setTigerScore] = useState(33);
  function handleClick(e) {
    // setLionScore(state => state + 7);
    // console.log(e.target.name);
    switch (e.target.name) {
      case "touchdown": setLionScore(state => state + 7);
      break;
      case "fieldgoal": setLionScore(state => state + 3);
        
        break;
    
      default:
        break;
    }
  }
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
  <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
  <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button name="touchdown" onClick={handleClick} className="homeButtons__touchdown">Home Touchdown</button>
          <button name="fieldgoal" onClick={handleClick} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button name="touchdown" onClick={() => {
            setTigerScore(tigerScore + 7);
          }} className="awayButtons__touchdown">Away Touchdown</button>
          <button name="fieldgoal" onClick={() => {
            setTigerScore(tigerScore + 3);
          }} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
