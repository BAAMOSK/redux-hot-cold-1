import reducerTest from './reducer';
import { newGame, makeGuess, toggleInfoModal } from './actions';

describe('reducerTest', () => {

  it('testing the undefined state', () => {

    const state = reducerTest(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100),
    showInfoModal: false
    });
  });

})