import React from "react";
import { TimeEntry } from "../types/types";

type Props = {
  entries: TimeEntry[];
  onDelete: (index: number) => void;
};

const TimeEntryList: React.FC<Props> = ({ entries, onDelete }) => {
  return (
    <ul style={{ marginBottom: "20px" }}>
      {entries.length === 0 ? (
        <li style={{ fontStyle: "italic" }}>No entries yet.</li>
      ) : (
        entries.map((entry, index) => (
          <li key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span>
              <strong>{entry.taskName}</strong> — {entry.hoursWorked} hrs
            </span>
            <button onClick={() => onDelete(index)} style={{ padding: "10px 20px", border: "none", borderRadius:"20px", color: "red", fontWeight: "bolder"}}>
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TimeEntryList;
