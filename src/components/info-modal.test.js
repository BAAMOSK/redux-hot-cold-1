import React from 'react';
import {shallow} from 'enzyme';

import {InfoModal} from './info-modal';

import {toggleInfoModal} from '../actions';

describe('<InfoModal />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoModal />);
    });

    it('dispatches the toggleInfoModal from hide', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<InfoModal dispatch={dispatch} />);
        const link = wrapper.find('.close');
        link.simulate('click', {
            preventDefault(){}
        });
        expect(dispatch).toHaveBeenCalledWith(toggleInfoModal());
        //TALK ABOUT THIS
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch.mock.calls[0][0]).toEqual(toggleInfoModal());
    })
});