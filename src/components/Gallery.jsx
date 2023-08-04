//gallery of puppy cards
//import local components
import SearchBar from './SearchBar'
import AddPuppy from './AddPuppy'
//import data
import fetchPlayers from '../api/index'
//import react hooks
import { useState, useEffect } from 'react'


//Component for gallery of puppy cards
export default function Gallery(){  
    //create a state for players
    const [players, setPlayers] = useState(null);

    //use effect to fetch one time our players
    useEffect(()=>{
        setPlayers(fetchPlayers()); //set players to our data from our function
    },[])
    console.log("players:", players); 
    
    return(
        <>
            <SearchBar/>{//add search bar component
        }   <AddPuppy/> {//add new player form component
        }           
        </>
    )
}