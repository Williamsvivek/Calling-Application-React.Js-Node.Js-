import React from "react";
import { Link } from "react-router-dom";
import "./css/archiveFeed.css"; // Import the CSS file

const ArchiveFeed = ({ calls, archiveCall }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Format the date to a readable string
  };

  return (
    <div className="archive-feed">
      <h2>Archived Calls</h2>
      <ul>
        {calls
          .filter((call) => call.is_archived)
          .map((call) => (
            <li key={call.id}>
              <span>{call.from}</span> to <span>{call.to}</span> at{" "}
              <span>{formatDate(call.created_at)}</span>
              <button onClick={() => archiveCall(call.id)}>Unarchive</button>
            </li>
          ))}
      </ul>
      <Link to="/" className="view-activity-link">
        Back to Activity Feed
      </Link>
    </div>
  );
};

export default ArchiveFeed;
