import { FETCHED, SEE_DETAIL } from '../types/pokemon.types';
import { showLoading } from './common.actions';
import fetch from 'cross-fetch';

export function fetchList(url) {
    return (dispatch, getState) => {
        return dispatch(fetchListInner(url))
    }
}

export function fetchListInner(url) {
    return dispatch => {
        dispatch(showLoading(true));
        return fetch(url)
          .then(response => response.json())
          .then(json => dispatch(fetched(json, url)))
      }
}

export function fetched(response, url){
    return {
        type: FETCHED,
        payload: {
            response,
            url
        }        
    }
};


export function fetchDetail(url) {
    return (dispatch, getState) => {
        dispatch(showLoading(true));
        return dispatch(fetchDetailInner(url))
    }
}

export function fetchDetailInner(url) {
    return dispatch => {
        return fetch(url)
          .then(response => response.json())
          .then(json => dispatch(seeDetail(json)))
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