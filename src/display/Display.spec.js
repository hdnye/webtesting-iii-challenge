// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

test('Display is unlocked', () => {
    const wrapper = rtl.render(<Display />);
    const element = wrapper.getByText(/unlocked/i);
    expect(element).toBeVisible();
})


test('<Display /> snapshot', () => {
    const wrapper = rtl.render(<Display />)
    expect(wrapper.asFragment()).toMatchSnapshot();
})