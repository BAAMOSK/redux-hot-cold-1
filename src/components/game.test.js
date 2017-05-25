import React from 'react';
import {shallow} from 'enzyme';

import Game  from './game';
//ask why brackets dont work

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

   
});