import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHierarchy3 = (props: SvgProps) => (
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
    <Path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M12 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M20 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M4 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M5 17l2 -3" />
    <Path d="M9 10l2 -3" />
    <Path d="M13 7l2 3" />
    <Path d="M17 14l2 3" />
    <Path d="M15 14l-2 3" />
    <Path d="M9 14l2 3" />
  </Svg>
);
export default SvgHierarchy3;
