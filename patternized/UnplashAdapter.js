class UnsplashAdapter extends PhotoAPI {
    constructor(apiKey) {
        super();
        this.apiKey = apiKey;
    }

    searchPhotos(query) {
        // Adaptación de la llamada a la API de Unsplash
        const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${this.apiKey}`;
        const headers = { ...this.headers, ...requestOptions.headers };
        fetch(url, { headers }).then(response => response.json()).then(data => data.results);

        // acá se debería hacer la adaptación de los datos recibidos de la API a un formato común para el ranking
        // (por ejemplo, si la API de Unsplash devuelve un score de 0 a 100, se podría adaptar a un score de 0 a 10)
        // manera que el ranking pueda comparar fotos de Pixabay con fotos de Unsplash, o sea, "estandarizar" los datos
        //...

        // Para simplificar, devolveremos una lista simulada de fotos con sus scores para el ranking
        return [{ photoId: "unsplash1", score: 90 }, { photoId: "unsplash2", score: 85 }];
    }
}