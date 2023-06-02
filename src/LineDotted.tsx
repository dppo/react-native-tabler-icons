import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLineDotted = (props: SvgProps) => (
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
    <Path d="M4 12v.01" />
    <Path d="M8 12v.01" />
    <Path d="M12 12v.01" />
    <Path d="M16 12v.01" />
    <Path d="M20 12v.01" />
  </Svg>
);
export default SvgLineDotted;
