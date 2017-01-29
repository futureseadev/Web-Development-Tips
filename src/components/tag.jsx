import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import PostData from '../data/postData.jsx';
import Post from './indexPost.jsx';

class TagPage extends React.Component {
  render() {
    let name = this.props.params.name;
    function addDashed(x) {
      return x.map(m => m.split(' ').join('-'));
    }
    let matchingPosts = PostData.reduce((arr, post) => {
      if(addDashed(post.tags.split(',')).indexOf(name) != -1) {
        arr.push(post);
      }
      return arr;
    },[])
    let Posts = matchingPosts.reduce((arr,x,i) => {
      if(i < 3) {
        arr.push(<Post key={x.id} id={x.id} name={x.name} title={x.title} tags={x.tags} time={x.time} mainImage={x.mainImage} intro={x.introduction} content={x.content}/>)
      }
      return arr;
    },[])
    return (
      <div>
      {Posts}
      <Helmet
        title={`${name} - WebsiteDevTips`}
      />
      </div>
    )
  }
}

export default TagPage;
