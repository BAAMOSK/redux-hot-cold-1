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
      const guess = '12';
      //difference between mount and shallow???
      const wrapper = mount(<GuessForm dispatch={dispatch} />);
      wrapper.find('input[type="text"]').node.value = guess;
      //const link = wrapper.find('form');
      //link.simulate('submit', {
      //  preventDefault(){}
      //});
      wrapper.simulate('submit');
      expect(dispatch).toHaveBeenCalledWith(makeGuess(guess));
    });
});