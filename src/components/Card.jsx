

export default function Card({key,dog}){
    
    return(
        <div id="card">
            <span>{dog.status}</span>
            <img src={dog.imageUrl} alt="" />
            <h3>{dog.name}</h3>
        </div>
    )
}