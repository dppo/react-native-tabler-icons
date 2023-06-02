import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTrekking = (props: SvgProps) => (
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
    <Path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M7 21l2 -4" />
    <Path d="M13 21v-4l-3 -3l1 -6l3 4l3 2" />
    <Path d="M10 14l-1.827 -1.218a2 2 0 0 1 -.831 -2.15l.28 -1.117a2 2 0 0 1 1.939 -1.515h1.439l4 1l3 -2" />
    <Path d="M17 12v9" />
    <Path d="M16 20h2" />
  </Svg>
);
export default SvgTrekking;
