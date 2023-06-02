import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgStairsUp = (props: SvgProps) => (
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
    <Path d="M4 20h4v-4h4v-4h4v-4h4" />
    <Path d="M4 11l7 -7v4m-4 -4h4" />
  </Svg>
);
export default SvgStairsUp;
