import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircleArrowDownLeft = (props: SvgProps) => (
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
    <Path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <Path d="M15 9l-6 6" />
    <Path d="M15 15h-6v-6" />
  </Svg>
);
export default SvgCircleArrowDownLeft;
