export interface Film {
    id: string;
    title: string;
    original_title: string;
    original_title_romanised: string;
    description: string;
    director: string;
    producer: string;
    release_date: string;
    running_time: string;
    rt_score: string;
    people: any[];
    species: any[];
    locations: any[];
    vehicles: any[];
    url: string;
}