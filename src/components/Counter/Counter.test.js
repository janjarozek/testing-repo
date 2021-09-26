import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import Counter from './Counter';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('If the component Counter has start props', () => {
    // const divElement = document.createElement("div");
    // ReactDOM.render("<Counter />", divElement);
    render(<Counter />);
    const inputLabel = screen.getByText(/Write number:/i);
    expect(inputLabel).toBeInTheDocument();
    // expect(divElement.querySelector("label").textContent.toBe("Write number:") );
});