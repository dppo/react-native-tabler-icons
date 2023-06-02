import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgIceCream2 = (props: SvgProps) => (
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
    <Path d="M17.657 11a6 6 0 1 0 -11.315 0" />
    <Path d="M6.342 11l5.658 11l5.657 -11z" />
  </Svg>
);
export default SvgIceCream2;
