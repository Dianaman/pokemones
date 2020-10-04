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
          .then(json => dispatch(fetched(json)))
      }
}

export function fetched(response){
    return {
        type: FETCHED,
        payload: {
            response
        }        
    }
};

export function seeDetail(url){
    return {
        type: SEE_DETAIL,
        payload: {
            url
        }        
    }

};