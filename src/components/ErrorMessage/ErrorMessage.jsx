import Alert from 'react-bootstrap/Alert';

export default function ErrorMessage({errorMessage}) {
  return (
    <Alert variant="danger">
      <p>Uh oh... There&apos;s a problem. Try refreshing the app.</p>
      {errorMessage ? <pre>{errorMessage}</pre> : null}
    </Alert>
  );
}
