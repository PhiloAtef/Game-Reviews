import { ui } from "./UI.js";

export class Details{
    constructor(gamesID){
        this.ui = new ui();
        
        this.getDetails(gamesID);
        
    }
    async getDetails(gameID){
        let loading = document.querySelector(".loading");
        loading.classList.remove("d-none");

        let url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6cf8e9a870mshd2d1b97d648ac4dp12d7f2jsn1b2c22b6df96',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let response = await fetch(url,options);
        let finalresponse = await response.json();
        this.ui.displayDetails(finalresponse);
        loading.classList.add("d-none");
    }
}