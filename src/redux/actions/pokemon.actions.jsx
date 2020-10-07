import { FETCHED, SEE_DETAIL, SET_ABILITY } from '../types/pokemon.types';
import { showLoading, showError } from './common.actions';
import fetch from 'cross-fetch';
import {getUrlAsObj} from '../../helpers/url.helper';

export function fetchListSize(newLimit) {
    return (dispatch, getState) => {
        const { url } = getState().pokemonReducer;
        const { base, offset } = getUrlAsObj(url);
        const newUrl = `${base}?limit=${newLimit}&offset=${offset}`;

        return dispatch(fetchListInner(newUrl))
    }
}

export function fetchList(url) {
    return (dispatch, getState) => {
        return dispatch(fetchListInner(url))
    }
}

export function fetchListInner(url) {
    return dispatch => {
        dispatch(showLoading());
        return fetch(url)
          .then(response => response.json())
          .then(json => dispatch(fetched(json, url)))
          .catch(error => dispatch(showError(error)))
      }
}

export function fetched(response, url){
    const { limit, offset } = getUrlAsObj(url);

    return {
        type: FETCHED,
        payload: {
            response,
            url,
            limit,
            offset
        }        
    }
};

export function fetchDetail(url) {
    return (dispatch, getState) => {
        dispatch(showLoading());
        return dispatch(fetchDetailInner(url))
    }
}

export function fetchDetailInner(url) {
    return dispatch => {
        return fetch(url)
          .then(response => response.json())
          .then(json => dispatch(seeDetail(json)))
          .catch(error => dispatch(showError(error)))
      }
}

export function seeDetail(response){
    return {
        type: SEE_DETAIL,
        payload: {
            response
        }        
    }
};


export function fetchAbility(url, index) {
    return (dispatch, getState) => {
        return dispatch(fetchAbilityInner(url, index))
    }
}

export function fetchAbilityInner(url, index) {
    return dispatch => {
        return fetch(url)
          .then(response => response.json())
          .then(json => dispatch(seeAbility(json, index)))
          .catch(error => dispatch(showError(error)))
    }
}

export function seeAbility(response, index){
    return {
        type: SET_ABILITY,
        payload: {
            resAbility: response,
            index
        }        
    }
};

