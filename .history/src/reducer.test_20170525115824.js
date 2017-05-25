import reducerTest from './reducer';
import { newGame, makeGuess, toggleInfoModal } from './actions';

describe('reducerTest', () => {
//const initialState = {
  //  guesses: [],
    //feedback: 'Make your guess!',
    //correctAnswer: Math.round(Math.random() * 100),
    //showInfoModal: false
//};
  it('testing the undefined state', () => {
    const state = reducerTest(undefined, {type: '__UNKNOWN'});
    expect(state.guesses).toEqual([]);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);

  });

})