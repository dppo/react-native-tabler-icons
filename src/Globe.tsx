import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGlobe = (props: SvgProps) => (
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
    <Path d="M12 10m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <Path d="M6.75 16a8.015 8.015 0 1 0 9.25 -13" />
    <Path d="M12 18l0 4" />
    <Path d="M8 22l8 0" />
  </Svg>
);
export default SvgGlobe;
