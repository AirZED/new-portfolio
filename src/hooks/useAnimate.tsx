import { useEffect, useState, FC } from "react";

const useAnimate = (word: string): string[] => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex > word.length - 1) {
        clearInterval(intervalId);
        return;
      }
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setCurrentText((prevText) => prevText + word[currentIndex]);
    }, 50);

    return () => clearInterval(intervalId);
  }, [currentIndex, word]);

  const splitedResult = currentText.split(" ");

  return splitedResult;
};

export default useAnimate;
