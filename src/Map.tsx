import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMap = (props: SvgProps) => (
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
    <Path d="M3 7l6 -3l6 3l6 -3l0 13l-6 3l-6 -3l-6 3l0 -13" />
    <Path d="M9 4l0 13" />
    <Path d="M15 7l0 13" />
  </Svg>
);
export default SvgMap;
