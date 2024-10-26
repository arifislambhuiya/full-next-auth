export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen py-2">
      <h1 className="text-2xl">Hello User Profile: {params.id}</h1>
    </div>
  );
}
