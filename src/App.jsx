import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Header.jsx";
import ActivityFeed from "./ActivityFeed.jsx";
import ActivityDetail from "./ActivityDetail.jsx";
import ArchivePage from "./ArchivePage.jsx";

const App = () => {
  const [calls, setCalls] = useState([
    // Example call data
    {
      id: 1,
      created_at: "2022-07-19T14:52:45.000Z",
      direction: "inbound",
      from: "Alice",
      to: "Bob",
      via: "Aircall1",
      duration: 120,
      is_archived: false,
      call_type: "answered",
    },
    {
      id: 2,
      created_at: "2022-07-19T15:52:45.000Z",
      direction: "outbound",
      from: "Carol",
      to: "Dave",
      via: "Aircall2",
      duration: 60,
      is_archived: false,
      call_type: "missed",
    },
    {
      id: 3,
      created_at: "2022-07-7T15:52:45.000Z",
      direction: "inbound",
      from: "Kay",
      to: "David",
      via: "Aircall2",
      duration: 60,
      is_archived: false,
      call_type: "missed",
    },
    {
      id: 4,
      created_at: "2022-07-5T15:52:45.000Z",
      direction: "outbound",
      from: "Kate",
      to: "Mike",
      via: "Aircall2",
      duration: 60,
      is_archived: false,
      call_type: "answered",
    },
    // Add more calls as needed
  ]);

  const archiveCall = (id) => {
    setCalls(
      calls.map((call) =>
        call.id === id ? { ...call, is_archived: !call.is_archived } : call
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <div className="container-view">
          <Routes>
            <Route path="/" element={<ActivityFeed calls={calls} />} />
            <Route
              path="/activities/:id"
              element={
                <ActivityDetail calls={calls} archiveCall={archiveCall} />
              }
            />
            <Route
              path="/archived"
              element={<ArchivePage calls={calls} archiveCall={archiveCall} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
