import React from 'react'
import Main from './Main'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


test('Repo showing name', () => {
    const component = render(<Main/>);
    const mainElement = component.getByTestId('api-name');

    expect(mainElement.textContent).toBe(String)
})