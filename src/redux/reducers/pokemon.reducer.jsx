import { SEE_DETAIL, FETCHED, SET_ABILITY } from '../types/pokemon.types';
import { SHOW_LOADING, SHOW_ERROR } from '../types/common.types';

const initialState = {
    previous: '',
    next: '',
    results: [],
    error: null,
    isLoading: true,
    url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=15',
    limit: 15,
    offset: 0,
    id: null,
    detalle: null,
    habilidades: []
};

export function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHED:
            
            const { url, limit, offset, response } = action.payload;
            const { 
                next,
                previous,
                results
            } = response;


            return {
                ...state,
                isLoading: false,
                next,
                previous,
                results,
                url,
                limit,
                offset
            };
        case SEE_DETAIL:
            const pokemon = action.payload.response;

            return {
                ...state,
                isLoading: false,
                detalle: pokemon,
                habilidades: new Array(pokemon.abilities.length)
            };
        case SHOW_LOADING:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case SHOW_ERROR:
            const { 
                error
            } = action.payload;

            return {
                ...state,
                error,
                isLoading: false
            };
        case SET_ABILITY:
            const {
                resAbility,
                index
            } = action.payload;

            let habilidades = state.habilidades;
            habilidades[index] = resAbility;

            return {
                ...state
            };            
        default:
            return state;
    }
}
