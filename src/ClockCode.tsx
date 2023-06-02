import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockCode = (props: SvgProps) => (
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
    <Path d="M20.931 13.111a9 9 0 1 0 -9.453 7.874" />
    <Path d="M20 21l2 -2l-2 -2" />
    <Path d="M17 17l-2 2l2 2" />
    <Path d="M12 7v5l2 2" />
  </Svg>
);
export default SvgClockCode;
