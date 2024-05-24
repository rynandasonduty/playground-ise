import Image from 'next/image';

export default function Home() {
  return (
    <section>
      <main className='relative min-h-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500'>
        <div className='m-auto mr-48 flex h-[60vh] items-center justify-center'>
          <h1 className='relative z-20 ml-52 mt-56 text-8xl font-extrabold text-emerald-100'>
            C
          </h1>
          <h1 className='relative z-20 ml-32 mt-56 text-8xl font-extrabold text-emerald-100'>
            MING
          </h1>
          <Image
            className='absolute z-10 rounded-full'
            src='/images/ooo.png'
            width={380}
            height={695}
            alt='o'
          />
        </div>
        <h1 className='relative z-20 flex items-center justify-center text-9xl font-extrabold text-emerald-100'>
          SOON
        </h1>
      </main>
    </section>
  );
}
