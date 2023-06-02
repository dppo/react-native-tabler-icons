import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFileDiff = (props: SvgProps) => (
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
    <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <Path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    <Path d="M12 10l0 4" />
    <Path d="M10 12l4 0" />
    <Path d="M10 17l4 0" />
  </Svg>
);
export default SvgFileDiff;
