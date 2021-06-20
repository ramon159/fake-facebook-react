import React, { Component } from 'react';

import PostItem from './PostItem.js';
import profile from '../assets/tom-cruise-profile.jpg'
import profile2 from '../assets/girl-profile.jpg'


class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Tom Cruise",
          avatar: profile
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Laura Fernandes",
              avatar: profile2
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eius et, repudiandae facilis in explicabo rem maxime perferendis at odit ex dolorem omnis alias laudantium libero reprehenderit nihil assumenda culpa!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Tom Cruise",
          avatar: profile
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Laura Fernandes",
              avatar: profile2
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eius et, repudiandae facilis in explicabo rem maxime perferendis at odit ex dolorem omnis alias laudantium libero reprehenderit nihil assumenda culpa!"
          },
          {
            id: 2,
            author: {
              name: "Laura Fernandes",
              avatar: profile2
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eius et, repudiandae facilis in explicabo rem maxime perferendis at odit ex dolorem omnis alias laudantium libero reprehenderit nihil assumenda culpa!"
          },
        ]
      },
            {
        id: 2,
        author: {
          name: "Tom Cruise",
          avatar: profile
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Laura Fernandes",
              avatar: profile2
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eius et, repudiandae facilis in explicabo rem maxime perferendis at odit ex dolorem omnis alias laudantium libero reprehenderit nihil assumenda culpa!"
          },
          {
            id: 2,
            author: {
              name: "Laura Fernandes",
              avatar: profile2
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eius et, repudiandae facilis in explicabo rem maxime perferendis at odit ex dolorem omnis alias laudantium libero reprehenderit nihil assumenda culpa!"
          },
        ]
      },
    ]
  };

  render() {
    const {posts} = this.state;
    return (
      <div className="post-list">
        {posts.map(post => <PostItem key={post.id} { ...post}/>)}
      </div>
    )
  }
}

export default PostList;