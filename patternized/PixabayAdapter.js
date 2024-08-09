class PixabayAdapter extends PhotoAPI {
    constructor(apiKey) {
        super();
        this.apiKey = apiKey;
    }

    searchPhotos(query) {
        // Adaptación de la llamada a la API de Pixabay
        // const url = `https://pixabay.com/api/?key=${this.apiKey}&q=${query}`;
        // return fetch(url).then(response => response.json()).then(data => data.hits);
        // Para simplificar, devolveremos una lista simulada de fotos
        return [{ photoId: "pixabay1", score: 80 }, { photoId: "pixabay2", score: 75 }];
    }
}