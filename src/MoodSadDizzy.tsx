import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMoodSadDizzy = (props: SvgProps) => (
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
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
    <Path d="M8 9l2 2" />
    <Path d="M10 9l-2 2" />
    <Path d="M14 9l2 2" />
    <Path d="M16 9l-2 2" />
  </Svg>
);
export default SvgMoodSadDizzy;
