import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import Loading from './Loading';

class Posts extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    renderList(){
        return(
            <table className="ui selectable inverted table">
                <thead>
                    <tr>
                        <th>Post title</th>
                        <th>Post body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.posts.map(post => {
                            return(
                                <tr key={post.id}>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
    render(){
        if(this.props.posts.length>0){
            return this.renderList()
        }

        return <Loading message="Loading ..."></Loading>;
    }
};

const mapStateToProps = state =>{
    return { posts: state.posts};
};

export default connect(mapStateToProps,{fetchPosts})(Posts);
