export const usersReducer = (state=[], action) => {
    switch (action.type){
        case 'FETCH_USERS':
            return action.payload;
        default:
            return state;
    }
};

export const postsReducer = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};
