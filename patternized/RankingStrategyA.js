class RankingStrategyA extends PhotoRankingStrategy {
    rankPhotosResult(photos) {
        // Implementación de una estrategia de ranking
        // Por ejemplo, ordenando por el score y devolviendo las top 10 fotos
        return photos.sort((a, b) => b.score - a.score).slice(0, 10);
    }
}