class RankingStrategyB extends PhotoRankingStrategy {
    rankPhotosResult(photos) {
        // Implementación de otra estrategia de ranking
        // Por ejemplo, seleccionando fotos con criterios específicos
        return photos.filter(photo => photo.score > 80).slice(0, 10);
    }
}