import { useCallback, useState } from 'react';

const useClientRect = () => {
    const [rect, setRect] = useState(null as any);

    const ref = useCallback(node => {
        if (node !== null) {
            const resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    setRect(entry.target.getBoundingClientRect())
                }
            })
            resizeObserver.observe(node);
        }
    }, [])

    return [rect, ref]
}

export default useClientRect