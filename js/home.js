export class Home{
    constructor(){
        /* call base function */

        /* changing the html class of active by adding an event listener and doing operations on the class list  */
        document.querySelectorAll(".menu a").forEach((link)=> {
            link.addEventListener("click", (e)=>{
                document.querySelector(".menu .active").classList.remove("active");
                e.target.classList.add("active");

                /* add this.function and param are e.target.dataset.category */
            });
        });
        /* this.ui = new ui(); */
    }

    /* main query function */
    async getGamesByCategory(category){

        /* add loading effect here */
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

        /* send final response somewhere for actions */

    }
}