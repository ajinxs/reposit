import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import '@testing-library/jest-dom/extend-expect'

test('Render the correct content', () => {
   const root = React.createElement("div");
   ReactDOM.render(<App/>, root);

   expect(root.querySelector("h1").textContent).toBe("Github Public Respositories")
})