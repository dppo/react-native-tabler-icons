import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMailbox = (props: SvgProps) => (
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
    <Path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
    <Path d="M12 11v-8h4l2 2l-2 2h-4" />
    <Path d="M6 15h1" />
  </Svg>
);
export default SvgMailbox;
