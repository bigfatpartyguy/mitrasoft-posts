import {LinkContainer} from 'react-router-bootstrap';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Comments from '../Comments';
import ErrorMessage from '../ErrorMessage';
import avatar from '../../assets/images/avatar.jpg';
export default function Post({
  title,
  text,
  postId,
  userId,
  onCommentsClick,
  comments,
}) {
  const isComments = comments?.status === 'success';
  const isLoading = comments?.status === 'loading';
  const commentsErrorMessage =
    comments?.status === 'error' && comments.error.message;
  const handleCommentsClick = () => {
    if (!postId) return;
    onCommentsClick(postId);
  };
  return (
    <Card>
      <Card.Body>
        <LinkContainer
          to={`/mitrasoft-posts/users/${userId}`}
          style={{
            cursor: 'pointer',
          }}
        >
          <Image
            src={avatar}
            thumbnail={true}
            roundedCircle={true}
            width="70px"
          />
        </LinkContainer>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Footer>
          <div className="d-flex justify-content-end">
            <Button variant="dark" onClick={handleCommentsClick}>
              {isComments ? 'Hide comments' : 'Show comments'}
              {isLoading ? (
                <Spinner animation="grow" size="sm" className="ms-1" />
              ) : null}
            </Button>
          </div>
          {isComments ? (
            <Comments comments={comments.data} />
          ) : commentsErrorMessage ? (
            <ErrorMessage errorMessage={commentsErrorMessage} />
          ) : null}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
