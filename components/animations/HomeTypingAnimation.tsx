import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { TypeAnimation } from "react-type-animation";

export default function HomeTypingAnimation() {
  const divRef = useRef<HTMLDivElement>(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (divRef.current) {
      const text = new SplitType(divRef.current, { types: "chars" });
      const chars = text.chars;

      const headingTl = gsap.timeline({
        onComplete: () => setAnimationComplete(true),
      });

      gsap.set(divRef.current, { overflow: "hidden" });

      headingTl
        .from(chars, {
          scaleX: 1,
          scaleY: 0,
          duration: 0.8,
          ease: "expo.out",
          stagger: 0.05, // Add a small delay between each character animation
        })

        .from(
          chars,
          {
            duration: 2,
            transformOrigin: "right",
            ease: "none",
            css: { color: "black" },
          },
          "-=2"
        );
    }
  }, []);

  return (
    <div className="">
      <div ref={divRef} className="font-bold text-gray-100 ">
        IEEE Concordia
      </div>
      {animationComplete ? (
        <TypeAnimation
          className="text-3xl"
          sequence={[
            "Explore the world of hardware!",
            1000,
            "Meet new people!",
            1000,
            "Make new friends!",
            1000,
            "Challenge yourself!",
            1000,
            "Learn today what you will use tommorow.",
            1000,
          ]}
          wrapper="span"
          speed={50}
          omitDeletionAnimation
          style={{ display: "inline-block" }}
          repeat={0}
          cursor
        />
      ) : (
        <p>
          <br />
        </p>
      )}
    </div>
  );
}
