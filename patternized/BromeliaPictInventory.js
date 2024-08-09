class BromeliaPictInventory {
    constructor(apiAdapters, rankingStrategy) {
        this.apiAdapters = apiAdapters; // Lista de adaptadores (PixabayAdapter, UnsplashAdapter)
        this.rankingStrategy = rankingStrategy; // Estrategia de ranking
    }

    fetchPhotos(query) {
        // Buscar fotos en todas las APIs
        let allPhotos = [];
        for (const adapter of this.apiAdapters) {
            allPhotos = allPhotos.concat(adapter.searchPhotos(query));
        }
        // Aplicar la estrategia de ranking
        return this.rankingStrategy.rankPhotosResult(allPhotos);
    }

    setRankingStrategy(rankingStrategy) {
        this.rankingStrategy = rankingStrategy;
    }
}