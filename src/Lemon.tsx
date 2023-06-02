import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLemon = (props: SvgProps) => (
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
    <Path d="M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143c-3.906 3.905 -10.237 3.905 -14.143 0l14.143 -14.143" />
    <Path d="M5.868 15.06a6.5 6.5 0 0 0 9.193 -9.192" />
    <Path d="M10.464 10.464l4.597 4.597" />
    <Path d="M10.464 10.464v6.364" />
    <Path d="M10.464 10.464h6.364" />
  </Svg>
);
export default SvgLemon;
