import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircleRectangleOff = (props: SvgProps) => (
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
    <Path d="M14 10h3v3m-3 1h-7v-4h3" />
    <Path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgCircleRectangleOff;
