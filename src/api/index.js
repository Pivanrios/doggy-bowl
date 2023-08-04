
const url = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-d/players';

const fetchPlayers = async () =>{
    try {
        const response = await fetch(url);
        const res = await response.json();
        const players = res;
        console.log("players:",res.data.players);
        return players.data;
    } catch (error) {
        console.error
    }
}

export default fetchPlayers;