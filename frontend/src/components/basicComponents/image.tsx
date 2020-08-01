import * as React from "react";
import * as CSS from "csstype";
export interface ImageProps {
  height?: number | string;
  width?: number | string;
  src: string;
  style?: string;
  mode: string;
}

export interface ImageState {}

class Image extends React.Component<ImageProps, ImageState> {
  render() {
    let { mode, src, height, width, style, ...props } = this.props;
    let modes: { [index: string]: any } = {
      fill: "cover",
      fit: "contain",
    };
    let size = modes[mode] || "contain";

    let defaults = {
      height: height || 100,
      width: width || 100,
    };

    let important: CSS.Properties = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
    };

    return (
      <div
        {...props}
        className={style}
        style={{ ...defaults, ...important }}
      ></div>
    );
  }
}

export default Image;
