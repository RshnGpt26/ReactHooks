import { useEffect } from "react";

const useTitleCount = (count) => {
    useEffect(() => {
        document.title = count === 0 ? `Chats` : `Chats(${count})`;
    }, [count]);
}

export default useTitleCount
