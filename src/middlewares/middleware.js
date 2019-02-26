export const middleware = (store) => {
    return next => {
        return action =>{
            next(action);
            const result = store.getState();
            if(action.payload === result.users || action.payload === result.posts){
                return next(action);
            }           
        }
    }
}