// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';


test('<Controls /> snapshot', () => {
    const wrapper = rtl.render(<Controls />)
    expect(wrapper.asFragment()).toMatchSnapshot();
});

test('lock & open to render', () => {
    const wrapper = rtl.render(<Controls />);
    const locked = wrapper.getByText(/lock gate/i);
    const opened = wrapper.getByText(/close gate/i);
    expect(locked).toBeDefined();
    expect(opened).toBeDefined();
    
});

test("open/close state changes 1 time", () => {
    const toggleClosed = jest.fn();
    const wrapper = rtl.render(<Controls toggleClosed={toggleClosed} />);
    const button = wrapper.getByText(/close gate/i);
    rtl.act(() => {rtl.fireEvent.click(button);});
    expect(toggleClosed).toHaveBeenCalledTimes(1);
  });
  
  test("mock lock button rendered 0 times", () => {
    const mock = jest.fn();
    const wrapper = rtl.render(<Controls toggleLocked={mock} />);
    const button = wrapper.getByText(/lock gate/i);
    rtl.act(() => {rtl.fireEvent.click(button);});
    expect(mock).toHaveBeenCalledTimes(0);
  });