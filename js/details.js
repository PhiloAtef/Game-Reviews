import { ui } from "./UI.js";

export class Details{
    constructor(gamesID){
        /* constructor creating necessary instances and calling necessary functions */
        this.ui = new ui();
        this.getDetails(gamesID);
    }

    /* function for querying the API for the game details provided by the ID in the parameters */
    async getDetails(gameID){

        /* loading functionality */
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
        
        /* fetching details from api endpoint using game Id */
        let response = await fetch(url,options);
        /* converting to json */
        let finalresponse = await response.json();
        /* displaying the details contained in the response */
        this.ui.displayDetails(finalresponse);
        loading.classList.add("d-none");
    }
}