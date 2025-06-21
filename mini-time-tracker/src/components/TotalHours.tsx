import React from "react";
import { TimeEntry } from "../types/types";

type Props = {
  entries: TimeEntry[];
};

const TotalHours: React.FC<Props> = ({ entries }) => {
  const total = entries.reduce((sum, entry) => sum + entry.hoursWorked, 0);

  return (
    <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px", marginTop: "20px" }}>
      Total Hours Worked: {total}
    </div>
  );
};

export default TotalHours;
