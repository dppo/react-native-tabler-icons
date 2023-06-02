import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHierarchy2 = (props: SvgProps) => (
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
    <Path d="M10 3h4v4h-4z" />
    <Path d="M3 17h4v4h-4z" />
    <Path d="M17 17h4v4h-4z" />
    <Path d="M7 17l5 -4l5 4" />
    <Path d="M12 7l0 6" />
  </Svg>
);
export default SvgHierarchy2;
