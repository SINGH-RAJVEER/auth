import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function Home() {
  const [count, setCount] = useState(0);
  const [healthStatus, setHealthStatus] = useState<any>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setHealthStatus(data))
      .catch((err) => console.error("Failed to fetch health:", err));
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + React Compiler</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/pages/Home.tsx</code> and save to test HMR
        </p>
      </div>
      {healthStatus && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            background: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          <h3>Backend Health Check</h3>
          <p>Status: {healthStatus.status}</p>
          <p>Timestamp: {new Date(healthStatus.timestamp).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
