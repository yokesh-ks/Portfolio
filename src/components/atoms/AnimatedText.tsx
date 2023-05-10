import React from "react";
import { motion } from 'framer-motion'

const variants = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

export const AnimatedText = ({ text, className }) => {
    return (
        <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
            <motion.h1
                variants={variants}
                initial="initial"
                animate="animate"
                className={`w-full inline-block text-dark font-bold capitalize text-8xl ${className}`}>
                {text.split(" ").map((word, index) =>
                    <motion.span
                        key={word + '-' + index}
                        className="inline-block"
                        variants={singleWord}
                    >{word}&nbsp;</motion.span>)}
            </motion.h1>
        </div>
    )

}