const comicContent = {
  render: () => {
    const urlComic = `${URL}/comics?${API_KEY}`;

    let sliderComic = document.querySelector("#slider-comic");
    let innerComic = "";
    fetch(urlComic)
      .then((res) => res.json())
      .then((json) => {
        for (const comics of json.data.results) {
          let imageCover = `${comics.thumbnail.path}.${comics.thumbnail.extension}`
            if(imageCover === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"){
                imageCover = "https://terrigen-cdn-dev.marvel.com/content/prod/1x/default/explore-no-img.jpg"
            }
          innerComic += `
            <div class="comic-container">
            <a target="_blank" href="${comics.urls[0].url}"><img id="img-comic" alt="${comics.title}" src="${imageCover}"/></a>
            <div class="comic-info">
                <h6>${comics.title}</h6>
            </div>
            </div> 
            `;
        }
        sliderComic.innerHTML = innerComic;
      });
  },
};
comicContent.render();
