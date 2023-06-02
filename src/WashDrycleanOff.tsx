import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWashDrycleanOff = (props: SvgProps) => (
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
    <Path d="M20.048 16.033a9 9 0 0 0 -12.094 -12.075m-2.321 1.682a9 9 0 0 0 12.733 12.723" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgWashDrycleanOff;
