// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';


test('<Controls /> snapshot', () => {
    const wrapper = rtl.render(<Controls />)
    expect(wrapper.asFragment()).toMatchSnapshot();
})