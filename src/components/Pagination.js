import React from 'react'
import './css/Pagination.css'

const Pagination = ({ repoPerPage, totalRepo, paginate }) => {
    
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalRepo / repoPerPage ); i++){
        pageNumbers.push(i);
    }
    
    return(
        <>
            <nav>
                <ul>
                    {pageNumbers.map(number => (
                        <li key={number}>
                            <a id='alink' onClick={() => paginate(number)} href="!#">
                                {number}
                            </a>
                        </li>
                    ))} 
                </ul>
            </nav>
        </>
    )

}

export default Pagination;