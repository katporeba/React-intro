// we are importing logo
// import logo from './logo.svg';
// we are importing app css
// import './App.css';

import Header from "./components/Header";
// import React from "react";

//components can be functions or classes, most people these days use functions with hooks
const App = () => {
  return (
      <div className='constainer'>
        <Header title={1} />
        {/*  <Header />*/}
      </div>
  )
}

// TODO: function component
// function App() {
//       const name ="Brad";
//       const x = true;
//       return (
//           // the difference - className instead of class, for -> htmlFor
//           //if we don't want a div - then create <> and end with </>
//           <div className="container">
//               {/*<h1>Hello from react</h1>*/}
//               {/*<h2>Hello {1+1} {name} {x ? 'yes' : 'no'} </h2>*/}
//               <Header />
//           </div>
//     );
// }

// TODO: class component
// class App extends React.Component {
//     render() {
//         return <h1>Hello from a class</h1>
//     }
// }


export default App;
