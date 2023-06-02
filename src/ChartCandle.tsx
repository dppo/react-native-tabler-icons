import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChartCandle = (props: SvgProps) => (
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
    <Path d="M4 6m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
    <Path d="M6 4l0 2" />
    <Path d="M6 11l0 9" />
    <Path d="M10 14m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
    <Path d="M12 4l0 10" />
    <Path d="M12 19l0 1" />
    <Path d="M16 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
    <Path d="M18 4l0 1" />
    <Path d="M18 11l0 9" />
  </Svg>
);
export default SvgChartCandle;
