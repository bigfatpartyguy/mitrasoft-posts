import {useEffect, useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Post from '../Post';

export default function MainPage() {
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState({
    postId: null,
    data: null,
  });

  const loadComments = (postId) => {
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
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <Container fluid="md">
      <h1>All Posts</h1>
      {posts
        ? posts.map((post) => (
            <Post
              postId={post.id}
              userId={post.userId}
              key={post.id}
              title={post.title}
              text={post.body}
              onCommentsClick={loadComments}
              comments={comments.postId === post.id ? comments : null}
            />
          ))
        : null}
    </Container>
  );
}
