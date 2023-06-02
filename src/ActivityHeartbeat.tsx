import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgActivityHeartbeat = (props: SvgProps) => (
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
    <Path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5" />
  </Svg>
);
export default SvgActivityHeartbeat;
