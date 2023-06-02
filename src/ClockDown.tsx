import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockDown = (props: SvgProps) => (
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
    <Path d="M20.984 12.535a9 9 0 1 0 -8.431 8.448" />
    <Path d="M12 7v5l3 3" />
    <Path d="M19 16v6" />
    <Path d="M22 19l-3 3l-3 -3" />
  </Svg>
);
export default SvgClockDown;
