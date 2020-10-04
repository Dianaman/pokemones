import { SHOW_ERROR, SHOW_LOADING} from '../types/common.types';

export const showError = (show) => ({
    type: SHOW_ERROR,
    payload: {
        show
    }
});

export const showLoading = (show) => ({
    type: SHOW_LOADING,
    payload: {
        show
    }
});