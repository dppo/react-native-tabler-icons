import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMoodSuprised = (props: SvgProps) => (
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
    <Path d="M9 9l.01 0" />
    <Path d="M15 9l.01 0" />
    <Path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </Svg>
);
export default SvgMoodSuprised;
