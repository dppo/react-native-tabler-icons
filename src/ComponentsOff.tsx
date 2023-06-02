import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComponentsOff = (props: SvgProps) => (
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
    <Path d="M3 12l3 3l3 -3l-3 -3z" />
    <Path d="M18.5 14.5l2.5 -2.5l-3 -3l-2.5 2.5" />
    <Path d="M12.499 8.501l2.501 -2.501l-3 -3l-2.5 2.5" />
    <Path d="M9 18l3 3l3 -3l-3 -3z" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgComponentsOff;
