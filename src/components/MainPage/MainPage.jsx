import {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';

export default function MainPage() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    };
    loadPosts()
      .then(console.log)
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <Container fluid="md">
      <h1>All Posts</h1>
    </Container>
  );
}
