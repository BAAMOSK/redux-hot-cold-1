import React from 'react';
import { shallow } from 'enzyme';

import { TopNav } from './top-nav';
import {newGame, toggleInfoModal} from '../actions';

describe('<TopNav />', () => {
    it('dispatches toggleInfoModal-action from toggleInfoModal-function', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<TopNav dispatch={dispatch} />);
      const link = wrapper.find('.what');
      link.simulate('click', {
        preventDefault(){}
      });
      expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
    });

});