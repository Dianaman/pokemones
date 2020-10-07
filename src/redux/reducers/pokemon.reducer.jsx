import { SEE_DETAIL, FETCHED } from '../types/pokemon.types';
import { SHOW_LOADING, SHOW_ERROR } from '../types/common.types';

const initialState = {
    previous: '',
    next: '',
    results: [],
    error: null,
    isLoading: true,
    url: 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0',
    id: null,
    detalle: null
};

export function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHED:
            const { 
                next,
                previous,
                results
            } = action.payload.response;

            const url = action.payload.url;

            return {
                ...state,
                isLoading: false,
                next,
                previous,
                results,
                url
            };
        case SEE_DETAIL:
            const pokemon = action.payload.response;

            return {
                ...state,
                isLoading: false,
                detalle: pokemon
            };
        case SHOW_LOADING:
            const { 
                isLoading
            } = action.payload;

            return {
                ...state,
                isLoading
            };
        case SHOW_ERROR:
            const { 
                error
            } = action.payload;

            return {
                ...state,
                error
            };
        default:
            return state;
    }
}
