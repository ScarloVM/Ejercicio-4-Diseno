class BromeliaPictInventory {
    constructor() {
        this.pixabayAPI = new PixabayAPI();
        this.unsplashAPI = new UnsplashAPI();
    }

    fetchPhotos(query) {
        const pixabayPhotos = this.pixabayAPI.searchPhotos(query);
        const unsplashPhotos = this.unsplashAPI.searchPhotos(query);

        return this.rankPhotosResult(unsplashPhotos, pixabayPhotos);
    }

    rankPhotosResult(unsplashPhotos, pixabayPhotos) {
        // Combinar los resultados de ambas APIs en un solo array
        const combinedPhotos = [
            ...unsplashPhotos.map(photo => ({
                source: 'unsplash',
                likes: photo.likes,
                url: photo.urls.regular
            })),
            ...pixabayPhotos.map(photo => ({
                source: 'pixabay',
                likes: photo.likes,
                url: photo.pageURL
            })) 
        ];

        // Ordenar las fotos por el número de likes en orden descendente
        combinedPhotos.sort((a, b) => b.likes - a.likes);

        // Retornar las top 10 fotos
        return combinedPhotos.slice(0, 10);
    }
}

class PixabayAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiUrl = "https://pixabay.com/api/";
    }

    searchPhotos(query) {
        const url = `${this.apiUrl}?key=${this.apiKey}&q=${encodeURIComponent(query)}`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                if (parseInt(data.totalHits) > 0) {
                    return data.hits.map(hit => hit.pageURL);
                } else {
                    console.log('No hits');
                    return [];
                }
            })
            .catch(error => console.error('Error fetching data from Pixabay:', error));
    }
}

class UnsplashAPI {
    constructor(options) {
        this.apiUrl = options.apiUrl || 'https://api.unsplash.com';
        this.accessKey = options.accessKey;
        this.headers = options.headers || {};
    }

    searchPhotos(query, requestOptions = {}) {
        const url = `${this.apiUrl}/search/photos?query=${query}&client_id=${this.accessKey}`;
        const headers = { ...this.headers, ...requestOptions.headers };
        return fetch(url, { headers })
            .then(response => response.json())
            .then(data => data.results);
    }

    getPhoto(photoId, requestOptions = {}) {
        const url = `${this.apiUrl}/photos/${photoId}?client_id=${this.accessKey}`;
        const headers = { ...this.headers, ...requestOptions.headers };

        return fetch(url, { headers })
            .then(response => response.json());
    }
}
