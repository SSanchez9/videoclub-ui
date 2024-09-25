import { MovieDetails } from "./movie.model";

export interface ExtendedMovie extends MovieDetails {
    belongs_to_collection: null | object; // Puede ser un objeto que defina la colección
    budget: number;
    genres: { id: number; name: string }[];
    homepage: string | null;
    imdb_id: string | null;
    origin_country: string[]; // Lista de países de origen
    original_title: string;
    production_companies: {
        id: number;
        name: string;
        logo_path: string | null;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    revenue: number;
    runtime: number | null;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string | null;
}