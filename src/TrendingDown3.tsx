import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTrendingDown3 = (props: SvgProps) => (
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
    <Path d="M3 6h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734a5 5 0 0 0 4.096 2.133h3.397" />
    <Path d="M18 19l3 -3l-3 -3" />
  </Svg>
);
export default SvgTrendingDown3;
