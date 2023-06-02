import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSection = (props: SvgProps) => (
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
    <Path d="M20 20h.01" />
    <Path d="M4 20h.01" />
    <Path d="M8 20h.01" />
    <Path d="M12 20h.01" />
    <Path d="M16 20h.01" />
    <Path d="M20 4h.01" />
    <Path d="M4 4h.01" />
    <Path d="M8 4h.01" />
    <Path d="M12 4h.01" />
    <Path d="M16 4l0 .01" />
    <Path d="M4 8m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
  </Svg>
);
export default SvgSection;
