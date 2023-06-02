import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFlag3 = (props: SvgProps) => (
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
    <Path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
  </Svg>
);
export default SvgFlag3;
