import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills2 } from "./components/Skills2"; 
import { Projects } from "./components/Projects";
import { Sidebar } from "./components/Sidebar";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  // By using the useEffect Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => { console.log(data)})
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Sidebar />
      <Banner />
      <Skills2 />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

// -- Contact form only function --
// const App = () => {
//   return (
//     <div className="container">
//       <div className="left-column">
//         <div className="content">
//           <img src="/astronaut.png" alt="your-image-description-here" />
//         </div>
//       </div>
//       <div className="right-column">
//         <ContactForm />
//       </div>
//     </div>
//   );
// };

export default App;

//---- For CloudFare: ----//
// Default Task
// exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);

// Build Task
// exports.build = series(scssTask, jsTask);

