class UnsplashAdapter extends PhotoAPI {
    constructor(apiKey) {
        super();
        this.apiKey = apiKey;
    }

    searchPhotos(query) {
        // Adaptación de la llamada a la API de Unsplash
        // const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${this.apiKey}`;
        // return fetch(url).then(response => response.json()).then(data => data.results);
        // Para simplificar, devolveremos una lista simulada de fotos
        return [{ photoId: "unsplash1", score: 90 }, { photoId: "unsplash2", score: 85 }];
    }
}