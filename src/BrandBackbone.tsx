import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandBackbone = (props: SvgProps) => (
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
    <Path d="M5 20l14 -8l-14 -8z" />
    <Path d="M19 20l-14 -8l14 -8z" />
  </Svg>
);
export default SvgBrandBackbone;
