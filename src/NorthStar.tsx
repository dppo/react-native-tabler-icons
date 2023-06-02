import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgNorthStar = (props: SvgProps) => (
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
    <Path d="M3 12h18" />
    <Path d="M12 21v-18" />
    <Path d="M7.5 7.5l9 9" />
    <Path d="M7.5 16.5l9 -9" />
  </Svg>
);
export default SvgNorthStar;
