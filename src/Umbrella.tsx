import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgUmbrella = (props: SvgProps) => (
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
    <Path d="M4 12a8 8 0 0 1 16 0z" />
    <Path d="M12 12v6a2 2 0 0 0 4 0" />
  </Svg>
);
export default SvgUmbrella;
