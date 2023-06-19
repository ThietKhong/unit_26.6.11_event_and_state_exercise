import { useState } from 'react';

import "./EightBall.css";
import defaultAnswers from "./answers.json";
import { choice } from './random';

function EightBall({ answers = defaultAnswers })  {
    const [answer, setAnswer] = useState({
      msg: "Think of a Question.",
      color: "green",
    });
  
    function handleClick(evt) {
      setAnswer(choice(answers));
    }
  
    return (
        <div
            className="EightBall"
            onClick={handleClick}
            style={{ backgroundColor: answer.color }}
        >
          <b>{answer.msg}</b>
        </div>
    );
  }
  
  
  export default EightBall;