import CourseSummary from "./CourseSummary";
import StudentCard from "./StudentCard";

const students = [
  {
    name: "Aaditya",
    role: "Frontend Learner",
    topic: "React Components"
  },
  {
    name: "Class Team",
    role: "Practice Group",
    topic: "Reusable UI"
  }
];

function ComponentsDemo() {
  return (
    <section className="learning-section">
      <div>
        <p className="eyebrow">Learning Problem 3</p>
        <h2>React Components</h2>
      </div>

      <CourseSummary
        title="Component-Based UI"
        description="The page is split into small components so each part is easier to read, reuse, and test."
        totalProblems={4}
      />

      <div className="student-grid">
        {/* [Aaditya]: The map method renders multiple StudentCard components from an array. */}
        {students.map((student) => (
          <StudentCard
            key={student.name}
            name={student.name}
            role={student.role}
            topic={student.topic}
          />
        ))}
      </div>
    </section>
  );
}

export default ComponentsDemo;
