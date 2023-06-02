import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMoodConfuzed = (props: SvgProps) => (
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
    <Path d="M9 10l.01 0" />
    <Path d="M15 10l.01 0" />
    <Path d="M9.5 16a10 10 0 0 1 6 -1.5" />
  </Svg>
);
export default SvgMoodConfuzed;
