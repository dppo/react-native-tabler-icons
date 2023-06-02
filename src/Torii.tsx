import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTorii = (props: SvgProps) => (
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
    <Path d="M4 4c5.333 1.333 10.667 1.333 16 0" />
    <Path d="M4 8h16" />
    <Path d="M12 5v3" />
    <Path d="M18 4.5v15.5" />
    <Path d="M6 4.5v15.5" />
  </Svg>
);
export default SvgTorii;
