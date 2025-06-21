import React, { useState } from "react";
import { TimeEntry } from "../types/types";

type Props = {
  onAdd: (entry: TimeEntry) => void;
};

const TimeEntryForm: React.FC<Props> = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  const [hoursWorked, setHoursWorked] = useState<number>(0);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskName.trim()) {
      setError("Task name is required.");
      return;
    }
    if (hoursWorked <= 0) {
      setError("Hours must be greater than 0.");
      return;
    }
    onAdd({ taskName, hoursWorked });
    setTaskName("");
    setHoursWorked(0);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div style={{ marginBottom: "10px", color: "#262223" }}>
        <label htmlFor="taskName">Task Name:</label>
        <input
          id="taskName"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="hoursWorked">Hours Worked:</label>
      <input
        id="hoursWorked"
        type="number"
        value={hoursWorked}
        onChange={(e) => setHoursWorked(Number(e.target.value))}
        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
      />
    </div>
      {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
      <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#262223", border: "none", borderRadius:"20px", color:"white", fontWeight: "bold" }}>Add Entry</button>
    </form>
  );
};

export default TimeEntryForm;
