import React, { useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import './App.css';

const App = () => {
  //  const [repo, setRepo]= useState([]);
  //  const [loading, setLoading] = useState(false);
  //  const [currentPage, setCurrentPage] = useState(1);
  //  const [repoPerPage, setPostPerPage] = useState(10);

    
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    //axios.get('https://api.github.com/users')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)  
      })
  });

  return (
    <>
      <Header/>
    </>
  );
}

export default App;
