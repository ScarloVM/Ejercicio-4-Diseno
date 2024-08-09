class BromeliaPictInventory {
    constructor(apiAdapters, rankingStrategy) {
        this.apiAdapters = apiAdapters; // Lista de adaptadores (PixabayAdapter, UnsplashAdapter)
        this.rankingStrategy = rankingStrategy; // Estrategia de ranking
    }

    fetchPhotos(query) {
        let allPhotos = [];
        for (const adapter of this.apiAdapters) {
            allPhotos = allPhotos.concat(adapter.searchPhotos(query));
        }

        return this.rankingStrategy.rankPhotosResult(allPhotos);
    }

    setRankingStrategy(rankingStrategy) {
        this.rankingStrategy = rankingStrategy;
    }
}