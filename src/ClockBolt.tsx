import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockBolt = (props: SvgProps) => (
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
    <Path d="M20.984 12.53a9 9 0 1 0 -7.552 8.355" />
    <Path d="M12 7v5l3 3" />
    <Path d="M19 16l-2 3h4l-2 3" />
  </Svg>
);
export default SvgClockBolt;
