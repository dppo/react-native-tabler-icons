import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRuler2 = (props: SvgProps) => (
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
    <Path d="M17 3l4 4l-14 14l-4 -4z" />
    <Path d="M16 7l-1.5 -1.5" />
    <Path d="M13 10l-1.5 -1.5" />
    <Path d="M10 13l-1.5 -1.5" />
    <Path d="M7 16l-1.5 -1.5" />
  </Svg>
);
export default SvgRuler2;
