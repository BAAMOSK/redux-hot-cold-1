import React from 'react';
import {shallow, mount} from 'enzyme';

import { GuessForm } from './guess-form';
import { makeGuess } from '../actions';
describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

  it('dispatches makeGuess from submitGuess', () => {
      const dispatch = jest.fn();
      const guess = 12;
      const wrapper = shallow(<GuessForm guess={guess} dispatch={dispatch} />);
      wrapper.find('input[type="text"]').node.value = guess;
      const link = wrapper.find('form');
      link.simulate('submit', {
        preventDefault(){}
      });
      expect(dispatch).toHaveBeenCalledWith(makeGuess(guess));
    });
});