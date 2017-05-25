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

    it('Should reset the input when the form is submitted', () => {
        const wrapper = mount(<GuessForm dispatch={() => {}}/>);
        const input = wrapper.find('input[type="text"]');
        input.node.value = 10;
        wrapper.simulate('submit');
        expect(input.node.value).toEqual('');
    });

});
