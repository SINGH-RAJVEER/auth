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
      <div className="max-w-2xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-white">Dashboard</h1>
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

          <div className="space-y-6">
            <div className="bg-slate-700/50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-300 mb-4">
                Welcome
              </h2>
              <p className="text-white text-lg">
                Hello, {session.user?.name || session.user?.email}! 👋
              </p>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-300 mb-4">
                Account Information
              </h2>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <span className="font-medium">Email:</span>{" "}
                  {session.user?.email}
                </p>
                {session.user?.name && (
                  <p className="text-gray-300">
                    <span className="font-medium">Name:</span>{" "}
                    {session.user?.name}
                  </p>
                )}
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-300 mb-4">
                Protected Content
              </h2>
              <p className="text-gray-300">
                This is a protected route. Only authenticated users can access
                this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
