import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircuitGround = (props: SvgProps) => (
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
    <Path d="M12 13v-8" />
    <Path d="M4 13h16" />
    <Path d="M7 16h10" />
    <Path d="M10 19h4" />
  </Svg>
);
export default SvgCircuitGround;
