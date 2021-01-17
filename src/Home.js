import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards'

function Home({user}) {
    return (
        <div>
         <Navbar username={user} />
         <Cards user={user} />
        </div>
    )
}

export default Home
