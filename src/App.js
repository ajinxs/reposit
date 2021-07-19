import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'
import Pagination from './components/Pagination'
import './App.css';

const App = () => {
    const [repo, setRepo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [repoPerPage] = useState(10);
    
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   ANOTHER PUBLIC REPO - https://api.github.com/repositories
  //                       - https://api.github.com/repositories?since=300
  //   //axios.get('https://api.github.com/users')
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.log(err)  
  //     })
  // },[]);

    useEffect(() =>{
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('https://api.github.com/users');
        setRepo(res.data);
        setLoading(false);
      }

      fetchPosts();
    }, []);

    //Get current repos
    const indexOfLastRepo = currentPage * repoPerPage;
    const indexOfFirstRepo = indexOfLastRepo - repoPerPage;
    const currentRepo = repo.slice(indexOfFirstRepo, indexOfLastRepo);

    //Change Page from the number
    const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div>
      <Header/>

      <Main 
        repo={currentRepo} 
        loading={loading}
      />

      <Pagination 
        repoPerPage={repoPerPage} 
        totalRepo={repo.length} 
        paginate={paginate}
      />
    </div>
  );
}

export default App;
