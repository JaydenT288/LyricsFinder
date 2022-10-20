import './App.css';
import Favorite from './components/Favorite';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Track from './components/Track';

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Track />
      <Favorite />
    </>
  );
}

export default App;
