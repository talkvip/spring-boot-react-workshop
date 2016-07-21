import React from 'react';
import Request from 'superagent';
import TextInputField from './form/text-input';
import TextAreaField from './form/text-area'

export default class AddBlogPost extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: ''
    }
  }

  handleChange(e, state) {
    let val = e.target.value;
    let key = e.target.name;
    state.setState({
      [key]: val
    });
  }

  addBlogPost() {
    Request.post('http://localhost:8080/post')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send(this.state)
      .end(this.props.onPostAddCallback);
  }

  render() {
    return (
      <div>
        <fieldset>
          <TextInputField label='Title' name='title' value={this.state.title} state={this.state} />
          <TextAreaField label='Content' name='content' value={this.state.content} />
          <button className="btn btn-primary" onClick={this.addBlogPost.bind(this)}>Submit</button>
        </fieldset>
      </div>
    );
  }

}

AddBlogPost.propTypes = {
  onPostAddCallback: React.PropTypes.func
};
