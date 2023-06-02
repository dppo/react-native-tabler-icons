import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMoodAngry = (props: SvgProps) => (
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
    <Path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
    <Path d="M8 9l2 1" />
    <Path d="M16 9l-2 1" />
    <Path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
  </Svg>
);
export default SvgMoodAngry;
