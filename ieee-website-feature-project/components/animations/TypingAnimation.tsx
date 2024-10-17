import { TypeAnimation } from "react-type-animation";

export default function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "The students behind the events!",
        1000,
        "The students behind the projects!",
        1000,
        "The students behind the work!",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block" }}
      repeat={1}
      cursor
    />
  );
}
