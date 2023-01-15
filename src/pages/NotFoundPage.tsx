import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <div>
      <h2>Not Found Page</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
