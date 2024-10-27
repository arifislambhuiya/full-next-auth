export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl p-2 bg-purple-600 hover:bg-cyan-300">
        Hello User Profile: {params.id}
      </h1>
    </div>
  );
}
