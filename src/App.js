import { useState, useEffect } from 'react';
import tutorialsData from './tutorial.js';
import './App.css';
import './resonsive.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <div>
      <Nav />
      <HeaderMain />
    </div >
  );
}

function Nav() {
  return (
    <div className="nav">
      <a style={{ textDecoration: 'none', color: 'white' }} href="/"><h3>That Js Dude</h3></a>
      <button className="btn-custom btn-green"> Sign In</button>
    </div >
  );
}

function HeaderMain() {
  return (
    <div className="header-main">
      <h1>Exclusive React Workshop for beginners!</h1>
      <p>Once in a year opportunity to learn and build your first React app</p><br />
      <button className="btn-custom btn-blue">Learn More</button>
    </div >
  );
}

function Main() {
  return (
    <section className="main">
      <Left />
      <Right />
    </section >
  );
}

function Left() {
  return (
    <div className="left">
      <JSConfig />
      <TutorialsContainer />
    </div>
  );
}

function Right() {
  return (
    <div className="right">
      <PersonalTraining />
      <RecentVideos />
    </div >
  );
}

function JSConfig() {
  return (
    <div className="js-config">
      <h4>JS Confusing Parts</h4>
      <p>Understand this, scope, hoisting, closure, inheritance, bind, call, apply, prototype, event
        delegation, dom, timers and many more caveats.</p>
    </div>
  );
}

function TutorialsContainer() {
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    setTutorials(tutorialsData);
  }, []);

  return (
    <div id="tutorials-container">
      {
        tutorials.map((tutorial, i) => <Tutorial title={tutorial.title} desc={tutorial.desc} key={i} />)
      }
    </div>
  );
}

function Tutorial(props) {
  const { title, desc } = props;
  return (
    <div className="tutorial">
      <h2>{title.slice(0, 50)}</h2>
      <p>{desc.slice(0, 90)}</p><br />
      <button className="btn-custom btn-red">View Details</button>
    </div>
  );
}

function PersonalTraining() {
  return (
    <div id="personal-training">
      <h2>Personal Training for $30</h2>
      <p>If you need career guide, personal interview tips, mock interview, Life Coaching, or anything
        else,
        you can book me for 30 min. Just pay $30 via paypal to Codinism (my company) and then book a
        time
        slot You can Book me</p>
    </div>
  );
}

function RecentVideos() {
  return (
    <div id="recent-videos">
      <h2>Recent Videos</h2>
      <ul>
        <li>15+ tricks for dev tool</li>
        <li>Understanding this</li>
        <li>be expert in JS Array</li>
        <li>How Browsers works in 4 min</li>
      </ul>
    </div>
  );
}

export default App;
