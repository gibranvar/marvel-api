const marvel = {
  render: () => {
    const urlCharacterId =
      "https://gateway.marvel.com:443/v1/public/comics/100731?ts=1&apikey=54d242a7bb0fbb74d3abf596dda41f2b&hash=7d5e2dcf861fd30bb6a5cfa9583c283c";
    const urlComicId =
      "https://gateway.marvel.com:443/v1/public/comics/96852?ts=1&apikey=54d242a7bb0fbb74d3abf596dda41f2b&hash=7d5e2dcf861fd30bb6a5cfa9583c283c";
    const urlEventId =
      "https://gateway.marvel.com:443/v1/public/events/323?ts=1&apikey=54d242a7bb0fbb74d3abf596dda41f2b&hash=7d5e2dcf861fd30bb6a5cfa9583c283c";

    fetch(urlCharacterId)
      .then((res) => res.json())
      .then((json) => {
        for (const comic of json.data.results) {
          let heroUrlId = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
          let carouselInner = document.querySelector("#carousel-image");
          carouselInner.setAttribute("src", heroUrlId);

          let heroTitleId = `${comic.title}`;
          let heroTitle = document.querySelector("#carousel-title");
          heroTitle.append(heroTitleId);
        }
      });

    fetch(urlEventId)
      .then((res) => res.json())
      .then((json) => {
        for (const event of json.data.results) {
          let eventUrlId = `${event.thumbnail.path}.${event.thumbnail.extension}`;
          let eventImg = document.querySelector("#carousel-image1");
          eventImg.setAttribute("src", eventUrlId);

          let evntTitleId = `${event.title}`;
          let evntTitle = document.querySelector("#carousel-title1");
          evntTitle.append(evntTitleId);

          let evntCapId = `${event.description}`;
          let evntCap = document.querySelector("#carousel-capt1");
          evntCap.append(evntCapId);
        }
      });

    fetch(urlComicId)
      .then((res) => res.json())
      .then((json) => {
        for (const comic of json.data.results) {
          let comicTitleId = `${comic.title}`;
          let comicUrlId = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

          let comicTitle = document.querySelector("#carousel-title2");
          comicTitle.append(comicTitleId);

          let comicImg = document.querySelector("#carousel-image2");
          comicImg.setAttribute("src", comicUrlId);
        }
      });
  },
};
marvel.render();
