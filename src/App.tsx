import { TypeAnimation } from 'react-type-animation'
import './App.css'
import heart6 from './assets/elements/heart6.gif'
import plate from './assets/elements/plate.gif'
import dress from './assets/elements/dress.gif'
import cheers2 from './assets/elements/cheers-new.gif'
import rings from './assets/elements/rings.gif'
import cake from './assets/elements/cake.gif'
import note from './assets/elements/note.gif'
import pets from './assets/elements/pets.gif'
import cheersSecondary from './assets/elements/cheers-secondary.gif'

function App() {

  return (
    <>
      <section className='flex flex-col items-center justify-between h-dvh py-40 gap-6 relative overflow-hidden border-8 border-dotted'>
        <h1 className='text-2xl line-clamp-2 font-normal'>we're getting <br /> married!!!</h1>
        <div className='relative'>
          <TypeAnimation sequence={['', 500, 'bry + shai']} wrapper='h1' cursor={false} className='font-cabin-sketch text-7xl font-bold' speed={4} deletionSpeed={3} />

          {/* small top of "b" */}
          {/* <img src={heart6} alt="heart" className='size-12 absolute -top-7 -left-5' /> */}
          {/* small top of "b" */}

          {/* small top of "i" */}
          {/* <img src={heart6} alt="heart" className='size-12 absolute -top-7 -right-8' /> */}
          {/* small top of "i" */}

          {/* medium heart bottom of "b" */}
          {/* <img src={heart6} alt="heart" className='size-24 absolute -bottom-15 -left-12' /> */}
          {/* medium heart bottom of "b" */}

          {/* medium heart bottom of "i" */}
          {/* <img src={heart6} alt="heart" className='size-24 absolute -bottom-15 -right-15' /> */}
          {/* medium heart bottom of "i" */}
        </div>
        <p className='flex flex-col items-center gap-0 text-md'>
          <span className='text-inherit'>18 december 2025</span>
          <a href='https://maps.app.goo.gl/vcPZBkDVYwBsyLbW6' target='_blank' className='!text-inherit !underline'>Burrow Café &ndash; Antipolo Beehouse</a>
          <span>113 Beverly Hills Avenue,</span>
          <span>Beverly Hills Subdivision, Taytay, Rizal</span>
        </p>
        <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
          {/* top left */}
          <img src={heart6} alt="heart" className='size-22 absolute top-4 left-3' />

          {/* top center */}
          <img src={pets} alt="heart" className='size-62 absolute -top-5 left-1/2 -translate-x-1/2' />

          {/* top right */}
          <img src={heart6} alt="heart" className='size-22 absolute top-4 right-3' />


          <img src={heart6} alt="heart" className='size-52 absolute bottom-4 -right-12' />
          <img src={heart6} alt="heart" className='size-40 absolute -bottom-4 left-1' />
          <img src={cheersSecondary} alt="cheers" className='size-56 absolute -bottom-10 left-1/2 -translate-x-1/2' />
        </div>
      </section>

      {/* page 2 */}
      <section className='bg-secondary-blue p-4 flex flex-col items-center justify-center gap-8 py-8 overflow-hidden'>
        <h1 className='font-cabin-sketch text-2xl font-bold text-primary-blue'>bry + shai</h1>
        <strong className='font-providence-sans text-primary-blue'>our wedding squad</strong>

        {/* parents */}
        <div className='grid grid-cols-2 items-center gap-4 text-primary-blue w-full'>
          {/* groom */}
          <div className='flex flex-col items-center'>
            <strong className='block mb-2'>parents of the groom</strong>
            <span>Ma. Cristina Quinalayo</span>
            <span>Allan Quinalayo</span>
          </div>

          {/* bride */}
          <div className='flex flex-col items-center'>
            <strong className='block mb-2'>parents of the bride</strong>
            <span>Arlene Suringa</span>
            <span>Saturnino Suringa</span>
          </div>
        </div>

        {/* primary sponsors */}
        <div className='flex flex-col items-center gap-2 text-primary-blue w-full'>
          <strong>ninongs &amp; ninangs</strong>

          {/* list */}
          <div className='grid grid-cols-2 items-center gap-4 w-full'>

            {/* groom's side */}
            <div className='flex flex-col items-center'>
              <span>Maricar Talion</span>
              <span>Natalie Rivera</span>
              <span>Michael Empaynado</span>
              <span>Anthony Quinalayo</span>
            </div>

            {/* brides's side */}
            <div className='flex flex-col items-center'>
              <span>Annaliza Baesa</span>
              <span>Ma. Theresa Babol</span>
              <span>Fely Guillermo</span>
              <span>Ludovico Amante</span>
            </div>
          </div>
        </div>

        {/* best man and maid of honor */}
        <div className='grid grid-cols-2 items-center gap-4 w-full text-primary-blue'>

          {/* groom's side */}
          <div className='flex flex-col items-center'>
            <strong className='mb-2'>best man</strong>
            <span>Neil Glenn Apale</span>
          </div>

          {/* brides's side */}
          <div className='flex flex-col items-center'>
            <strong className='mb-2'>maid of honor</strong>
            <span>Cess Oafericua</span>
          </div>
        </div>

        {/* teams */}
        <div className='grid grid-cols-2 items-start gap-4 w-full text-primary-blue'>

          {/* groom's side */}
          <div className='flex flex-col items-center'>
            <strong className='mb-2'>team bry</strong>
            <span>Bren Quinalayo</span>
            <span>Brenan Allen Quinalayo</span>
            <span>Lester Almadin</span>
            <span>Alfie Durante</span>
            <span>Mike Ronnel Mendez</span>
          </div>

          {/* brides's side */}
          <div className='flex flex-col items-center'>
            <strong className='mb-2'>team shai</strong>
            <span>Sedric Suringa</span>
            <span>Ruffie Grace Esguerra</span>
            <span>Janine Kyle Ledesma</span>
            <span className='text-xs'>Samantha Julianne Mercado</span>
            <span>Nica Zenarosa</span>
            <span className='text-sm'>James Edward Baldonado</span>
            <span>Nathaniel Jovie Pineda</span>
            <span>Ralph Siscar</span>
          </div>
        </div>

        {/* animated SVGs */}
        <div className='mt-auto relative w-full h-10 max-w-sm'>
          <img src={plate} alt="plate" className='size-42 absolute -top-14 -left-15' />
          <img src={dress} alt="dress" className='size-42 absolute -top-18 left-6' />
          <img src={cheers2} alt="cheers" className='size-42 absolute -top-15 left-24' />
          <img src={rings} alt="rings" className='size-28 absolute -top-5 right-22' />
          <img src={cake} alt="cake" className='size-32 absolute -top-8 right-2' />
          <img src={note} alt="note" className='size-24 absolute -top-2 -right-8' />
        </div>
      </section>
    </>
  )
}

export default App
