import React from "react";
import { Link } from "react-router-dom";
import "./css/activityFeed.css"; // Import the CSS file

const ActivityFeed = ({ calls }) => {
  // Function to determine the icon class based on the call direction
  const getIconClass = (callType) => {
    switch (callType) {
      case "inbound":
        return "fas fa-arrow-down green";
      case "outbound":
        return "fas fa-arrow-up blue";
      default:
        return "";
    }
  };

  return (
    <div className="activity-feed">
      <h2>Activity Feed</h2>
      <ul>
        {calls
          .filter((call) => !call.is_archived) // Filter out archived calls
          .map((call) => (
            <li key={call.id}>
              <Link to={`/activities/${call.id}`}>
                <i className={getIconClass(call.direction)}></i>
                {call.from} ({call.direction})
              </Link>
            </li>
          ))}
      </ul>
      <Link to="/archived" className="view-archived-link">
        View Archived Calls
      </Link>
    </div>
  );
};

export default ActivityFeed;
