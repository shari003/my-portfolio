import React, { useEffect } from 'react'

type Props = {
    isOpen: boolean,
    children: React.JSX.Element,
    onClose: () => void
}

export default function ModalWrapper({isOpen, onClose}: Props) {

    // const ref = useRef(null);

    useEffect(() => {
        const body = document.body;

        if(isOpen) {
            body.style.overflow = 'hidden';
            body.style.position = 'relative';
        } else {
            body.style.removeProperty('overflow');
            body.style.removeProperty('position');
        }

    }, [isOpen])

    useEffect(() => {
        const handleEscapeClick = (e: KeyboardEvent) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isOpen && e.key === 'Escape' && onClose();
        }
        window.addEventListener('keydown', handleEscapeClick);
        return () => window.removeEventListener('keydown', handleEscapeClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])

    // function handleClose(e: any) {
    //     onClose();
    //     e.stopPropagation();
    // }

    return (
        <div >
            
        </div>
    )
}
