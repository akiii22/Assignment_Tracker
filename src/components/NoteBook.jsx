import { useAssignment } from "../context/AssignmentProvider";
import Note from "./Note";
import styles from "./NoteBook.module.css";

function NoteBook() {
  const { assignments, sortOrder, sortAssignments } = useAssignment(); // Access sortOrder here

  return (
    <div className={styles.notebook}>
      <h1>Assignments</h1>
      {assignments.length > 0 ? (
        <>
          <button onClick={sortAssignments} className={styles.sortButton}>
            Sort by Due Date ({sortOrder === "asc" ? "Ascending" : "Descending"}
            )
          </button>

          <ul>
            {assignments.map((ass) => (
              <Note key={ass.id} ass={ass} />
            ))}
          </ul>
        </>
      ) : (
        <p className={styles.noteAssignment}>
          Please input your Assignment, Wag kang tamad at kupal!
        </p>
      )}
    </div>
  );
}

export default NoteBook;
