import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTent = (props: SvgProps) => (
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
    <Path d="M11 14l4 6h6l-9 -16l-9 16h6l4 -6" />
  </Svg>
);
export default SvgTent;
