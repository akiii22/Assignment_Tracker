import { useAssignment } from "../context/AssignmentProvider";
import styles from "./Note.module.css";

function Note({ ass }) {
  const { deleteAssignment } = useAssignment();
  return (
    <li className={styles.note}>
      <button
        className={styles.deleteButton}
        onClick={() => deleteAssignment(ass.id)}
      >
        ×
      </button>
      <h3 className={styles.subject}>{ass.subject}</h3>
      <p className={styles.assignment}>{ass.assignment}</p>
      <p className={styles.dueDate}>Due: {ass.dueDate}</p>
    </li>
  );
}

export default Note;
