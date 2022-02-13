export const ButtonAnimation = {
    initial: {
        scale: 0,
        opacity: 0
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 2,
            delay: 0.4
        }
    }
}

export const Navcontainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }
  
export const Navitem = {
hidden: { opacity: 0 },
show: { opacity: 1 }
}