import React from 'react'
import SvgGithub from "./Github"
import SvgLinkedin from './Linkedin'
import SvgLinkArrow from './LinkArrow'
import SVGCircularText from './CircularText'


export const Icon = (props) => {
    if (props.name === 'Github') {
        return <SvgGithub {...props} />
    }
    if (props.name === 'Linkedin') {
        return <SvgLinkedin {...props} />
    }
    if (props.name === 'LinkArrow') {
        return <SvgLinkArrow {...props} />
    }
    if (props.name === 'CircularText') {
        return <SVGCircularText {...props} />
    }
}