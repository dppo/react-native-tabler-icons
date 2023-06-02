import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAdjustmentsPause = (props: SvgProps) => (
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
    <Path d="M13.627 14.836a2 2 0 1 0 -.62 2.892" />
    <Path d="M12 4v10" />
    <Path d="M12 18v2" />
    <Path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <Path d="M18 4v1" />
    <Path d="M17 17v5" />
    <Path d="M21 17v5" />
    <Path d="M18 9v4.5" />
  </Svg>
);
export default SvgAdjustmentsPause;
