import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./css/activityDetail.css"; // Import the CSS file

const ActivityDetail = ({ calls, archiveCall }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook for navigation
  const call = calls.find((call) => call.id === parseInt(id));

  if (!call) {
    return <div>Call not found</div>;
  }

  const handleArchive = (callId) => {
    archiveCall(callId);
    navigate("/"); // Redirect to the Activity Feed page
  };

  return (
    <div className="activity-detail">
      <h2>Activity Detail</h2>
      <p>
        <span>ID:</span> {call.id}
      </p>
      <p>
        <span>Created At:</span> {call.created_at}
      </p>
      <p>
        <span>Direction:</span> {call.direction}
      </p>
      <p>
        <span>From:</span> {call.from}
      </p>
      <p>
        <span>To:</span> {call.to}
      </p>
      <p>
        <span>Via:</span> {call.via}
      </p>
      <p>
        <span>Duration:</span> {call.duration} seconds
      </p>
      <p>
        <span>Archived:</span> {call.is_archived ? "Yes" : "No"}
      </p>
      <p>
        <span>Call Type:</span> {call.call_type}
      </p>
      <button onClick={() => handleArchive(call.id)}>Archive</button>
      <br />
      <Link to="/">Back to Activity Feed</Link>
    </div>
  );
};

export default ActivityDetail;
