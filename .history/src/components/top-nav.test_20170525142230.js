import React from 'react';
import {shallow} from 'enzyme';

import { TopNav } from './top-nav';

describe('<TopNav />', () => {

    it('dispatches newGame from newGame', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<TopNav dispatch={dispatch} />);
      const instance = wrapper.instance();
      instance.newGame();
      expect(dispatch).toHaveBeenCalledWith(newGame());
    })

});