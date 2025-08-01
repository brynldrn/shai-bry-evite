import { MotionValue, useTransform } from "motion/react"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance * 50])
}
export default useParallax