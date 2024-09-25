
export interface MovieDetails {
    adult: boolean;             // Indica si la película es para adultos
    backdrop_path: string;      // URL del fondo de la película
    genre_ids: number[];        // Identificadores de géneros de la película
    id: number;                 // ID de la película
    original_language: string;  // Idioma original de la película
    original_title: string;     // Título original de la película
    overview: string;           // Sinopsis de la película
    popularity: number;         // Índice de popularidad de la película
    poster_path: string;        // URL del póster de la película
    release_date: string;       // Fecha de estreno de la película (en formato YYYY-MM-DD)
    title: string;              // Título de la película
    video: boolean;             // Indica si la película tiene un video disponible
    vote_average: number;       // Promedio de votación de la película
    vote_count: number;         // Número total de votos
}
