import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRoadSign = (props: SvgProps) => (
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
    <Path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" />
    <Path d="M9 14v-2c0 -.59 .414 -1 1 -1h5" />
    <Path d="M13 9l2 2l-2 2" />
  </Svg>
);
export default SvgRoadSign;
