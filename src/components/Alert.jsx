import { useEffect, useState } from "react";
import { useAssignment } from "../context/AssignmentProvider";
import styles from "./Alert.module.css";

function Alert() {
  const { assignments } = useAssignment();
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const upcomingAssignments = assignments.filter(
      (ass) => ass.dueDate === today
    );

    if (upcomingAssignments.length > 0) {
      setAlertMessage(
        `You have ${upcomingAssignments.length} assignment(s) due today!`
      );
    } else {
      setAlertMessage("");
    }
  }, [assignments]);

  if (!alertMessage) return null;

  return (
    <div className={styles.alert}>
      <p>{alertMessage}</p>
    </div>
  );
}

export default Alert;
