import reducerTest from './reducer';
import { newGame, makeGuess, toggleInfoModal } from './actions';

describe('reducerTest', () => {

  it('testing the undefined state', () => {
    const state = reducerTest(undefined, {type: '__UNKNOWN'});
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    expect(Number.isInteger(state.correctAnswer)).toBe(true);
    expect(state.showInfoModal).toBe(false);
  });

  it('should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducerTest(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('newGame', () => {
    it('Should start a new game', () => {
      let state;
      state = reducerTest(state, newGame());
      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual('Make your guess!');
      expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(state.correctAnswer).toBeLessThanOrEqual(100);
      expect(Number.isInteger(state.correctAnswer)).toBe(true);
      expect(state.showInfoModal).toBe(false);
    });
  });

  describe('makeGuess', () => {
    it('Should add a guess to the guesses array', () => {
      let state = {
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: 90,
        showInfoModal: false
      };

      state = reducerTest(state, makeGuess(1));
      expect(state.guesses).toEqual([1]);
      expect(state.feedback).toEqual('You\'re Ice Cold...');
      expect(state.correctAnswer).toEqual(90);
      expect(state.showInfoModal).toBe(false);
    });

    it('Should add a guess to the guesses array', () => {
      let state = {
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: 90,
        showInfoModal: false
      };

      state = reducerTest(state, makeGuess(60));
      expect(state.guesses).toEqual([60]);
      expect(state.feedback).toEqual('You\'re Cold...');
      expect(state.correctAnswer).toEqual(90);
      expect(state.showInfoModal).toBe(false);
    });

    it('Should add a guess to the guesses array', () => {
      let state = {
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: 90,
        showInfoModal: false
      };

      state = reducerTest(state, makeGuess(80));
      expect(state.guesses).toEqual([80]);
      expect(state.feedback).toEqual('You\'re Warm');
      expect(state.correctAnswer).toEqual(90);
      expect(state.showInfoModal).toBe(false);
    });

    it('Should add a guess to the guesses array', () => {
      let state = {
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: 90,
        showInfoModal: false
      };

      state = reducerTest(state, makeGuess(89));
      expect(state.guesses).toEqual([89]);
      expect(state.feedback).toEqual('You\'re Hot!');
      expect(state.correctAnswer).toEqual(90);
      expect(state.showInfoModal).toBe(false);
    });

    it('Should add a guess to the guesses array', () => {
      let state = {
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: 90,
        showInfoModal: false
      };

      state = reducerTest(state, makeGuess(90));
      expect(state.guesses).toEqual([90]);
      expect(state.feedback).toEqual('You got it!');
      expect(state.correctAnswer).toEqual(90);
      expect(state.showInfoModal).toBe(false);
    });
  });

  describe('showInfoModal', () => {
    it('toggle showInfoModal', () => {
      let state = {
        guesses: [],
        feedback: 'Make your guess!',
        correctAnswer: 90,
        showInfoModal: false
      };
      state = reducerTest(state, toggleInfoModal());
      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual('Make your guess!');
      expect(state.correctAnswer).toEqual(90);
      expect(state.showInfoModal).toBe(true);
    });


  });

});

