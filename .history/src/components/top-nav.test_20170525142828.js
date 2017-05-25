import React from 'react';
import { shallow } from 'enzyme';

import { TopNav } from './top-nav';

describe('<TopNav />', () => {

    it('dispatches newGame from newGame', () => {
      //This creates mock function
      const dispatch = jest.fn();
      //wrapper is newGame()
      const wrapper = shallow(<TopNav dispatch={dispatch} />);
      //instance is ???
      const instance = wrapper.instance();
      //
      instance.newGame();
      //Testing
      expect(dispatch).toHaveBeenCalledWith(newGame());
    });

});