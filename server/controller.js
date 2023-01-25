module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },   
    getFortune: (req, res) => {
        const fortune = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A fresh start will put you on your way.", "A friend is a present you give yourself."];
      
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },   //
    destroyAll: (req, res) => {
        const warning = ["Strike 1", "I'll give you one last chance"];

        let randomIndex = Math.floor(Math.random() * warning.length);
        let randomWarning = warning[randomIndex];

        res.status(200).send(randomWarning);
    },
    gameLink: (req, res) => {
        const game = [`https://www.chess.com/`, `https://www.chess.com/`];
      
        let randomIndex = Math.floor(Math.random() * game.length);
        let randomGame = game[randomIndex];
      
        res.status(200).send(randomGame);
    },
    delImg: (req, res) => {
        const imgNum = ['del1', 'del2', 'del3', 'del4'];
      
        let randomIndex = Math.floor(Math.random() * imgNum.length);
        let randomImg = imgNum[randomIndex];
      
        res.status(200).send(randomImg);
}