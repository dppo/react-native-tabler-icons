import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgExposurePlus1 = (props: SvgProps) => (
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
    <Path d="M3 12h6" />
    <Path d="M6 9v6" />
    <Path d="M18 19v-14l-4 4" />
  </Svg>
);
export default SvgExposurePlus1;
