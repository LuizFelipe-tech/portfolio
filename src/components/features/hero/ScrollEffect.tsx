import React from "react";

export function ScrollAnimation(){
    const [visible, setVisible] = React.useState(false)
    const elementRef = React.useRef(null)
    React.useEffect(){
        new IntersectionObserver(()=>{
            setVisible(true)
        }, elementRef.current)
    }
}