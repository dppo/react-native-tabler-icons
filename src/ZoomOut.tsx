import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgZoomOut = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <Path d="M7 10l6 0" />
    <Path d="M21 21l-6 -6" />
  </Svg>
);
export default SvgZoomOut;
