//gallery of puppy cards
import SearchBar from './SearchBar'
import AddPuppy from './AddPuppy'
import fetchPlayers from '../api/index'
import Card from './Card'
import { useState, useEffect } from 'react'



export default function Gallery(){  
    const [players, setPlayers] = useState(null);

    useEffect(()=>{
        setPlayers(fetchPlayers());
    },[])
    console.log("players:", players); 
    


    return(
        <>
            <SearchBar/>
            <AddPuppy/>            
            
        </>
    )
}