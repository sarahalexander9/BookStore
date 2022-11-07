import './App.css';
import axios from 'axios'
import Books from './components/books';
import { useEffect, useState } from 'react';
import Main from "./components/Main";
import Navbar from './components/Navbar';
const API_URL = "http://localhost:3000/api/v1/books";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if(mounted) {
        setBooks(items);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Main />
      <br></br><br></br>
      <h1 style={{color: "white"}}>What books do you want to read before the year ends?</h1>
      <br></br>
      <p style={{color: "white"}}><i>“Reading one book is like eating one potato chip.”</i>- Diane Duane</p>
      <Books books={books} />
    </div>
  );
}

export default App;
