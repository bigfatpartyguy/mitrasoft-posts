import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Post from '../Post';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {fetchPosts} from '../../features/posts';
import {fetchUser} from '../../features/user';
import {fetchPostComments, resetPostComments} from '../../features/comments';

function UserDetails({posts, comments, user, dispatch}) {
  const isUserLoading = user?.status === 'loading';
  const isUser = user?.status === 'success' && user.data;
  const isPosts = posts?.status === 'success' && posts.data;
  const userErrorMessage = user?.status === 'error' && user.error.message;
  const {userId} = useParams();

  const loadComments = (postId) => {
    if (comments.postId === postId) {
      dispatch(resetPostComments());
      return;
    }
    dispatch(fetchPostComments(postId));
  };

  useEffect(() => {
    if (!userId) return;
    dispatch(fetchUser(userId));
    dispatch(fetchPosts(userId));
  }, [userId, dispatch]);
  return (
    <Container fluid="md" className="pt-4">
      <LinkContainer to="/">
        <Button variant="secondary">Back to main page</Button>
      </LinkContainer>

      <Container
        fluid="md"
        style={{
          maxWidth: '960px',
        }}
      >
        {isUserLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : isUser ? (
          <Stack className="d-flex align-items-center mt-3">
            <h2>{user.data.name}</h2>
            <p className="fw-bold">@{user.data.username}</p>
            <Row>
              <Col xs={12} sm={6} className="d-flex">
                <p className="flex-shrink-0">
                  website: <span>{user.data.website}</span>
                </p>
              </Col>
              <Col xs={12} sm={6} className="d-flex">
                <p className="flex-shrink-0">
                  email: <span>{user.data.email}</span>
                </p>
              </Col>
            </Row>
            {isPosts ? (
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
            ) : (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </Stack>
        ) : (
          <ErrorMessage errorMessage={userErrorMessage} />
        )}
      </Container>
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
  comments: state.comments,
  user: state.user,
  ...ownProps,
});

const WrapperUserDetails = connect(mapStateToProps)(UserDetails);
export default WrapperUserDetails;
