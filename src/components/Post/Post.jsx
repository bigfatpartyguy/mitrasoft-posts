import {LinkContainer} from 'react-router-bootstrap';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comments from '../Comments';
import avatar from '../../assets/images/avatar.jpg';
export default function Post({
  title,
  text,
  postId,
  userId,
  onCommentsClick,
  comments,
}) {
  const handleCommentsClick = () => {
    if (!postId) return;
    onCommentsClick(postId);
  };
  return (
    <Card>
      <Card.Body>
        <LinkContainer
          to={`/users/${userId}`}
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
              {comments && comments.status === 'success'
                ? 'Hide comments'
                : 'Show comments'}
              {comments && comments.status === 'loading' ? (
                <Spinner animation="grow" size="sm" className="ms-1" />
              ) : null}
            </Button>
          </div>
          {comments && comments.status === 'success' ? (
            <Comments comments={comments.data} />
          ) : null}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
