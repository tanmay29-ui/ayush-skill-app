import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <section className="role-selection">
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="role-selection-eyebrow">404</p>
        <h1 className="role-selection-headline" style={{ margin: '0 auto' }}>Page not found</h1>
        <p className="role-selection-sub" style={{ margin: '18px auto 0' }}>
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div style={{ marginTop: 32 }}>
          <Link to="/">
            <Button variant="primary">Back to home</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
