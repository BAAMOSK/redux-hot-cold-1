import reducerTest from './reducer';
import { newGame, makeGuess, toggleInfoModal } from './actions';

describe('reducerTest', () => {

  it('testing the undefined state', () => {
    let naturalNumber;
    const rightAnswer = Math.round(Math.random() * 100);
    if(rightAnswer >= 0 && rightAnswer <= 100) {
      naturalNumber = true;
    }
    const state = reducerTest(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: naturalNumber,
      showInfoModal: false
    });

  });

})