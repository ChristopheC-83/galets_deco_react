import { useState } from "react";

export default function Goutte(props) {
  const [hovering, setHovering] = useState(false);

  const handleMouseOver = () => {
    setHovering(true);
  };

  const handleMouseOut = () => {
    setHovering(false);
  };

  return (
    <div
      className="drop"
      style={{
        borderRadius: hovering ? "50%" : props.radius,
        transition: "border-radius 0.75s ease-in-out",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <h2 style={{ background: props.color }}>{props.lettre}</h2>
      <p
        style={{
          color: props.color,
          transform: hovering ? "scale(0)" : "scale(1)",
          transition: "transform 0.75s ease-in-out",
        }}
      >
        {props.text1}
      </p>
      <p
        style={{
          color: props.color,
          transform: hovering ? "scale(1)" : "scale(0)",
          transition: "transform 0.75s ease-in-out",
        }}
      >
        {props.text2}
      </p>
    </div>
  );
}
