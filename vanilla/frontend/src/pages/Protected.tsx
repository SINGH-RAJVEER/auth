import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession, signOut } from "../lib/auth";

function Protected() {
  const navigate = useNavigate();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      navigate("/login");
    }
  }, [navigate, session]);

  if (!session) {
    return (
      <div
        style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}
      >
        <p>Redirecting to login...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Protected Area</h1>
        <button
          onClick={async () => {
            await signOut();
            navigate("/login");
          }}
        >
          Sign out
        </button>
      </div>
      <p style={{ marginTop: "1rem" }}>
        Welcome, {session.user?.name || session.user?.email}!
      </p>
    </div>
  );
}

export default Protected;
