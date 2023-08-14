
export const buttonClick = {
    whileTap: { scale: 0.95 },

};

export const fadeInOut = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
}
export const slideTop = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 }
}


export const isAactiveStyles =
    'text-xl text-red-700 font-semibold hover:text-red-700 px-4 py-2 duration-100 transition-all ease-in-out'

export const isNotActiveStyles =
    'text-xl text-textColor hover:text-red-700 px-4 py-2 duration-100 transition-all ease-in-out'
