import {connect} from 'react-redux';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Post from '../Post';
import {fetchAllPosts} from '../../features/posts/actionCreators';
import {fetchPostComments} from '../../features/comments';

function MainPage(props) {
  const {posts, dispatch} = props;
  console.log(props);
  const [comments, setComments] = useState({
    postId: null,
    data: null,
  });

  const loadComments = (postId) => {
    dispatch(fetchPostComments(postId));
    if (comments.postId === postId) {
      setComments({
        postId: null,
        data: null,
      });
      return;
    }
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        console.log(response);
        setComments({
          postId,
          data: response.data,
        });
      });
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
  state,
  ...ownProps,
});

const ConnectedMainPage = connect((state) => state)(MainPage);

export default ConnectedMainPage;
