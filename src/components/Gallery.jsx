//gallery of puppy cards
//import local components
import SearchBar from './SearchBar'
import AddPuppy from './AddPuppy'
import Card from './Card'
//import data
import fetchPlayers from '../api/index'
//import react hooks
import { useState, useEffect } from 'react'


//Component for gallery of puppy cards
export default function Gallery(){  
    //create a state for players
    const [players, setPlayers] = useState([]);

    //use effect to fetch one time our players
    useEffect(()=>{
        const getPlayers = async () =>{
            try {
                const puppies = await fetchPlayers();
                setPlayers(puppies)
            } catch (error) {
                console.error
            }
        }
        getPlayers();
    },[])
    console.log("players:", players)
    
    return(
        <>
            <SearchBar/>{//add search bar component
        }   <AddPuppy/> {//add new player form component
        }   {players.map(e=>{ return <Card key={e.id} dog={e}/>})}
        </>
    )
}