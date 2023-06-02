import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPray = (props: SvgProps) => (
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
    <Path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M7 20h8l-4 -4v-7l4 3l2 -2" />
  </Svg>
);
export default SvgPray;
