import { Movie } from './movie';

export interface List {
    id: number;
    name: string;
    movies?: Movie[];
}
