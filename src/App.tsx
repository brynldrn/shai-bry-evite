import { TypeAnimation } from 'react-type-animation'
import './App.css'
import heart6 from './assets/elements/heart6.gif'
import cheers from './assets/elements/cheers.gif'

function App() {

  return (
    <section className='flex flex-col items-center justify-between h-dvh py-40 gap-6'>
      <h1 className='text-2xl line-clamp-2'>we're getting <br /> married!!!</h1>
      <div className='relative'>
        <TypeAnimation sequence={['', 500, 'bry + shai']} wrapper='h1' cursor={false} className='font-cabin-sketch text-7xl font-bold' speed={4} deletionSpeed={3} />

        {/* small top of "b" */}
        <img src={heart6} alt="heart" className='size-12 absolute -top-7 -left-5' />
        {/* small top of "b" */}

        {/* small top of "i" */}
        <img src={heart6} alt="heart" className='size-12 absolute -top-7 -right-8' />
        {/* small top of "i" */}

        {/* medium heart bottom of "b" */}
        <img src={heart6} alt="heart" className='size-24 absolute -bottom-15 -left-12' />
        {/* medium heart bottom of "b" */}

        {/* medium heart bottom of "i" */}
        <img src={heart6} alt="heart" className='size-24 absolute -bottom-15 -right-15' />
        {/* medium heart bottom of "i" */}
      </div>
      <p className='flex flex-col items-center gap-0 text-md'>
        <span className='text-inherit'>18 december 2025</span>
        <a href='https://maps.app.goo.gl/vcPZBkDVYwBsyLbW6' target='_blank' className='!text-inherit !underline'>Burow Café &ndash; Antipolo Beehouse</a>
        <span>113 Beverly Hills Avenue,</span>
        <span>Beverly Hills Subdivision, Taytay, Rizal</span>
      </p>
      <div className='fixed top-0 left-0 w-full h-full pointer-events-none'>
        {/* top left */}
        <img src={heart6} alt="heart" className='size-52 absolute top-4 left-3' />

        {/* top right */}
        <img src={heart6} alt="heart" className='size-32 absolute top-4 right-3' />
        <img src={heart6} alt="heart" className='size-52 absolute bottom-4 -right-12' />
        <img src={heart6} alt="heart" className='size-40 absolute -bottom-4 left-1' />
        <img src={cheers} alt="cheers" className='size-42 absolute bottom-0 left-1/2 -translate-x-1/2' />
      </div>
    </section>
  )
}

export default App
