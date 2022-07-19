import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Project 1
// import Header from './Components/Header'
// import Footer from './Components/Footer';
// import MainContent from './Components/MainContent';

//import App from './App';

// const staticPage = (
//   <div>
//     <img alt="react_image" src={img} width="60px"/>
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// )

// function CustomPage() {
//   return(
//     <div className='box'>
//       <Header/>
//       <MainContent />
//       <Footer />
//     </div>
//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vita
