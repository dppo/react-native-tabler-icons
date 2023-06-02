import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHistoryOff = (props: SvgProps) => (
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
    <Path d="M3.05 11a8.975 8.975 0 0 1 2.54 -5.403m2.314 -1.697a9 9 0 0 1 12.113 12.112m-1.695 2.312a9 9 0 0 1 -14.772 -3.324m-.5 5v-5h5" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgHistoryOff;
