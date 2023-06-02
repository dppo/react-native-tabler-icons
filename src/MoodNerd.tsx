import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMoodNerd = (props: SvgProps) => (
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
    <Path d="M8 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M16 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
    <Path d="M3.5 9h2.5" />
    <Path d="M18 9h2.5" />
    <Path d="M10 9.5c1.333 -1.333 2.667 -1.333 4 0" />
  </Svg>
);
export default SvgMoodNerd;
