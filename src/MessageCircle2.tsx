import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMessageCircle2 = (props: SvgProps) => (
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
    <Path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
  </Svg>
);
export default SvgMessageCircle2;
