import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Comments from '../Comments';
import avatar from '../../assets/images/avatar.jpg';
export default function Post({title, text, postId, onCommentsClick, comments}) {
  const handleCommentsClick = () => {
    if (!postId) return;
    onCommentsClick(postId);
  };
  return (
    <Card>
      <Card.Body>
        <Image
          src={avatar}
          thumbnail={true}
          roundedCircle={true}
          width="70px"
        />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Footer>
          <Button variant="dark" onClick={handleCommentsClick}>
            {comments ? 'Hide comments' : 'Show comments'}
          </Button>
          {comments ? <Comments comments={comments.data} /> : null}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
