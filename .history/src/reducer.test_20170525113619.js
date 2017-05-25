import { initialState } from './reducer';
import { newGame, makeGuess, toggleInfoModal } from './actions';

describe('reducerTest', () => {

  it('testing the undefined state', () => {
    const state = reducerTest(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual(initialState);
  });

})