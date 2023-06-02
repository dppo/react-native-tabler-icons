import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAntenna = (props: SvgProps) => (
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
    <Path d="M20 4v8" />
    <Path d="M16 4.5v7" />
    <Path d="M12 5v16" />
    <Path d="M8 5.5v5" />
    <Path d="M4 6v4" />
    <Path d="M20 8h-16" />
  </Svg>
);
export default SvgAntenna;
