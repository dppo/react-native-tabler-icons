import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSwitch2 = (props: SvgProps) => (
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
    <Path d="M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6" />
    <Path d="M18 4l3 3l-3 3" />
    <Path d="M3 7h5l7 10h6" />
    <Path d="M18 20l3 -3l-3 -3" />
  </Svg>
);
export default SvgSwitch2;
