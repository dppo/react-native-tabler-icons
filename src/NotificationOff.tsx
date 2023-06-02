import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgNotificationOff = (props: SvgProps) => (
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
    <Path d="M6.154 6.187a2 2 0 0 0 -1.154 1.813v9a2 2 0 0 0 2 2h9a2 2 0 0 0 1.811 -1.151" />
    <Path d="M17 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgNotificationOff;
