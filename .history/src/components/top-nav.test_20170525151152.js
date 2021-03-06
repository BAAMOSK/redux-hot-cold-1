import React from 'react';
import { shallow } from 'enzyme';

import { TopNav } from './top-nav';
import { NEW_GAME, toggleInfoModal} from '../actions';

describe('<TopNav />', () => {
    it('renders without crashing', () => {
      shallow(<TopNav />);
    });

    it('dispatches toggleInfoModal-action from toggleInfoModal-function', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<TopNav dispatch={dispatch} />);
      const link = wrapper.find('.what');
      link.simulate('click', {
        preventDefault(){}
      });
      expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
    });

    it('dispatches newGame-action from newGame-function', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<TopNav dispatch={dispatch} />);
      const link = wrapper.find('.new');
      link.simulate('click', {
        preventDefault(){}
      });
      expect(dispatch.mock.calls[0][0].type).toEqual(NEW_GAME);
    });
});