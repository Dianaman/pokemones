import { SHOW_ERROR, SHOW_LOADING} from '../types/common.types';

export const showError = (error) => ({
    type: SHOW_ERROR,
    payload: {
        error
    }
});

export const showLoading = () => ({
    type: SHOW_LOADING,
    payload: {
    }
});