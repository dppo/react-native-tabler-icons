import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBandage = (props: SvgProps) => (
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
    <Path d="M14 12l0 .01" />
    <Path d="M10 12l0 .01" />
    <Path d="M12 10l0 .01" />
    <Path d="M12 14l0 .01" />
    <Path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" />
  </Svg>
);
export default SvgBandage;
