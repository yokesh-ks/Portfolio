import React from "react";

export const CustomLink = ({ title, href, className }) => {
    return <a href={href} className={`${className} relative group`}>
        {title}
        <span className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0`} />
    </ a>
}