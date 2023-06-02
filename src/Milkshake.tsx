import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMilkshake = (props: SvgProps) => (
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
    <Path d="M17 10a5 5 0 0 0 -10 0" />
    <Path d="M6 10m0 1a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
    <Path d="M7 13l1.81 7.243a1 1 0 0 0 .97 .757h4.44a1 1 0 0 0 .97 -.757l1.81 -7.243" />
    <Path d="M12 5v-2" />
  </Svg>
);
export default SvgMilkshake;
