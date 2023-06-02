import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTrendingUp = (props: SvgProps) => (
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
    <Path d="M3 17l6 -6l4 4l8 -8" />
    <Path d="M14 7l7 0l0 7" />
  </Svg>
);
export default SvgTrendingUp;
