class RankingStrategyA extends PhotoRankingStrategy {
    rankPhotosResult(photos) {
        // Implementación de una estrategia de ranking
        // Por ejemplo, ordenando por el score y devolviendo las top 10 fotos
        // ls idea es que cada estrategia de ranking implemente su propio algoritmo
        // el bridge pattern permite que el cliente pueda cambiar la estrategia de ranking
        return photos.sort((a, b) => b.score - a.score).slice(0, 10);
    }
}