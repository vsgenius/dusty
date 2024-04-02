import { useState } from "react"


const useClickCount = () => {
    const [value, setValue] = useState(0);

    const onClick = () => {
        setValue(prev=> prev+1);
    }
    return {
        value,
        onClick
    }
}

export { useClickCount };