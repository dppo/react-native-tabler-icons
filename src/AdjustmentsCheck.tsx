import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAdjustmentsCheck = (props: SvgProps) => (
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
    <Path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <Path d="M6 4v4" />
    <Path d="M6 12v8" />
    <Path d="M13.823 15.176a2 2 0 1 0 -2.638 2.651" />
    <Path d="M12 4v10" />
    <Path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <Path d="M18 4v1" />
    <Path d="M18 9v5" />
    <Path d="M15 19l2 2l4 -4" />
  </Svg>
);
export default SvgAdjustmentsCheck;
