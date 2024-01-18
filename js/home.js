import { ui } from "./UI.js";

export class Home{
    constructor(){
        /* call base function for retreiving games*/
        this.getGamesByCategory("mmorpg")
        /* changing the html class of active by adding an event listener and doing operations on the class list  */
        document.querySelectorAll(".menu a").forEach((link)=> {
            link.addEventListener("click", (e)=>{
                /* removes blueish tint on button */
                document.querySelector(".menu .active").classList.remove("active");
                /* adds it to the clicked button */
                e.target.classList.add("active");
                /* calls the new list of games based on the clicked category */
                this.getGamesByCategory(e.target.dataset.category);
            });
        });
        this.ui = new ui();
    }

    /* main query function */
    async getGamesByCategory(category){

        /* add loading effect here */

        /* url for api with parameters passed by the function */
        let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
	        method: 'GET',
	        headers: {
		    'X-RapidAPI-Key': '6cf8e9a870mshd2d1b97d648ac4dp12d7f2jsn1b2c22b6df96',
		    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	        }
        };

        let response = await fetch(url, options);
        let finalresponse = await response.json();
        console.log(finalresponse);
        /* send final response somewhere for actions */

        this.ui.displayGameCard(finalresponse);
    }
}