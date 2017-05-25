import { newGame, NEW_GAME, makeGuess, MAKE_GUESS, toggleInfoModal, TOGGLE_INFO_MODAL} from './actions';

describe('newGame', () => {
  it('should return the action', () => {
    const action = newGame();
    expect(action.type).toEqual(NEW_GAME);
  });
})