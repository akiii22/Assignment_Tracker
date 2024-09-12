import { createContext, useContext, useEffect, useReducer } from "react";

const AssignmentContext = createContext();

const initialState = {
  assignments: [],
  form: {
    assignment: "",
    subject: "",
    dueDate: "",
  },
  sortOrder: "asc",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ASSIGNMENTS":
      return {
        ...state,
        assignments: action.payload,
      };
    case "ADD_ASSIGNMENT":
      return {
        ...state,
        assignments: [...state.assignments, action.payload],
      };
    case "UPDATE_FORM":
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.name]: action.payload.value,
        },
      };
    case "RESET_FORM":
      return {
        ...state,
        form: {
          assignment: "",
          subject: "",
          dueDate: "",
        },
      };
    case "DELETE_ASS":
      return {
        ...state,
        assignments: state.assignments.filter(
          (ass) => ass.id !== action.payload
        ),
      };
    case "SORT_ASSIGNMENTS":
      return {
        ...state,
        assignments: [...state.assignments].sort((a, b) => {
          const dateA = new Date(a.dueDate);
          const dateB = new Date(b.dueDate);
          return action.payload === "asc" ? dateA - dateB : dateB - dateA;
        }),
      };
    case "TOGGLE_SORT_ORDER":
      return {
        ...state,
        sortOrder: state.sortOrder === "asc" ? "desc" : "asc",
      };
    default:
      throw new Error("Invalid action");
  }
}

const AssignmentProvider = ({ children }) => {
  const [{ assignments, form, sortOrder }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await fetch("http://localhost:5000/assignments");
        const data = await res.json();
        dispatch({ type: "SET_ASSIGNMENTS", payload: data });
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };
    fetchAssignments();
  }, [dispatch]);

  const addAssignment = async (newAssignment) => {
    try {
      const res = await fetch("http://localhost:5000/assignments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAssignment),
      });
      const addedAssignment = await res.json();
      dispatch({ type: "ADD_ASSIGNMENT", payload: addedAssignment });
      dispatch({ type: "RESET_FORM" });
    } catch (error) {
      console.error("Error adding assignment:", error);
    }
  };

  const updateForm = (name, value) => {
    dispatch({ type: "UPDATE_FORM", payload: { name, value } });
  };

  const deleteAssignment = async (id) => {
    try {
      await fetch(`http://localhost:5000/assignments/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "DELETE_ASS", payload: id });
    } catch (error) {
      console.error("Error deleting assignment:", error);
    }
  };

  const sortAssignments = () => {
    dispatch({ type: "SORT_ASSIGNMENTS", payload: sortOrder });
    dispatch({ type: "TOGGLE_SORT_ORDER" });
  };

  return (
    <AssignmentContext.Provider
      value={{
        assignments,
        form,
        addAssignment,
        sortOrder,
        updateForm,
        deleteAssignment,
        sortAssignments,
      }}
    >
      {children}
    </AssignmentContext.Provider>
  );
};

function useAssignment() {
  const context = useContext(AssignmentContext);
  if (context === undefined) throw new Error("Provider used outside");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AssignmentProvider, useAssignment };
