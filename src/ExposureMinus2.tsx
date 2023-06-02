import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgExposureMinus2 = (props: SvgProps) => (
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
    <Path d="M12 9a4 4 0 1 1 8 0c0 1.098 -.564 2.025 -1.159 2.815l-6.841 7.185h8" />
    <Path d="M3 12h6" />
  </Svg>
);
export default SvgExposureMinus2;
