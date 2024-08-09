class PixabayAdapter extends PhotoAPI {
    constructor(apiKey) {
        super();
        this.apiKey = apiKey;
    }

    searchPhotos(query) {
        // Adaptación de la llamada a la API de Pixabay
        const url = `https://pixabay.com/api/?key=${this.apiKey}&q=${query}`;
        fetch(url).then(response => response.json()).then(data => data.hits);

        // acá se debería hacer la adaptación de los datos recibidos de la API a un formato común para el ranking
        // (por ejemplo, si la API de Pixabay devuelve un score de 0 a 100, se podría adaptar a un score de 0 a 10)
        // manera que el ranking pueda comparar fotos de Pixabay con fotos de Unsplash, o sea, "estandarizar" los datos
        // ...

        // Para simplificar, devolveremos una lista simulada de fotos con sus scores para el ranking
        return [{ photoId: "pixabay1", score: 80 }, { photoId: "pixabay2", score: 75 }];
    }
}