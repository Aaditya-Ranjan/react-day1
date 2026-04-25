import { useState } from "react";

function DataBinding() {
  const courseName = "Frontend React";
  const [studentName, setStudentName] = useState("Aaditya");
  const [clickCount, setClickCount] = useState(0);

  return (
    <section className="learning-section">
      <div>
        <p className="eyebrow">Learning Problem 2</p>
        <h2>Different Types of Data Binding</h2>
      </div>

      <div className="binding-grid">
        <article className="example-card">
          {/* [Aaditya]: One-way binding reads a JavaScript value inside JSX. */}
          <h3>One-way Binding</h3>
          <p>Course name: {courseName}</p>
        </article>

        <article className="example-card">
          {/* [Aaditya]: Event binding connects a button click to a state update. */}
          <h3>Event Binding</h3>
          <p>Button clicked {clickCount} times.</p>
          <button type="button" onClick={() => setClickCount(clickCount + 1)}>
            Click Me
          </button>
        </article>

        <article className="example-card">
          {/* [Aaditya]: Two-way binding keeps the input and state synchronized. */}
          <h3>Two-way Binding</h3>
          <label htmlFor="studentName">Student Name</label>
          <input
            id="studentName"
            type="text"
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
          />
          <p>Hello, {studentName || "student"}!</p>
        </article>
      </div>
    </section>
  );
}

export default DataBinding;
