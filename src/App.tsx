import { TypeAnimation } from 'react-type-animation'
import './App.css'
import pets from './assets/elements/pets.gif'
import heart6 from './assets/elements/heart6.gif'
import cheersSecondary from './assets/elements/cheers-secondary.gif'
import barong from './assets/barong.png'
import guests from './assets/guests.png'
import Separator from './components/Separator'
import Container from './components/Container'
import { motion, useScroll } from 'motion/react'
import useParallax from './hooks/useParallax'
// import pics from './assets/elements/pics.png'
// import gift from './assets/elements/gift.png'

function App() {
  const { scrollYProgress } = useScroll()
  const topLeft = useParallax(scrollYProgress, 40)
  const topRight = useParallax(scrollYProgress, 30)
  const bottomRight = useParallax(scrollYProgress, 10)
  const bottomLeft = useParallax(scrollYProgress, -20)

  return (
    <>
      <section className='flex flex-col items-center justify-between h-dvh py-40 gap-6 relative overflow-hidden'>
        {/* top center */}
        <img src={pets} alt="heart" className='size-62 absolute -top-5 left-1/2 -translate-x-1/2' />

        <h1 className='text-2xl line-clamp-2 font-normal'>we're getting <br /> married!!!</h1>
        <div className='relative w-full max-w-max'>
          <TypeAnimation sequence={['', 500, 'bry + shai']} wrapper='h1' cursor={false} className='font-cabin-sketch text-7xl font-bold' speed={4} deletionSpeed={3} />

          {/* small top of "b" */}
          {/* <img src={heart6} alt="heart" className='size-12 absolute -top-7 -left-5' /> */}
          {/* small top of "b" */}

          {/* small top of "r" */}
          <img src={heart6} alt="heart" className='size-12 absolute -top-7 left-8' />

          {/* small below of "a" */}
          <img src={heart6} alt="heart" className='size-12 absolute top-17 right-5' />


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
          <motion.img style={{ y: topLeft }} src={heart6} alt="heart" className='size-40 absolute top-0 left-0' />

          {/* top right */}
          <motion.img style={{ y: topRight }} src={heart6} alt="heart" className='size-22 absolute top-4 right-3' />


          <motion.img style={{ y: bottomRight }} src={heart6} alt="heart" className='size-52 absolute bottom-4 -right-12' />
          <motion.img style={{ y: bottomLeft }} src={heart6} alt="heart" className='size-40 absolute -bottom-4 left-1' />
        </div>
        <img src={cheersSecondary} alt="cheers" className='size-56 absolute -bottom-10 left-1/2 -translate-x-1/2' />
      </section >

      {/* page 2 */}
      <Container showHeader >
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
      </Container >

      <Separator />

      {/* page 3 */}
      <Container>
        <div className='flex flex-col items-center gap-10 w-full'>
          {/* cherish */}
          <div className='flex flex-col items-center gap-2 text-primary-blue w-full'>
            <strong className='font-providence-sans relative'>
              cherish the moment
              {/* <img src={pics} alt="pics" className='absolute -top-5 -left-10 aspect-auto animate-bounce w-14' /> */}
            </strong>
            <span className='text-sm'>
              We’d love for you to be truly with us as we say “I do.” <br />
              Phones down, hearts open — be present, not posted. <br />
              We promise to share the good pics later!
            </span>
          </div>
          {/* gifts */}
          <div className='flex flex-col items-center gap-2 text-primary-blue w-full'>
            <strong className='font-providence-sans relative'>
              gifts
              {/* <img src={gift} alt="gift" className='absolute top-0 -left-9 aspect-auto animate-bounce' /> */}
            </strong>
            <span className='text-sm'>
              Your presence is all we ask, <br />
              but if you’re feeling extra sweet, <br />
              a little cash would be a lovely treat... <br />
              for date nights, dreams, and maybe extra fries. <br />
            </span>
          </div>
        </div>
      </Container>

      <Separator />

      {/* page 4 */}
      <Container>
        {/* primary sponsors */}
        <div className='flex flex-col items-center gap-2 text-primary-blue w-full'>
          <strong>ninongs and ninangs</strong>
          <span>barong and slacks/skirts</span>

          <img src={barong} alt="barong" className='w-full aspect-auto' />
        </div>

        {/* guests */}
        <div className='flex flex-col items-center gap-2 text-primary-blue w-full'>
          <strong>guests' dress code</strong>
          <span>
            please celebrate with us in vibrant colors! <br />
            (strictly no white and black/dark attire) <br />
            <strong>girls:</strong> long dresses, flowy, floral, and festive <br />
            <strong>boys:</strong> long / short sleeves polo and slacks (black, khaki, gray, white)
          </span>

          <img src={guests} alt="guests" className='w-full aspect-auto' />
        </div>
      </Container>

      <Separator />

      <Container showGraphics>
        <div className='flex flex-col items-center gap-4 text-primary-blue w-full'>
          <span className='text-center w-full block'>
            We are thrilled to celebrate our special day with  <br />
            our immediate family and closest friends. <br />
            Cheers to our favorite people.
          </span>

          {/* guests list */}
          <div className='grid grid-cols-2 justify-between w-full'>
            {/* quinalayo */}
            <ul className='flex flex-col items-center gap-0 text-center'>
              <li>Allan Quinalayo</li>
              <li>Ma. Cristina Quinalayo</li>
              <li>Bren Quinalayo</li>
              <li>Grace Mendova</li>
              <li>Brenan Allen Quinalayo</li>
              <li>Benjamin Quinalayo</li>
              <li>Jennifer Quinalayo</li>
              <li>Maricar Talion</li>
              <li>Elaiza Kriselle Talion</li>
              <li>Marivic Armado</li>
              <li>Jerry Armado</li>
              <li>Jamie Armado</li>
              <li>James Aron Armado</li>
              <li>Michael Empaynado</li>
              <li>Mia Arianne Empaynado</li>
              <li>Matteo Empaynado</li>
              <li>Anthony Quinalayo</li>
              <li>Abigail Jean Quinalayo</li>
              <li>Eunice Ramos</li>

              {/* friends */}
              <li>Neil Glenn Apale</li>
              <li>Bea Apale</li>
              <li>Lester Almadin</li>
              <li>Joselle Martizano</li>
              <li>Alfie Durante</li>
              <li>Cess Durante</li>
              <li>Mike Ronnel Mendez</li>
              <li>LJ Mendez</li>
            </ul>

            {/* suringa */}
            <ul className='flex flex-col items-center gap-0 text-center'>
              <li>Saturnino Suringa</li>
              <li>Arlene Suringa</li>
              <li>Sedric Suringa</li>
              {/* <li>Aida Baesa ✝️</li>
              <li>Juan Baesa ✝️</li> */}
              <li>Annaliza Baesa</li>
              <li>Nicolas James Baesa</li>
              <li>Alicia Amante</li>
              <li>Ludovico Amante</li>
              <li>Kastine Yra Amante</li>
              <li>Khrystenz Leigh Amante</li>
              <li>Kegume Kem Amante</li>
              <li>Aga Baesa</li>
              <li>Cherry Laquesta</li>
              <li>Alliyah Vherone Baesa</li>
              <li>Ayumi Amber Baesa</li>
              <li>Jake Austin Baesa</li>
              <li>Ma. Theresa Babol</li>
              <li>Oliver Benjoe Badong</li>
              <li>Joseph Nicko Badong</li>
              <li>Fely Guillermo</li>
              <li>Eric Guillermo</li>

              {/* friends */}
              <li>Cess Oafericua</li>
              <li>Ruffie Grace Esguerra</li>
              <li>Janine Kyle Ledesma</li>
              <li>Samantha Mercado</li>
              <li>Nica Zenarosa</li>
              <li>James Baldonado</li>
              <li>Nathaniel Jovie Pineda</li>
              <li>Ralph Siscar</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default App
