import React from 'react';
import Button from '@material-ui/core/Button';

const CorrectGuess = ({ userInput, startOver }) => {
  return (
    <div>
      <p>
        You're awesome!!!!! <br />
        You guessed the correct number: {userInput}
      </p>
      <Button variant="contained" color="secondary" onClick={startOver}>
        Start over
      </Button>
    </div>
  );
};

export default CorrectGuess;
