'use client';
import { useEffect, useRef, useState } from 'react';
interface IUseTypeWriter {
  text: string;
  speed?: number;
}
const useTypeWriter = ({ text, speed = 1000 }: IUseTypeWriter) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (currentText.length !== text.length) {
      setIsDone(false);
      intervalId.current = setInterval(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
    } else {
      clearInterval(intervalId.current as NodeJS.Timeout);
      setTimeout(() => {
        setIsDone(true);
      }, 700);
    }
    return () => {
      clearInterval(intervalId.current as NodeJS.Timeout);
    };
  }, [currentText, currentIndex, speed, text,isDone]);
  return {
    isDone,
    currentText,
  };
};

export default useTypeWriter;
