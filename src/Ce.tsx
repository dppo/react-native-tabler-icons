import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCe = (props: SvgProps) => (
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
    <Path d="M11 4a8 8 0 1 0 0 16" />
    <Path d="M20 4a8 8 0 1 0 0 16" />
    <Path d="M12 12l8 0" />
  </Svg>
);
export default SvgCe;
