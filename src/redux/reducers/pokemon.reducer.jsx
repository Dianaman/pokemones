import { SEE_DETAIL, FETCHED } from '../types/pokemon.types';

const initialState = {
    previous: '',
    next: '',
    results: [],
    error: null,
    isLoading: true,
    url: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
};

export function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHED:
            const { 
                next,
                previous,
                results
            } = action.payload.response;

            return {
                ...state,
                isLoading: false,
                next,
                previous,
                results
            };
        case SEE_DETAIL:
                
            break;
        default:
            return initialState;
    }
}