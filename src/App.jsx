import React from 'react';
import Users from './component/Users'
import Posts from './component/Posts';

const App = () => {
    return(
        <div className="ui container">
            <Users></Users>
            <Posts></Posts>
        </div>
    );
}

export default App;