import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="hero-panel">
      {/* [Aaditya]: Fallback route appears when no route matches the URL. */}
      <p className="eyebrow">Route Not Found</p>
      <h1>Page Not Found</h1>
      <p>The requested React route does not exist in this project.</p>
      <Link className="text-link" to="/">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFoundPage;
