import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TypingAnimation = () => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const cursor = cursorRef.current;
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(text, {
      text: {
        value: 'Hello World!',
        delimiter: '',
        padSpace: true,
        speed: 0.5,
      },
      duration: 2,
    })
      .to(cursor, { opacity: 0 }, '-=0.8')
      .to(cursor, { opacity: 1 }, '-=0.2');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="typing">
      <span ref={textRef} className="typing-text"></span>
      <span ref={cursorRef} className="typing-cursor"></span>
    </div>
  );
};

export default TypingAnimation;
