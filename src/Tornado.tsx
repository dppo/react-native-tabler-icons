import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTornado = (props: SvgProps) => (
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
    <Path d="M21 4l-18 0" />
    <Path d="M13 16l-6 0" />
    <Path d="M11 20l4 0" />
    <Path d="M6 8l14 0" />
    <Path d="M4 12l12 0" />
  </Svg>
);
export default SvgTornado;
