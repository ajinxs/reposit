import React from 'react'
import Header from './Header'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


test("header renders with correct text", () => {
    const { getByTestId } = render(<Header/>);
    const headerElement = getByTestId("header");

    expect(headerElement.textContent).toBe("Github Public Respositories")  
})