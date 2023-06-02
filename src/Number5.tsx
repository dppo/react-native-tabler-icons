import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgNumber5 = (props: SvgProps) => (
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
    <Path d="M8 20h4a4 4 0 1 0 0 -8h-4v-8h8" />
  </Svg>
);
export default SvgNumber5;
