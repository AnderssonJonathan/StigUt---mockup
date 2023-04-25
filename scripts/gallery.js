const gallery = document.querySelector('#trails-gallery');

const listTrails = async() => {
    const url = 'http://localhost:3000/trails';
    
    const response = await fetch(url);

    if(response.status == 200){
        const data = await response.json();
        console.log(data);

        data.forEach((trail) => {
            gallery.insertAdjacentHTML(
            'beforeend',
            `<div class="trail-image">
                <p>${trail.name}</p>
                <img src="/images/${trail.imageUrl}"/>
            </div>`
            );
        });
    }
};

listTrails();