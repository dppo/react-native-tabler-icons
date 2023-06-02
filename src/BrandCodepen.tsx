import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandCodepen = (props: SvgProps) => (
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
    <Path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
    <Path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
    <Path d="M3 9l0 6" />
    <Path d="M21 9l0 6" />
    <Path d="M12 3l0 6" />
    <Path d="M12 15l0 6" />
  </Svg>
);
export default SvgBrandCodepen;
