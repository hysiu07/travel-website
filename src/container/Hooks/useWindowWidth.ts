import { useState, useEffect } from "react";

// **** only exempel how can do hooks and how can you use this in your code ****

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [setWidth])

    return {width}
}
export default useWindowWidth