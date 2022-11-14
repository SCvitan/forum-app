import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Users from './components/Users';
import Tablenext from './components/Tablenext';


function App() {
  return (
    <div className='App'>
      <h1 className='App'>Forum</h1>
      <Posts/>
      <Users/>
      <Tablenext/>
    </div>
  );
}

export default App;
