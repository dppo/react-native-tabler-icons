import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMailboxOff = (props: SvgProps) => (
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
    <Path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18m0 -4v-2a4 4 0 0 0 -4 -4h-2m-4 0h-4.5" />
    <Path d="M12 8v-5h4l2 2l-2 2h-4" />
    <Path d="M6 15h1" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgMailboxOff;
