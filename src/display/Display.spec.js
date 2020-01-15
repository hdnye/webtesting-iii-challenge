// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

test('Display is unlocked', () => {
    const wrapper = rtl.render(<Display unlocked={true} />);
    const unlocked = wrapper.getByText(/unlocked/i);
    expect(unlocked).toBeVisible();
})

test('Display is open', () => {
    const wrapper = rtl.render(<Display open={true} />);
    const open = wrapper.getByText(/open/i);
    expect(open).toHaveClass('green-led');
})

test('Display is locked', () => {
    const wrapper = rtl.render(<Display locked={true}/>);
    const locked = wrapper.getByText(/locked/i);
    expect(locked).toBeVisible();
})

test('Display is closed', () => {
    const wrapper = rtl.render(<Display closed={true} />);
    const closed = wrapper.getByText(/closed/i);
    expect(closed).toHaveClass('red-led');
})

test('<Display /> snapshot', () => {
    const wrapper = rtl.render(<Display />)
    expect(wrapper.asFragment()).toMatchSnapshot();
})