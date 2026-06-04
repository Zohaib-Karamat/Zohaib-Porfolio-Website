import { useEffect, useState } from 'react';

export const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const fullText = words[index % words.length];
    const isComplete = !isDeleting && text === fullText;
    const delay = isComplete ? pause : isDeleting ? speed / 2 : speed;

    const timeout = setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        const nextText = fullText.slice(0, Math.max(0, text.length - 1));
        setText(nextText);

        if (!nextText) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }

        return;
      }

      setText(fullText.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, pause, speed, text, words]);

  return text;
};
