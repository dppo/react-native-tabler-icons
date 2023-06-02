import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgOmega = (props: SvgProps) => (
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
    <Path d="M4 19h5v-1a7.35 7.35 0 1 1 6 0v1h5" />
  </Svg>
);
export default SvgOmega;
