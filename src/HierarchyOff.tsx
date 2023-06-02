import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHierarchyOff = (props: SvgProps) => (
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
    <Path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M17.585 17.587a2 2 0 0 0 2.813 2.843" />
    <Path d="M6.5 17.5l5.5 -4.5l5.5 4.5" />
    <Path d="M12 7v1m0 4v1" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgHierarchyOff;
