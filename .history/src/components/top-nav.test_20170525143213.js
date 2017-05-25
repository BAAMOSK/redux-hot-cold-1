import React from 'react';
import { shallow } from 'enzyme';

import { TopNav } from './top-nav';

describe('<TopNav />', () => {

    it('dispatches newGame from newGame', (e) => {
      //This creates mock function
      const dispatch = jest.fn(e);
      //wrapper is newGame()
      const wrapper = shallow(<TopNav dispatch={dispatch} />);
      //instance is newGame???
      const instance = wrapper.instance();
      //runs newGame
      instance.newGame();
      //Testing
      expect(dispatch).toHaveBeenCalledWith(newGame(e));
    });

});