import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgView360 = (props: SvgProps) => (
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
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M12 12m-4 0a4 9 0 1 0 8 0a4 9 0 1 0 -8 0" />
    <Path d="M3 12c0 2.21 4.03 4 9 4s9 -1.79 9 -4s-4.03 -4 -9 -4s-9 1.79 -9 4z" />
  </Svg>
);
export default SvgView360;
