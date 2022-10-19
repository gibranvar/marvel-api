const comicContent = {
  render: () => {
    const urlComic = `${URL}/comics?${API_KEY}`;

    let sliderComic = document.querySelector("#slider-comic");
    let innerComic = "";
    fetch(urlComic)
      .then((res) => res.json())
      .then((json) => {
        for (const comics of json.data.results) {
          innerComic += `
            <div class="comic-container">
            <a target="_blank" href="${comics.urls[0].url}"><img id="img-comic" alt="${comics.title}" src="${comics.thumbnail.path}.${comics.thumbnail.extension}"/></a>
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
