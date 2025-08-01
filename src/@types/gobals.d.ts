declare module "@fontsource/*" { }
declare module "react-scroll-percentage" {
  export function useScrollPercentage(options?: {
    threshold?: number;
    container?: Element | null;
  }): [React.RefObject<HTMLElement>, number];
}