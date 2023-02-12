// import logo from './logo.svg';
import './App.css';
import MyNav from './MyNav';
import MyFooter from './MyFooter';
import Welcome from './Welcome';
import LatestRelease from './LatestRelease';

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Welcome></Welcome>
      <LatestRelease></LatestRelease>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
