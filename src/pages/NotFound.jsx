import React from 'react';
import { useDispatch } from 'react-redux';
import { showError } from '../redux/actions/common.actions';
import { Error } from '../componentes/atomos';

export function NotFound () {
    const dispatch = useDispatch();

    React.useEffect(
        () => {
            dispatch(showError('404 page not found'));
        }
    )

    return (
        <Error />
    );
};