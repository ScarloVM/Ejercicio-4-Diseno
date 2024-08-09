class RankingStrategyB extends PhotoRankingStrategy {
    rankPhotosResult(photos) {
        // Implementación de otra estrategia de ranking
        // Por ejemplo, seleccionando fotos con un score mayor a 80 y devolviendo las top 10 fotos
        return photos.filter(photo => photo.score > 80).slice(0, 10);
    }
}