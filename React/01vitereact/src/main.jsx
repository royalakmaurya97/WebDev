import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return (
//     <h3>Hello Chai App !</h3>
//   )
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "Chai aur react";

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser,                              {/* We can writte only evaluated(final) expression */}
)

createRoot(document.getElementById('root')).render(

  <>
  <App/>
  </>

)
