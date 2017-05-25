import React from 'react';
import { shallow } from 'enzyme';

import { TopNav } from './top-nav';
import {newGame, toggleInfoModal} from '../actions';

describe('<TopNav />', () => {
    //first one is action second is method
    it('dispatches newGame from newGame', () => {
      //This creates mock function
      const dispatch = jest.fn();
      //wrapper is newGame()
      const wrapper = shallow(<TopNav dispatch={dispatch} />);
      const link = wrapper.find('.what');
      //instance is newGame???
      //const instance = wrapper.instance();
      //runs newGame
      link.simulate('click', {
        preventDefault(){}
      });
      //instance.newGame();
      //Testing
      expect(dispatch).toHaveBeenCalled();
      //expect(dispatch.mock.calls[0][0]).toEqual(toggleInfoModal());
      expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
    });

});