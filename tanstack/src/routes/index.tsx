import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: "/login" });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <p className="text-gray-400">Redirecting to sign in...</p>
    </div>
  );
}
