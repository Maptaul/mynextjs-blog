import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Handle unauthenticated users
  if (!user) {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-4">Unauthorized</h1>
        <p className="text-lg">You need to log in to view this page.</p>
        <a
          href="/api/auth/login"
          className="btn btn-primary mt-4 px-4 py-2 rounded-md"
        >
          Log In
        </a>
      </div>
    );
  }

  // Render profile page for authenticated users
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl text-center font-bold mb-4">
        "Welcome to your profile!"
      </h1>
      <div className="bg-gray-100 p-6 items-center justify-center rounded-md shadow-md w-full max-w-md mx-auto">
        <div className="flex items-center justify-center mb-4">
          <img
            src={user?.picture}
            alt="Profile Picture"
            className="w-16 h-16 rounded-full mr-4"
          />
          <h2 className="text-2xl font-semibold">{user?.name}</h2>
        </div>
        <p className="text-lg">Email: {user?.email}</p>
        <a
          href="/"
          className="btn items-start text-left btn-primary mt-4 px-4 py-2 rounded-md"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
