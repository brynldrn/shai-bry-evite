import plate from '../assets/elements/plate.gif'
import dress from '../assets/elements/dress.gif'
import cheers2 from '../assets/elements/cheers-new.gif'
import rings from '../assets/elements/rings.gif'
import cake from '../assets/elements/cake.gif'
import note from '../assets/elements/note.gif'
import { motion } from 'motion/react'
import { twMerge } from 'tailwind-merge'

type ContainerProps = {
  children: React.ReactNode,
  showGraphics?: boolean,
  showHeader?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function Container({ children, showGraphics = false, showHeader = false, className, ...rest }: ContainerProps) {
  return (
    <section className={twMerge('bg-secondary-blue p-4 flex flex-col items-center justify-center gap-8 py-8 overflow-hidden w-svw', className)} {...rest}>
      {showHeader && (
        <motion.h1 initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: 'spring', duration: 1 }} className='font-cabin-sketch text-2xl font-bold text-primary-blue'>bry + shai</motion.h1>
      )}
      {children}

      {/* animated SVGs */}
      {showGraphics && (
        <div className='mt-auto relative w-full h-10 max-w-sm'>
          <img src={plate} alt="plate" className='size-42 absolute -top-14 -left-15' />
          <img src={dress} alt="dress" className='size-42 absolute -top-18 left-6' />
          <img src={cheers2} alt="cheers" className='size-42 absolute -top-15 left-24' />
          <img src={rings} alt="rings" className='size-28 absolute -top-5 right-22' />
          <img src={cake} alt="cake" className='size-32 absolute -top-8 right-2' />
          <img src={note} alt="note" className='size-24 absolute -top-2 -right-8' />
        </div>
      )}
    </section>
  )
}
