import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHomeDot = (props: SvgProps) => (
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
    <Path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5" />
    <Path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M9 21v-6a2 2 0 0 1 2 -2h2c.641 0 1.212 .302 1.578 .771" />
  </Svg>
);
export default SvgHomeDot;
