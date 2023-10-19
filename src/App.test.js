import React from 'react';
import { render, fireEvent, getByTitle } from '@testing-library/react';
import Keyboard from './Component/Keyboard';
import '@testing-library/jest-dom/extend-expect';


describe('Keyboard Component', () => {
  it('Checking if it renders the component', () => {
    const { getByText } = render(<Keyboard />);
    expect(getByText('A')).toBeInTheDocument();
    expect(getByText('Shift')).toBeInTheDocument();
    expect(getByText('Space')).toBeInTheDocument();
    expect(getByText('Caps Lock')).toBeInTheDocument();
    
  });

  it('Checking if it types characters into the input field', () => {
    const { getByText, getByTestId } = render(<Keyboard />);
    fireEvent.click(getByText('H')); // Click the 'H' key
    fireEvent.click(getByText('E')); // Click the 'e' key
    fireEvent.click(getByText('L')); // Click the 'l' key
    fireEvent.click(getByText('L')); // Click the 'l' key
    fireEvent.click(getByText('O')); // Click the 'o' key
    // Ensure that the input field displays 'Hello'
    const input =getByTestId('input-field') 
    expect(input).toHaveValue('hello');
  });

  
  it('Checking the backspace button', () => {
    const { getByText, getByTestId } = render(<Keyboard />);
    fireEvent.click(getByText('H')); // Click the 'H' key
    fireEvent.click(getByText('E')); // Click the 'e' key
    fireEvent.click(getByText('L')); // Click the 'l' key
    fireEvent.click(getByText('L')); // Click the 'l' key
    fireEvent.click(getByText('O')); // Click the 'o' key
    fireEvent.click(getByText('Backspace')); // Click the Backspace key
    const input =getByTestId('input-field') 
    expect(input).toHaveValue('hell');
  });
  it('Checking if Shift button work corrrectly', () => {
    const { getByText, getByTestId } = render(<Keyboard />);
    fireEvent.click(getByText('H')); // Click the 'H' key
    fireEvent.click(getByText('E')); // Click the 'e' key
    fireEvent.click(getByText('Shift'));
    fireEvent.click(getByText('L')); // Click the 'l' key
    fireEvent.click(getByText('L')); // Click the 'l' key
    fireEvent.click(getByText('Shift'));
    fireEvent.click(getByText(/5\s*%\s*/)); // Click the 'o' key
    fireEvent.click(getByText('O')); 
    const input =getByTestId('input-field') 
    expect(input).toHaveValue('heLl%o');
  });
  it('checking the correct working of the space and the clear button', () => {
    const { getByText, getByTestId } = render(<Keyboard />);
    fireEvent.click(getByText('H')); // Click the 'H' key
    fireEvent.click(getByText('E')); // Click the 'e' key
    fireEvent.click(getByText('Space'));
    fireEvent.click(getByText('L')); // Click the 'l' key
    fireEvent.click(getByText('L')); // Click the 'l' key
    fireEvent.click(getByText('Shift'));
    fireEvent.click(getByText(/5\s*%\s*/)); // Click the 'o' key
    fireEvent.click(getByText('O')); 
    const input =getByTestId('input-field') 
    expect(input).toHaveValue('he ll%o');
    fireEvent.click(getByText('Clear'))
    expect(getByTestId('input-field')).toHaveValue('')
  });
});
