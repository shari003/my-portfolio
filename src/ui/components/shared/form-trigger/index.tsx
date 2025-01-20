'use client';
import React, {useEffect, useRef, useState} from 'react'
import ContactForm from '../contact-form';

type Props = {
    triggerTemplate: React.JSX.Element;
    additionalClasses?: string;
}

export default function FormTrigger({triggerTemplate, additionalClasses=""}: Props) {

    const ref = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function onFormClose() {
        setIsModalOpen(false);
    }

    function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsModalOpen(false);
        }
    }

    useEffect(() => {
        const body = document.body;

        if(isModalOpen) {
            body.style.overflow = 'hidden';
            body.style.position = 'relative';
        } else {
            body.style.removeProperty('overflow');
            body.style.removeProperty('position');
        }

    }, [isModalOpen])

    useEffect(() => {
        const handleEscapeClick = (e: KeyboardEvent) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isModalOpen && e.key === 'Escape' && onFormClose();
        }
        window.addEventListener('keydown', handleEscapeClick);
        return () => window.removeEventListener('keydown', handleEscapeClick);
    }, [isModalOpen])

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }
    , []);

    return (
        <>
            <div onClick={() => setIsModalOpen(true)} className={`cursor-pointer ${additionalClasses}`}>
                {triggerTemplate}
            </div>   

            {isModalOpen && (
                <div className='fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-black/20 overflow-y-auto overflow-x-hidden z-[1072] flex justify-center items-center'>
                    <div className='relative mx-auto my-[1.75rem] overflow-y-auto transition-transform duration-300 ease-out flex items-center justify-center max-h-[calc(100vh - 20px)] min-h-[calc(100%-(1.75rem*2))] w-full'>
                        <div ref={ref} className="relative rounded-lg shadow dark:bg-gray-900 w-11/12 lg:w-5/12 md:w-5/12 sm:w-10/12">
                            <ContactForm onFormClose={onFormClose} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
