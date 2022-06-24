
import './App.css';
import Movie from './components/Movie';

function App() {
  return (
    <>
    <header>
      <h1 className="title">Movie Finder</h1>
      <input className="search-bar" type="search" placeholder="Search for Movies..."/>
    </header>
    <body>
      <Movie/>
    </body>
    </>
  );
}

export default App;
