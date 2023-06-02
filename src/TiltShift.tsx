import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTiltShift = (props: SvgProps) => (
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
    <Path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
    <Path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
    <Path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
    <Path d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
    <Path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
    <Path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
    <Path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
    <Path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
    <Path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </Svg>
);
export default SvgTiltShift;
