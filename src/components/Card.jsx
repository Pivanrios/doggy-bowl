

export default function Card({dog}){
    //determine color 
    let color = "";//declare string variable to store our color 
    if(dog.status == 'field'){//if is active or on field 
        color = "rgb(17, 219, 3)" //green
    }else{
        color="red"
    }


    return(
       <div id="card">
            <div id="card-inner">
                <div id="card-front" className="container" style={{
                    backgroundImage:`url(${dog.imageUrl})`,//set background to our img url from the props
                    backgroundSize:'cover',
                }}>
                    <header id="status" style={{//header of the card
                        backgroundColor:`orange`
                    }}>
                        <div id="status" style={{backgroundColor:`${color}`}}></div>{//depending our condition we set the background color
                    }</header>
                    <h3 className="card">{dog.name}</h3>{//footer of card where we render name
            }</div>
                <div id="card-back">
                    <h2>{dog.name}</h2> 
                    <p>Breed: {dog.breed}</p> 
                    <p>Status: {dog.status}</p>
                    <p>Birth: {dog.createdAt}</p>
                    <button id="details-button">Details</button>
                    <button id="delete-button">Delete</button>
                </div>
            </div>
       </div>
    )
}