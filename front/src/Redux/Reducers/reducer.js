const INITIAL_STATE = {
    loading: false,
    userInfo: null,
    metamask_acc: ''
}

export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'START_LOADING': {
            return { ...state, loading: true }
        }

        case 'STOP_LOADING': {
            return { ...state, loading: false }
        }

        case 'USER_INFO': {
            return { ...state, userInfo: action.payload, loading: false }
        }

        case 'UPDATE_USER_INFO': {
            return { ...state, userInfo: action.payload }
        }

        case 'UPDATE_META_MASK': {
            return { ...state, metamask_acc: action.payload }
        }

        case 'CLEAR': {
            return { ...state, userInfo: null, loading: false, metamask_acc: '' }
        }

        default:
            return state;
    }
}