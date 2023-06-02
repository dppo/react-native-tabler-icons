import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPower = (props: SvgProps) => (
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
    <Path d="M7 6a7.75 7.75 0 1 0 10 0" />
    <Path d="M12 4l0 8" />
  </Svg>
);
export default SvgPower;
