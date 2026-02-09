import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useSession, signOut } from "../lib/auth";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const { data: session } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate({ to: "/login" });
    }
  }, [navigate, session]);

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white mb-4">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-6 py-12">
      <div className="max-w-xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 text-center space-y-6">
          <h1 className="text-3xl font-bold text-white">
            Protected Placeholder
          </h1>
          <p className="text-gray-300">
            Signed in as {session.user?.email || session.user?.name}.
          </p>
          <button
            onClick={async () => {
              await signOut();
              window.location.href = "/login";
            }}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
