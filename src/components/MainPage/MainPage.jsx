import {useEffect, useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Post from '../Post';

export default function MainPage() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <Container fluid="md">
      <h1>All Posts</h1>
      {posts
        ? posts.map((post) => (
            <Post key={post.id} title={post.title} text={post.body} />
          ))
        : null}
    </Container>
  );
}
