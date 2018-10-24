import React from 'react';
import CorrectGuess from './CorrectGuess';

const UserFeedback = ({ randomNumber, userInput, startOver }) => {
  if (userInput == '') {
    return <p>Waiting on your guess...</p>;
  } else if (userInput == randomNumber) {
    return <CorrectGuess userInput={userInput} startOver={startOver} />;
  } else if (userInput > randomNumber) {
    return (
      <p>
        You're guess was {userInput}. <br />
        Almost...Your guess is too high.
      </p>
    );
  } else {
    return (
      <p>
        You're guess was {userInput}. <br />
        Almost...Your guess is too low.
      </p>
    );
  }
};

export default UserFeedback;
