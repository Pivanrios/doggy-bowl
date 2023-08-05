//New player form


export default function AddPuppy(){

    return(
        <form  id={'new-player-form'}>
            <h3>New Player</h3>
            <label htmlFor="">Name:
                <input type="text" />
            </label>
            <label htmlFor="">Breed:
                <input type="text" />
            </label>
            <label htmlFor="">Status
                <input type="radius" />
            </label>
            <label htmlFor="">Team
                <input type="text" />
            </label>
            <button>Submit</button>
        </form>
    )
}