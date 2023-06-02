import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTicketOff = (props: SvgProps) => (
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
    <Path d="M15 5v2" />
    <Path d="M15 17v2" />
    <Path d="M9 5h10a2 2 0 0 1 2 2v3a2 2 0 1 0 0 4v3m-2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 1 0 0 -4v-3a2 2 0 0 1 2 -2" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgTicketOff;
