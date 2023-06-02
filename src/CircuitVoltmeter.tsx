import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircuitVoltmeter = (props: SvgProps) => (
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
    <Path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <Path d="M5 12h-3" />
    <Path d="M19 12h3" />
    <Path d="M10 10l2 4l2 -4" />
  </Svg>
);
export default SvgCircuitVoltmeter;
