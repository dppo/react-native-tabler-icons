import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandStrava = (props: SvgProps) => (
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
    <Path d="M15 13l-5 -10l-5 10m6 0l4 8l4 -8" />
  </Svg>
);
export default SvgBrandStrava;
