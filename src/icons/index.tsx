import React from 'react'
import SvgGithub from "./Github"
import SvgLinkedin from './Linkedin'


export const Icon = (props) => {
    if (props.name === 'Github') {
        return <SvgGithub {...props} />
    }
    if (props.name === 'Linkedin') {
        return <SvgLinkedin {...props} />
    }
}