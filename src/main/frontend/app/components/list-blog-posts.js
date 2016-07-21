import React from 'react';

export default class ListBlogPosts extends React.Component {

  render() {
    return <div>
      {this.props.posts.map((post, index) => {
        return <div key={index} className="panel panel-primary text-left">
          <div className="panel-heading">
            <h4>{post.title}</h4>
          </div>
          <div className="panel-body">
            <div>{post.content}</div>
          </div>
        </div>
      })}
    </div>;
  }

}

ListBlogPosts.propTypes = {
  posts: React.PropTypes.array
};
