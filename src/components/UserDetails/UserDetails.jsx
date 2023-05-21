import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Post from '../Post';
import axios from 'axios';

export default function UserDetails() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const {userId} = useParams();
  useEffect(() => {
    if (!userId) return;
    setTimeout(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
          setUser(response.data);
        });
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((response) => {
          setPosts(response.data);
        });
    }, 500);
  }, [userId]);
  return (
    <Container fluid="md">
      {user ? (
        <Stack gap={3} className="d-flex align-items-center">
          <h2>{user.name}</h2>
          <p className="fw-bold">@{user.username}</p>
          <Row>
            <Col xs={12} sm={6} className="d-flex">
              <p className="flex-shrink-0">
                website: <span>{user.website}</span>
              </p>
            </Col>
            <Col xs={12} sm={6} className="d-flex">
              <p className="flex-shrink-0">
                email: <span>{user.email}</span>
              </p>
            </Col>
          </Row>
          {posts ? (
            <Stack gap={3}>
              {posts.map((post) => (
                <Post
                  postId={post.id}
                  userId={post.userId}
                  key={post.id}
                  title={post.title}
                  text={post.body}
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
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </Container>
  );
}
