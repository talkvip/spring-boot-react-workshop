import React from 'react';
import AddBlogPost from './add-blog-post'
import ListBlogPosts from './list-blog-posts'
import Request from 'superagent';

export default class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
    this.fetchPosts();
  }

  fetchPosts() {
    Request.get('http://localhost:8080/post')
      .set('content-type', 'application/json')
      .end((error, result) => {
        this.setState({
          posts: JSON.parse(result.text)
        });
      });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <h1>This is my blog</h1>
            </div>
          </div>
          <ListBlogPosts posts={this.state.posts}/>
          <hr />
          <AddBlogPost onPostAddCallback={this.fetchPosts.bind(this)} />
        </div>
      </div>
    );
  }

}
