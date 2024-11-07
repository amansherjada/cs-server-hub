import '../public/styles.css';
import GameServerTable from "@/components/GameServerTable";

export default function Home() {
  return (
    <div className='text-white'>
      <div className='flex flex-col items-center my-6'>
        <h1 className='text-3xl font-extrabold'>Welcome to CS Server Hub</h1>
        <p className='text-lg mt-4 max-w-5xl text-center'>
          Discover the top Counter-Strike servers worldwide! Whether you’re looking for competitive matches, casual gameplay, or custom game modes,
          CS Server Hub provides real-time updates and server details to help you find the perfect match.
        </p>
      </div>
      <GameServerTable />
    </div>
  );
}