import React from "react";
import { motion } from 'framer-motion'
import { Icon } from "../../icons";

export const SocialIcon = ({ name, href }) => {
    return (<motion.a href={href} target={"_blank"} className="mr-3 w-6" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
        <Icon name={name} />
    </motion.a>)
}
