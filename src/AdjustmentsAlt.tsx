import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAdjustmentsAlt = (props: SvgProps) => (
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
    <Path d="M4 8h4v4h-4z" />
    <Path d="M6 4l0 4" />
    <Path d="M6 12l0 8" />
    <Path d="M10 14h4v4h-4z" />
    <Path d="M12 4l0 10" />
    <Path d="M12 18l0 2" />
    <Path d="M16 5h4v4h-4z" />
    <Path d="M18 4l0 1" />
    <Path d="M18 9l0 11" />
  </Svg>
);
export default SvgAdjustmentsAlt;
