import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHomeEco = (props: SvgProps) => (
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
    <Path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" />
    <Path d="M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215" />
    <Path d="M16 22s0 -2 3 -4" />
    <Path d="M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3z" />
  </Svg>
);
export default SvgHomeEco;
