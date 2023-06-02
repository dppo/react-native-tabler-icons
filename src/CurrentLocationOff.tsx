import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrentLocationOff = (props: SvgProps) => (
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
    <Path d="M14.685 10.661c-.3 -.6 -.795 -1.086 -1.402 -1.374m-3.397 .584a3 3 0 1 0 4.24 4.245" />
    <Path d="M6.357 6.33a8 8 0 1 0 11.301 11.326m1.642 -2.378a8 8 0 0 0 -10.597 -10.569" />
    <Path d="M12 2v2" />
    <Path d="M12 20v2" />
    <Path d="M20 12h2" />
    <Path d="M2 12h2" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgCurrentLocationOff;
