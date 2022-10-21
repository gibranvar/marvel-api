
const eventContent = {
    render:() => {
        const urlEvent = 'https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=54d242a7bb0fbb74d3abf596dda41f2b&hash=7d5e2dcf861fd30bb6a5cfa9583c283c'

        let events = document.querySelector("#events-content");
        let eventInner = '';
        fetch(urlEvent)
        .then(res => res.json())
        .then((json) => {
        for (const evnt of json.data.results) {
            
            eventInner += `
            <div class="event-container">
                <div id="event-inner" class="row g-0 overflow-hidden flex-md-row mb-4 position-relative">
                  <div id="event-description" class="col p-4 d-flex flex-column position-static">
                    <h3 id="info-evnt" class="mb-0 text-danger">${evnt.title}</h3>
                    <div id="info-evnt" class="mb-1 text-muted">${evnt.modified}</div>
                    <p class="card-text text-white mb-auto">T${evnt.description}</p>
                    <a id="link-evnt" target="_blank" href="${evnt.urls[0].url}" class="stretched-link">Continue reading</a>
                  </div>
                  <div id="img-event" class="col-auto d-none d-lg-block">
                    <img  src="${evnt.thumbnail.path}.${evnt.thumbnail.extension}" />
                  </div>
                </div>
              </div>

            ` ;
        }
        events.innerHTML= eventInner
       })
        
    }
    
}
eventContent.render();

