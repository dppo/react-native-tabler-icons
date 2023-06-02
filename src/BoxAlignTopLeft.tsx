import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBoxAlignTopLeft = (props: SvgProps) => (
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
    <Path d="M11 5v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1z" />
    <Path d="M15 4h-.01" />
    <Path d="M20 4h-.01" />
    <Path d="M20 9h-.01" />
    <Path d="M20 15h-.01" />
    <Path d="M4 15h-.01" />
    <Path d="M20 20h-.01" />
    <Path d="M15 20h-.01" />
    <Path d="M9 20h-.01" />
    <Path d="M4 20h-.01" />
  </Svg>
);
export default SvgBoxAlignTopLeft;
