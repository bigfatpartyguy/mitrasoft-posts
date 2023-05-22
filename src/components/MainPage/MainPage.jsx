import {connect} from 'react-redux';
import {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Spinner from 'react-bootstrap/Spinner';
import Post from '../Post';
import {fetchPosts} from '../../features/posts';
import {fetchPostComments, resetPostComments} from '../../features/comments';

function MainPage({posts, comments, dispatch}) {
  const isPostsLoading = posts.status === 'loading';
  const isPosts = posts?.status === 'success' && posts?.data;
  const loadComments = (postId) => {
    if (comments.postId === postId) {
      dispatch(resetPostComments());
      return;
    }
    dispatch(fetchPostComments(postId));
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container fluid="md" className="pt-4">
      <h1>All Posts</h1>
      <Container
        fluid="md"
        style={{
          maxWidth: '960px',
        }}
      >
        {isPostsLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : isPosts ? (
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
