import React from "react";
import { useTheme } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

interface Props {
  images: any[];
  currentImage: number;
  setCurrentImage: (index: number) => void;
  selected?: boolean;
}

export default ({ images, currentImage, setCurrentImage, selected }: Props) => {
  const { palette } = useTheme();
  const gellryStatusClass = selected
    ? "gallery-status gallery-status-selected"
    : "gallery-status";
  return (
    <div className={gellryStatusClass}>
      {images.map((_, index) => {
        const checked = index === currentImage;
        const backgroundColor = checked
          ? palette.primary.main
          : palette.secondary.light;
        const { scale } = useSpring({
          scale: checked ? 1 : 0,
        });
        const scaleTransform = scale
          .interpolate({ range: [0, 1], output: [1, 1.35] })
          .interpolate((currentScale) => `scale(${currentScale})`);
        return (
          <animated.div
            key={`sPtr${index}`}
            onClick={() => setCurrentImage(index)}
            className={`gallery-status-point ${
              checked ? "gallery-status-point-checked" : ""
            }`}
            style={{ backgroundColor, transform: scaleTransform }}
          />
        );
      })}
    </div>
  );
};
