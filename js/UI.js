export class ui{
    /* function to display the cards tileset */
    displayGameCard(games){
        /* container for the html to passed off */
        let container = ``;
        /* for loop to iterate over every game and add it to a card */
        for (let i = 0; i < games.length; i++) {
            container+= ` 
            <div class="col">
            <div data-id="${games[i].id}"  class="card h-100 bg-transparent" role="button" >
               <div  class="card-body">
                  <figure class="position-relative">
                     <img class="card-img-top object-fit-cover h-100" src="${games[i].thumbnail}" />
                  
                  </figure>
      
                  <figcaption>
      
                     <div class="hstack justify-content-between">
                        <h3 class="h6 small">${games[i].title}</h3>
                        <span class="badge text-bg-primary p-2">Free</span>
                     </div>
      
                     <p class="card-text small text-center opacity-50">
                        ${games[i].short_description}
                     </p>
      
                  </figcaption>
               </div>
      
               <footer class="card-footer small hstack justify-content-between">
      
                  <span class="badge badge-color">${games[i].genre}</span>
                  <span class="badge badge-color">${games[i].platform}</span>
      
               </footer>
            </div>
         </div>
         `;
        }
        /* adding the html inside it's designated area outlined by the gameData Id */
        document.getElementById("gameData").innerHTML = container;
    }
    /* function for the details page html */
    displayDetails(game){
        let container = `<div class="col-md-4">
        <img src="${game.thumbnail}" class="w-100" alt="image details" />
     </div>
     <div class="col-md-8">
        <h3>Title: ${game.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${game.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${game.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${game.status}</span> </p>
        <p class="small">${game.description}</p>
        <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
     </div>`;
     document.getElementById("detailsContent").innerHTML =container;

     /* closing buttion functionality event listener */
     document.getElementById("btnClose").addEventListener("click", () => {
        document.querySelector(".landing-page").classList.remove("d-none");
        document.querySelector(".details").classList.add("d-none");
     });
    }

}