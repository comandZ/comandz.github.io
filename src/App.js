import './assets/sass/App.scss';
import SecNav from './components/SecNav';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <div className='mastHead'>
        <span>working</span>
        <SecNav/>
      </div>
      <div className='listing'>
        <Routes/>
      </div>
    </div>
  );
}

export default App;
