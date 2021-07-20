import React from 'react'
import './css/Main.css'

const Main = ({ repo, loading}) => {

    if(loading){
        return <h2>Loading....</h2>
    }

    return (
        <div id='repo'>
            {repo.map(rep => (
                <div id="card" key={rep.id}>
                    <div id='content'>
                        <h3>{rep.login}</h3>

                        <a href={rep.html_url}>
                            <img src={rep.avatar_url} alt=""/>    
                        </a>

                        <p>{repo.name}</p>
                        <p>{repo.full_name}</p>
                    </div>
                </div>
            ))}
        </div>
        )
}

export default Main;