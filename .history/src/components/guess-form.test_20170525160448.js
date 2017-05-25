import React from 'react';
import {shallow, mount} from 'enzyme';

import { GuessForm } from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

  it('dispatches makeGuess from submitGuess', () => {
      const dispatch = jest.fn();
      const guess = 12;
      const wrapper = shallow(<GuessForm value={guess} dispatch={dispatch} />);
      const link = wrapper.find('form');
      link.simulate('submit', {
        preventDefault(){}
      });
      expect(dispatch).toHaveBeenCalledWith(makeGuess(guess));
    });
});