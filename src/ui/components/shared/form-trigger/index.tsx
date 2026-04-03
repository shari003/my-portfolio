'use client';
import React, {useEffect, useRef, useState} from 'react';
import { AnimatePresence, motion } from 'motion/react';

import ContactForm from '@/ui/components/shared/contact-form';

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

        return () => {
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

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[1072] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
                    >
                        <div className="relative w-full flex items-center justify-center min-h-full py-10">
                            <div ref={ref} className="w-full max-w-2xl mx-auto">
                                <ContactForm onFormClose={onFormClose} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
