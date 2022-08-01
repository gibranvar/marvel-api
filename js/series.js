
const seriesContent = {
    render:() => {
        const urlSeries = 'https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=54d242a7bb0fbb74d3abf596dda41f2b&hash=7d5e2dcf861fd30bb6a5cfa9583c283c'

        let series = document.querySelector("#series");
        let serie = '';
        fetch(urlSeries)
        .then(res => res.json())
        .then((json) => {
        for (const series of json.data.results) {
            serie += `
            <div class="movie">
                    <img alt="${series.title}" src="${series.thumbnail.path}.${series.thumbnail.extension}"/>
                    <div class="movie-info" >
                        <h6>${series.title}</h6>
                    </div>
                    <div class="overview">
                        <h5>${series.title}</h5>
                            
                            
                            ${series.description}
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

