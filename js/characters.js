
const characterContent = {
    render:() => {
        const urlSeries = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=54d242a7bb0fbb74d3abf596dda41f2b&hash=7d5e2dcf861fd30bb6a5cfa9583c283c'

        let character = document.querySelector("#character-inner");
        let characterContent = '';
        fetch(urlSeries)
        .then(res => res.json())
        .then((json) => {
        for (const hero of json.data.results) {
            characterContent += `
            <div class="character">
                    <img alt="${hero.name}" src="${hero.thumbnail.path}.${hero.thumbnail.extension}"/>
                    <div class="chtr-info" >
                        <h6>${hero.name}</h6>
                    </div>
                    <div class="overview-character">
                        <h5>${hero.name}</h5>
                            
                            
                            ${hero.description}
                        <br/> 
                        <a target="_blank" href="${hero.urls[0].url}"><button class="know-more">Know More</button></a>
                    </div>
            </div>
            
            ` ;
        }
        character.innerHTML= characterContent
       })
        
    }
    
}
characterContent.render();

