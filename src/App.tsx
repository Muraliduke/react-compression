import React, {useEffect} from 'react';
import './App.css';
import NavBar from './components/common/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/common/Footer';
import ScrollToTop from './components/ScrollTop';
import { db, storage } from './firebase'; 

import {
  Route,
  Redirect,Switch
} from "react-router-dom";
// import { AnimatedSwitch } from 'react-router-transition';
import { spring } from 'react-router-transition';


function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};
function App() {

  useEffect(() => {
    storage.child(`HouseCleaning.jpg`).getDownloadURL().then((url) => {
    })
    const unsub = db.collection('koops').onSnapshot(snapshot => {
      // console.log(snapshot.docs);
      const allBooks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // console.log(allBooks)
    });
    return () => {
      console.log('cleanup');
      unsub();
    };
  }, []);
  return (
    <div className="App">
      <NavBar/>
        <ScrollToTop>
          {/* <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper"
          > */}
          <Switch
          >
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Redirect from='*' to='/'/>

          </Switch>
        </ScrollToTop>
      <Footer/>
    </div>
  );
}

export default App;
