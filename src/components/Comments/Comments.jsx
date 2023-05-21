import ListGroup from 'react-bootstrap/ListGroup';

export default function Comments({comments}) {
  return (
    <ListGroup variant="flush">
      {comments.map((comment) => (
        <ListGroup.Item key={comment.id}>
          <div className="fw-bold">{comment.email}</div>
          <div>{comment.body}</div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
