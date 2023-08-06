

export default function Card({key,dog}){
    //determine color 
    let color = "";//declare string variable to store our color 
    if(dog.status == 'field'){//if is active or on field 
        color = "rgb(17, 219, 3)" //green
    }else{
        color="red"
    }


    return(
        <div id="card" className="container" style={{
            backgroundImage:`url(${dog.imageUrl})`,//set background to our img url from the props
            backgroundSize:'cover',
        }}>
            <header id="status" style={{//header of the card
                backgroundColor:`orange`
            }}>
                <div id="status" style={{backgroundColor:`${color}`}}></div>{//depending our condition we set the background color
            }</header>
            <h3 className="card">{dog.name}</h3>{//footer of card where we render name
            }
        </div>
    )
}