import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHeartbeat = (props: SvgProps) => (
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
    <Path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" />
    <Path d="M3 13h2l2 3l2 -6l1 3h3" />
  </Svg>
);
export default SvgHeartbeat;
