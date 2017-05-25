import React from 'react';
import { shallow } from 'enzyme';

import { TopNav } from './top-nav';

describe('<TopNav />', () => {
    //first one is action second is method
    it('dispatches newGame from newGame', () => {
      //This creates mock function
      const dispatch = jest.fn();
      const link = wrapper.find('.new');
      //wrapper is newGame()
      const wrapper = shallow(<TopNav dispatch={dispatch} />);
      //instance is newGame???
      const instance = wrapper.instance();
      //runs newGame
      link.stimulate('click', {
        preventDefault(){}
      });
      instance.newGame();
      //Testing
      expect(dispatch).toHaveBeenCalledWith(newGame());
    });

});