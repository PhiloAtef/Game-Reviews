import { ui } from "./UI.js";
import { Details } from "./details.js";


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
        /* creating new instance of ui to display the cards */
        this.ui = new ui();
    }

    /* main query function */
    async getGamesByCategory(category){

        /* loading effect*/
        let loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        /* url for api with parameters passed by the function */
        let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
	        method: 'GET',
	        headers: {
		    'X-RapidAPI-Key': '6cf8e9a870mshd2d1b97d648ac4dp12d7f2jsn1b2c22b6df96',
		    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	        }
        };

        /* fetching data from api endpoint */
        let response = await fetch(url, options);
        /* translating it from string to json */
        let finalresponse = await response.json();
        /* creates the cards layout and display game data from final response */
        this.ui.displayGameCard(finalresponse);
        /* adds the event that shows details tab */
        this.addDetailsEvent();
        /* removes loading after func is done */
        loading.classList.add("d-none");

    }

    /* function to add event listener to all cards so that when clicked details shows up */
    addDetailsEvent(){
        document.querySelectorAll(".card").forEach((item)=>{
            item.addEventListener("click", ()=>{
                this.showDetails(item.dataset.id)
            });
        });
    }

    /* function to display the details page and populate it with data from the function getdetails inside Details class */
    showDetails(gameID){
        let details = new Details(gameID);
        document.querySelector(".landing-page").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }
}