import {connect} from 'react-redux';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Post from '../Post';
import {fetchAllPosts} from '../../features/posts/actionCreators';
import {fetchPostComments, resetPostComments} from '../../features/comments';

function MainPage({posts, comments, dispatch}) {
  const loadComments = (postId) => {
    if (comments.postId === postId) {
      dispatch(resetPostComments());
      return;
    }
    dispatch(fetchPostComments(postId));
  };

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return (
    <Container fluid="md">
      <h1>All Posts</h1>
      {posts.data ? (
        <Stack gap={3}>
          {posts.data.map((post) => (
            <Post
              postId={post.id}
              userId={post.userId}
              key={post.id}
              title={post.title}
              text={post.body}
              onCommentsClick={loadComments}
              comments={comments.postId === post.id ? comments : null}
            />
          ))}
        </Stack>
      ) : null}
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
  comments: state.comments,
  ...ownProps,
});

const ConnectedMainPage = connect(mapStateToProps)(MainPage);

export default ConnectedMainPage;
