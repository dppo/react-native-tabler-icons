import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLayoutDashboard = (props: SvgProps) => (
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
    <Path d="M4 4h6v8h-6z" />
    <Path d="M4 16h6v4h-6z" />
    <Path d="M14 12h6v8h-6z" />
    <Path d="M14 4h6v4h-6z" />
  </Svg>
);
export default SvgLayoutDashboard;
