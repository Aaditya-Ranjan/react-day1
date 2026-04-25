function CourseSummary({ title, description, totalProblems }) {
  return (
    <article className="summary-panel">
      {/* [Aaditya]: Props make this summary component reusable with different data. */}
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>{totalProblems} learning problems</strong>
    </article>
  );
}

export default CourseSummary;
