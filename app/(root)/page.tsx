import { Button } from '@/components/button';

export default function HomePage() {
  return (
    <main className='mt-5'>
      <div className='bg-blue-950 p-20 text-center text-white'>
        <h1 className='text-5xl font-semibold'>Learn from their experience</h1>
        <p className='mt-3'>
          Our instructors have real-world knowledge to help you achieve your
          goals. Courses start at $12.99 through March 7.
        </p>
        <div className='mt-16 flex rounded-md bg-white p-2'>
          <input
            className='w-full bg-transparent pl-2'
            placeholder='Search Any Course'
            type='text'
          />
          <Button className='bg-blue-800'>Search</Button>
        </div>
      </div>
    </main>
  );
}
