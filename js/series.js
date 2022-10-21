
const seriesContent = {
    render:() => {
        const urlSeries = 'https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=54d242a7bb0fbb74d3abf596dda41f2b&hash=7d5e2dcf861fd30bb6a5cfa9583c283c'

        let series = document.querySelector("#series");
        let serie = '';
        fetch(urlSeries)
        .then(res => res.json())
        .then((json) => {
        for (const series of json.data.results) {
            let overview = ("")
            let imageCover = `${series.thumbnail.path}.${series.thumbnail.extension}`
            if(imageCover === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"){
                imageCover = "https://terrigen-cdn-dev.marvel.com/content/prod/1x/default/explore-no-img.jpg"
            }
            const description = series.description
            if(description === null)
                { overview = `${series.startYear} - ${series.endYear}`
            }if(description !== null){
                overview = series.description
            }
            serie += `
            <div class="serie">
                    <img alt="${series.title}" src="${imageCover}"/>
                    <div class="serie-info" >
                        <h6>${series.title}</h6>
                    </div>
                    <div class="overview">
                        <h5>${series.title}</h5>
                        
                        <p class="description-web">${overview}</p>
                        
                        <p class="description-mobile">
                        ${series.startYear} - ${series.endYear}
                        </p>
                         
                        <br/> 
                        <a target="_blank" href="${series.urls[0].url}"><button class="know-more">Know More</button></a>
                    </div>
            </div>
            
            ` ;
        }
        series.innerHTML= serie
       })
        
    }
    
}
seriesContent.render();

