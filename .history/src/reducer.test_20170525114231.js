import reducerTest from './reducer';
import { newGame, makeGuess, toggleInfoModal } from './actions';

describe('reducerTest', () => {

  it('testing the undefined state', () => {
    const initialState = {
      guesses: [],
      feedback: 'Make your guess!',
      showInfoModal: false
    };
    const state = reducerTest(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      guesses: [],
      feedback: 'Make your guess!',
      showInfoModal: false
    });

  });

})