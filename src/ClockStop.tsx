import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClockStop = (props: SvgProps) => (
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
    <Path d="M21 12a9 9 0 1 0 -9 9" />
    <Path d="M12 7v5l1 1" />
    <Path d="M16 16h6v6h-6z" />
  </Svg>
);
export default SvgClockStop;
