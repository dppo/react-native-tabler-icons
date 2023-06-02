import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgScoreboard = (props: SvgProps) => (
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
    <Path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    <Path d="M12 5v2" />
    <Path d="M12 10v1" />
    <Path d="M12 14v1" />
    <Path d="M12 18v1" />
    <Path d="M7 3v2" />
    <Path d="M17 3v2" />
    <Path d="M15 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
    <Path d="M6 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
  </Svg>
);
export default SvgScoreboard;
