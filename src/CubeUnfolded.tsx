import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCubeUnfolded = (props: SvgProps) => (
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
    <Path d="M2 15h10v5h5v-5h5v-5h-10v-5h-5v5h-5z" />
    <Path d="M7 15v-5h5v5h5v-5" />
  </Svg>
);
export default SvgCubeUnfolded;
