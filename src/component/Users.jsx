import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';
import Loading from './Loading';

class Users extends Component {
    componentDidMount(){
        this.props.fetchUsers();
    }

    renderList(){
        return(
            <table className="ui selectable inverted table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User name</th>
                        <th>Phone</th>
                        <th className="right aligned">Email</th>
                    </tr>
                </thead>
                <tbody>                       
                    {
                        this.props.users.map(user =>{
                        return(
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.phone}</td>
                                <td className="right aligned">{user.email}</td>
                            </tr>
                            );
                        })
                    }
                </tbody>
            </table> 
        );
    }

    render(){
        if(this.props.users.length > 0){
            return this.renderList()
        }

        return <Loading message="Loading ..."></Loading>;
    }
};

const mapStateToProps = state => {
    return {
        users:state.users
    }
}

export default connect(mapStateToProps,{ fetchUsers})(Users)
