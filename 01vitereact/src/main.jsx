import React from 'react';
import ReactDOM from 'react-dom/client';

function MyApp() {
  return (
    <div>
      <h1>Custom App | chAI</h1>
    </div>
  )
}

// const ReactElement= {
//   type: "a",
//   props :{
//       href: "https:www.google.com",
//       target: "_blank"
//   },
//   children: "Click Here To Visit."

// }

const anotherElement = (
  <a href="https:www.google.com" target= "_blank">"Click Here To Visit."</a>
)

const ReactElement = React.createElement(
  'a',
  {
    href:"https:www.google.com",
    target: "_blank"
  },
  "Click Here To Visit."

)


ReactDOM.createRoot(document.getElementById('root')).render(

  ReactElement
  
)
