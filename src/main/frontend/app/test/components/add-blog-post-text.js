import TestUtils from 'react-addons-test-utils';
import AddBlogPost from '../../components/add-blog-post';
import React from 'react';
import {expect} from 'chai';

describe('AddBlogPosts', () => {

  it('should call on post callback function on button click', (done) => {
    const addBlogPost = TestUtils.renderIntoDocument(<AddBlogPost onPostAddCallback={} />);

    const button = TestUtils.findRenderedDOMComponentWithTag(addBlogPost, 'button');
    
    TestUtils.Simulate.click(button);
  });

});

