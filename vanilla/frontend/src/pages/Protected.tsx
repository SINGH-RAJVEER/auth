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
      <div className="min-h-screen grid place-items-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Redirecting to login...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Protected Area
            </h1>
            <button
              onClick={async () => {
                await signOut();
                navigate("/login");
              }}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Sign out
            </button>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Welcome, {session.user?.name || session.user?.email}!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Protected;
