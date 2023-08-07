//New player form

import { useState } from "react"


export default function AddPuppy(){
    const [userName, setUserName] = useState("");
    const [breed, setBreed] = useState("");
    const [status, setStatus] = useState(null);
    const [imageUrl,setImageUrl] = useState("");
    const [team, setTeam] = useState("");

    
    function handleSubmit(){

    }
    return(
        <form  
            id={'new-player-form'}
            className='container'
            action=""
            onSubmit={handleSubmit}>
            <h3>Add New Player</h3>
            <label>Name:{""}
                <input 
                    type="text"
                    value={userName}
                    onChange={e=> setUserName(e.target.value)}/>
            </label>
            <label>Breed:
                <input 
                    type="text"
                    value={breed}
                    onChange={e=> setBreed(e.target.value)}/>
            </label>
            <label>Status:
                <span>
                    <input 
                        type="radio"
                        value='field'
                        name="status"
                        />field
                    <input 
                        type='radio'
                        value='bench'
                        name="status"/>bench
                </span>
            </label>
            <label>Image:
                <input 
                    type="text"
                    value={imageUrl}
                    onChange={e=> setImageUrl(e.target.value)}/>
            </label>
            <label>Team
                <input 
                    type="text"
                    value={team}
                    onChange={e=> setTeam(e.target.value)} />
            </label>
            <button>Submit</button>
        </form>
    )
}