const loadJoke = async() => {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random',{
            headers: {
                Accept: "application/json"
            }
        })

        const json = await response.json()
        document.getElementById("loadingJoke").innerHTML = json.value
    } catch(err){
        console.log(err)
    }
}

document.getElementById("loadJokeButton").addEventListener("click", loadJoke)