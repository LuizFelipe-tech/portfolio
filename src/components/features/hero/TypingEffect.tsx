import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
    words: string[];
    typeSpeed?: number;
    deleteSpeed?: number;
    delaySpeed?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
    words,
    typeSpeed = 200,
    deleteSpeed = 100,
    delaySpeed = 2000
}) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingInterval, setTypingInterval] = useState(typeSpeed);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingInterval(isDeleting ? deleteSpeed : typeSpeed);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), delaySpeed);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingInterval);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, words, typeSpeed, deleteSpeed, delaySpeed, typingInterval]);

    return <span>{text}</span>;
};

export default TypingEffect;