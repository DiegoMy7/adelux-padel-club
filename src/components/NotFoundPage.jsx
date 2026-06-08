const ARROW = '\u2197';

export default function NotFoundPage() {
  return (
    <section className="template-404-page">
      <div className="template-banner template-banner-404">
        <div className="template-banner-content">
          <h1>404</h1>
          <h3>Oops! Court Not Found</h3>
          <p>
            The page you&apos;re looking for has gone out of bounds. Let&apos;s rally back to the action. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum magna eget sem cursus porta. Cras dignissim tincidunt feugiat. Aenean feugiat eget purus non ornare.
          </p>
          <a className="cta-pill" href="#/">
            <span>Return to Home</span>
            <span className="join-icon small">{ARROW}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
