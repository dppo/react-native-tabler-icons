import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTrendingUp2 = (props: SvgProps) => (
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
    <Path d="M18 5l3 3l-3 3" />
    <Path d="M3 18h5l7 -10h6" />
  </Svg>
);
export default SvgTrendingUp2;
