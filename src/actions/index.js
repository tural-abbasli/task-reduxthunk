import jsonholder from '../apis/jsonholder';
export const fetchUsers = () => async dispatch => {
    const response = await jsonholder.get('/users');
    dispatch({type:'FETCH_USERS',payload:response.data});
};

export const fetchPosts = () => async dispatch => {
    const response = await jsonholder.get('/posts');
    dispatch({type:'FETCH_POSTS',payload:response.data});
};
