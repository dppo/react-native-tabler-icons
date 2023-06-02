import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlus = (props: SvgProps) => (
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
    <Path d="M12 5l0 14" />
    <Path d="M5 12l14 0" />
  </Svg>
);
export default SvgPlus;
