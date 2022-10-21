function hiddenApp() {
    document.getElementById("app").style.display = "none";
    document.getElementById("nav-list").style.display= "none";
    document.getElementById("search-hidden").style.display = "block";
  }
  
  const frmBuscar = document.querySelector("#input-search");
  const searchButton = document.querySelector("#search-button");
  const searchContent = document.querySelector("#search-content");
  
  const filter = () => {
    const textSearch = frmBuscar.value.toLowerCase();
  
    searchContent.innerHTML = "";
  
    fetch(`${APIMARVEL}`)
      .then((res) => res.json())
      .then((json) => {
        for (const name of json.data.results) {
        
        let overviewUndefined = "";
        let overview = "";
        let variantDescription = "";
        let imageCover = `${name.thumbnail.path}.${name.thumbnail.extension}`
          if (name.description === null) {
            overview = "Sorry, no description!";
          }if (name.description === "") {
            variantDescription = "Sorry, no description!";
          }if (name.description != null) {
            overview = name.description;
          }if(name.description === undefined) {
              overviewUndefined = "Sorry, no description!";
            }if(imageCover === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"){
                imageCover = "https://terrigen-cdn-dev.marvel.com/content/prod/1x/default/explore-no-img.jpg"
            }
  
        let titleCmSearch = name.title.toLowerCase();
  
          if (titleCmSearch.indexOf(textSearch) !== -1) {
            searchContent.innerHTML += `
              <div class="serie">
                      <img alt="${name.title}" src="${imageCover}"/>
                      <div class="serie-info" >
                          <h6>${name.title}</h6>
                      </div>
                      <div class="overview">
                          <h5>${name.title}</h5>
                          
                          <p class="description-web">
                          ${overview}
                          ${variantDescription}
                          ${overviewUndefined}
                          </p>
                          
                          <p class="description-mobile">
                          ${overview}
                          ${variantDescription}
                          ${overviewUndefined}
                          </p>
                           
                          <br/> 
                          <a target="_blank" href="${name.urls[0].url}"><button class="know-more">Know More</button></a>
                      </div>
              </div>
               `;
          }
        }
  
        if (searchContent.innerHTML === "") {
          searchContent.innerHTML += `<div id="row-comics" class="row featurette ">
              <div class="col-4 ">
                <img class="mt-5 ms-5 " src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_studios_lob_mh.png" alt="">
      
                 <p class="lead m-5 display-3 text-danger">NO MATCHES FOUND!</p>
              </div>
              <div id="col-img-comic" class="col-md-4">
                <img id="row-img-banner" src="https://thumbs.gfycat.com/AcclaimedIncompatibleFish-size_restricted.gif" height="500px"  alt="">
              </div>
            </div>
            `;
        }
      });
  };
  searchButton.addEventListener("click", filter);
  frmBuscar.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector("#search-button").click();
    }
  });