import { TypeAnimation } from 'react-type-animation'
import './App.css'
import pets from './assets/elements/pets.gif'
import heart6 from './assets/elements/heart6.gif'
import cheersSecondary from './assets/elements/cheers-secondary.gif'
import barong from './assets/barong.png'
import guests from './assets/guests.png'
import Container from './components/Container'
import { motion, useScroll } from 'motion/react'
import useParallax from './hooks/useParallax'

function App() {
  const { scrollYProgress } = useScroll()
  const topLeft = useParallax(scrollYProgress, -40)
  const topRight = useParallax(scrollYProgress, 30)
  const bottomRight = useParallax(scrollYProgress, 10)
  const bottomLeft = useParallax(scrollYProgress, -20)

  return (
    <>
      <motion.section style={{ y: bottomRight }} className='flex flex-col items-center justify-between h-svh py-40 gap-6 overflow-hidden sticky top-0 -z-10'>
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
      </motion.section>
      <div className='flex flex-col items-center justify-center relative'>
        <div className='sticky top-0 z-10 shadow-2xl shadow-primary-blue'>
          <Container showHeader className='h-svh'>
            <motion.strong
              initial={{ opacity: 0, translateY: '20px' }}
              whileInView={{ opacity: 1, translateY: 'none' }}
              transition={{ type: 'spring', duration: 1 }}
              className='font-providence-sans text-primary-blue'
            >
              our wedding squad
            </motion.strong>

            <motion.div
              initial={{ opacity: 0, translateY: '20px' }}
              whileInView={{ opacity: 1, translateY: 'none' }}
              transition={{ type: 'spring', duration: 1, delay: .5 }}
              className='grid grid-cols-2 items-center gap-4 text-primary-blue w-full'
            >

              <motion.div
                initial={{ opacity: 0, translateY: '20px' }}
                whileInView={{ opacity: 1, translateY: 'none' }}
                transition={{ type: 'spring', duration: 1, delay: .5 }} className='flex flex-col items-center'>
                <strong className='block mb-2'>parents of the groom</strong>
                <span>Ma. Cristina Quinalayo</span>
                <span>Allan Quinalayo</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, translateY: '20px' }}
                whileInView={{ opacity: 1, translateY: 'none' }}
                transition={{ type: 'spring', duration: 1, delay: .5 }} className='flex flex-col items-center'>
                <strong className='block mb-2'>parents of the bride</strong>
                <span>Arlene Suringa</span>
                <span>Saturnino Suringa</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, translateY: '20px' }}
              whileInView={{ opacity: 1, translateY: 'none' }}
              transition={{ type: 'spring', duration: 1, delay: .5 }}
              className='flex flex-col items-center gap-2 text-primary-blue w-full'>
              <strong>ninongs &amp; ninangs</strong>

              <div className='grid grid-cols-2 items-center gap-4 w-full'>

                <div className='flex flex-col items-center'>
                  <span>Maricar Talion</span>
                  <span>Natalie Rivera</span>
                  <span>Michael Empaynado</span>
                  <span>Anthony Quinalayo</span>
                </div>

                <div className='flex flex-col items-center'>
                  <span>Annaliza Baesa</span>
                  <span>Ma. Theresa Babol</span>
                  <span>Fely Guillermo</span>
                  <span>Ludovico Amante</span>
                </div>
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, translateY: '20px' }}
              whileInView={{ opacity: 1, translateY: 'none' }}
              transition={{ type: 'spring', duration: 1, delay: .5 }}
              className='grid grid-cols-2 items-center gap-4 w-full text-primary-blue'>

              <div className='flex flex-col items-center'>
                <strong className='mb-2'>best man</strong>
                <span>Neil Glenn Apale</span>
              </div>

              <div className='flex flex-col items-center'>
                <strong className='mb-2'>maid of honor</strong>
                <span>Cess Oafericua</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, translateY: '20px' }}
              whileInView={{ opacity: 1, translateY: 'none' }}
              transition={{ type: 'spring', duration: 1, delay: .5 }}
              className='grid grid-cols-2 items-start gap-4 w-full text-primary-blue'>

              <div className='flex flex-col items-center'>
                <strong className='mb-2'>team bry</strong>
                <span>Bren Quinalayo</span>
                <span>Brenan Allen Quinalayo</span>
                <span>Lester Almadin</span>
                <span>Alfie Durante</span>
                <span>Mike Ronnel Mendez</span>
              </div>

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
            </motion.div>
          </Container>
        </div>

        <div className='sticky top-0 z-10 shadow-2xl shadow-primary-blue'>
          <Container className='h-svh'>
            <motion.strong
              initial={{ opacity: 0, translateY: '20px' }}
              whileInView={{ opacity: 1, translateY: 'none' }}
              transition={{ type: 'spring', duration: 1, delay: .5 }}
              className='font-providence-sans text-primary-blue'>our wedding guide</motion.strong>

            <motion.div
              initial={{ opacity: 0, translateY: '20px' }}
              whileInView={{ opacity: 1, translateY: 'none' }}
              transition={{ type: 'spring', duration: 1, delay: .5 }} className='flex flex-col items-center gap-2 text-primary-blue w-full'>
              <strong>ninongs and ninangs</strong>
              <span>barong and slacks/skirts</span>

              <img src={barong} alt="barong" className='w-svw aspect-auto' />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, translateY: '20px' }}
              whileInView={{ opacity: 1, translateY: 'none' }}
              transition={{ type: 'spring', duration: 1, delay: .5 }}
              className='flex flex-col items-center gap-2 text-primary-blue w-svw'>
              <strong>guests' dress code</strong>
              <span>
                please celebrate with us in vibrant colors! <br />
                (strictly no white and black/dark attire) <br />
                <strong>girls:</strong> long dresses, flowy, floral, and festive <br />
                <strong>boys:</strong> long / short sleeves polo and slacks (black, khaki, gray, white)
              </span>

              <img src={guests} alt="guests" className='w-full aspect-auto' />
            </motion.div>
          </Container>
        </div>

        <div className='sticky top-0 z-10 shadow-2xl shadow-primary-blue'>
          <Container showGraphics className='h-svh'>
            <div className='flex flex-col items-center gap-10 w-full'>
              <motion.div
                initial={{ opacity: 0, translateY: '20px' }}
                whileInView={{ opacity: 1, translateY: 'none' }}
                transition={{ type: 'spring', duration: 1, delay: .5 }}
                className='flex flex-col items-center gap-2 text-primary-blue w-full'>
                <strong className='font-providence-sans relative'>
                  cherish the moment
                </strong>
                <span className='text-sm'>
                  We’d love for you to be truly with us as we say “I do.” <br />
                  Phones down, hearts open — be present, not posted. <br />
                  We promise to share the good pics later!
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, translateY: '20px' }}
                whileInView={{ opacity: 1, translateY: 'none' }}
                transition={{ type: 'spring', duration: 1, delay: .5 }}
                className='flex flex-col items-center gap-2 text-primary-blue w-full'>
                <strong className='font-providence-sans relative'>
                  gifts
                </strong>
                <span className='text-sm'>
                  Your presence is all we ask, <br />
                  but if you’re feeling extra sweet, <br />
                  a little cash would be a lovely treat... <br />
                  for date nights, dreams, and maybe extra fries. <br />
                </span>


                <span className='block mt-10'>Lola Aida &dagger; &amp; Lolo Juan &dagger;</span>
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default App
