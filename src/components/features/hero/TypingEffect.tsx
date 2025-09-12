import React, { useState, useEffect, useCallback } from 'react'; // Importe useCallback

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

    // Envolvemos a lógica principal em useCallback
    const handleTyping = useCallback(() => {
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
    }, [loopNum, words, isDeleting, text, deleteSpeed, typeSpeed, delaySpeed]);

    useEffect(() => {
        const timer = setTimeout(handleTyping, typingInterval);
        return () => clearTimeout(timer);
    }, [handleTyping, typingInterval]); // Agora a dependência é a função 'handleTyping'

    return <span>{text}</span>;
};

export default TypingEffect;