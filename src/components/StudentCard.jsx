function StudentCard({ name, role, topic }) {
  return (
    <article className="student-card">
      {/* [Aaditya]: This child component receives student details through props. */}
      <span>{name.charAt(0).toUpperCase()}</span>
      <div>
        <h3>{name}</h3>
        <p>{role}</p>
        <small>Current topic: {topic}</small>
      </div>
    </article>
  );
}

export default StudentCard;
