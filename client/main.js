const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => { 
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)


//
const boomBtn = document.getElementById("boomButton")

let clickState = 0

const destroyAll = () => {
    clickState++;
    
    if (clickState ==1) axios.get("http://localhost:4000/api/warning/")
        .then(res => { 
            const data = res.data;
            alert(data);
        })
        else if (clickState ==2) axios.get("http://localhost:4000/api/warning/")
        .then(res => { 
            const data = res.data;
            alert(data);
        })
       else if (clickState ==3) {
            document.getElementById('boomButton').src="https://media.tenor.com/-g-Um3DDvV0AAAAd/explosion.gif";
            }
    clickState = 0
}

boomBtn.addEventListener('click', destroyAll)


const gameLinkBtn = document.getElementById("gameLinkButton")

const gameLink = () => {
    axios.get("http://localhost:4000/api/game/")
        .then(res => { 
            const data = res.data;
            window.location.href(data)
    });
};



// const delImgBtn = document.getElementById("delImgButton")

// delImgBtn.addEventListener = document.getElementById("delImgButton")