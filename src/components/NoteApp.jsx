import { useAssignment } from "../context/AssignmentProvider";
import { v4 as uuidv4 } from "uuid";
import styles from "./NoteApp.module.css";
import NoteBook from "./NoteBook";
import Alert from "./Alert";

function NoteApp() {
  const { form, addAssignment, updateForm } = useAssignment();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAssignment = {
      id: uuidv4(),
      assignment: form.assignment,
      subject: form.subject,
      dueDate: form.dueDate,
    };
    addAssignment(newAssignment);
  };

  return (
    <>
      <div className={styles.noteContainer}>
        <img src="../poster.png" alt="Poster" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputAss}>
            <label htmlFor="assignment">Assignment</label>
            <input
              type="text"
              placeholder="Enter assignment"
              name="assignment"
              value={form.assignment}
              onChange={(e) => updateForm(e.target.name, e.target.value)}
              required
            />
          </div>
          <div className={styles.subject}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              name="subject"
              value={form.subject}
              onChange={(e) => updateForm(e.target.name, e.target.value)}
              required
            />
          </div>
          <div className={styles.dueDate}>
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              name="dueDate"
              id="dueDate"
              value={form.dueDate}
              onChange={(e) => updateForm(e.target.name, e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.btn}>
            Add
          </button>
        </form>
      </div>
      <Alert />
      <NoteBook />
    </>
  );
}

export default NoteApp;
