import React, { useState } from "react";
import TimeEntryForm from "./components/TimeEntryForm";
import TimeEntryList from "./components/TimeEntryList";
import TotalHours from "./components/TotalHours";
import { TimeEntry } from "./types/types";

function App() {
  const [entries, setEntries] = useState<TimeEntry[]>([]);

  const addEntry = (entry: TimeEntry) => {
    setEntries([...entries, entry]);
  };

  const deleteEntry = (index: number) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#21242A" }}>
      <div style={{ width: "100%", maxWidth: "600px", backgroundColor: "white", padding: "30px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <h1 style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px", color: "#262223", fontFamily:"sans-serif"  }}>MINI TIME TRACKER</h1>
        <TimeEntryForm onAdd={addEntry} />
        <TimeEntryList entries={entries} onDelete={deleteEntry} />
        <TotalHours entries={entries} />
      </div>
    </div>
  );
}

export default App;
