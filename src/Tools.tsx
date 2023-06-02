import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTools = (props: SvgProps) => (
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
    <Path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
    <Path d="M14.5 5.5l4 4" />
    <Path d="M12 8l-5 -5l-4 4l5 5" />
    <Path d="M7 8l-1.5 1.5" />
    <Path d="M16 12l5 5l-4 4l-5 -5" />
    <Path d="M16 17l-1.5 1.5" />
  </Svg>
);
export default SvgTools;
