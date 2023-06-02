import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeselect = (props: SvgProps) => (
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
    <Path d="M12 8h3a1 1 0 0 1 1 1v3" />
    <Path d="M16 16h-7a1 1 0 0 1 -1 -1v-7" />
    <Path d="M12 20v.01" />
    <Path d="M16 20v.01" />
    <Path d="M8 20v.01" />
    <Path d="M4 20v.01" />
    <Path d="M4 16v.01" />
    <Path d="M4 12v.01" />
    <Path d="M4 8v.01" />
    <Path d="M8 4v.01" />
    <Path d="M12 4v.01" />
    <Path d="M16 4v.01" />
    <Path d="M20 4v.01" />
    <Path d="M20 8v.01" />
    <Path d="M20 12v.01" />
    <Path d="M20 16v.01" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgDeselect;
