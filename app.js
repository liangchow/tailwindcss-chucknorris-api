// const loadJoke = async(req, res) => {
async function loadJoke(req, res) {
    try {
        const res = await fetch('https://api.chucknorris.io/jokes/random',{
            headers: {
                Accept: "application/json"
            }
        })

        const json = await res.json()
        console.log(json)
        document.getElementById("loadingJoke").innerHTML = json.value

    } catch(err){
        console.log(err)
    }
}

// document.getElementById("loadJokeButton").addEventListener("click", loadJoke)