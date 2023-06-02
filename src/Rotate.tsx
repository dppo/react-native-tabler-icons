import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRotate = (props: SvgProps) => (
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
    <Path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
  </Svg>
);
export default SvgRotate;
