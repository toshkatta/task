import React from 'react';
import Opening from './Opening';
import Openings from '../Openings/Openings';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('', () => {
    // const opening = shallow(<Opening
    //     id='1'
    //     name='name'
    //     title='title'
    //     onClickHandler={Openings.handleClick}
    //     onDoubleClickHandler={Openings.hideDescription}
    // />)
    const openings = Enzyme.shallow(<Openings/>)
    console.log('opening: ', openings)
    // expect(openings.className).toEqual('')
})