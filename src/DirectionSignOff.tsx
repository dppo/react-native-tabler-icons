import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDirectionSignOff = (props: SvgProps) => (
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
    <Path d="M18.73 14.724l1.949 -1.95a1.095 1.095 0 0 0 0 -1.548l-7.905 -7.905a1.095 1.095 0 0 0 -1.548 0l-1.95 1.95m-2.01 2.01l-3.945 3.945a1.095 1.095 0 0 0 0 1.548l7.905 7.905c.427 .428 1.12 .428 1.548 0l3.95 -3.95" />
    <Path d="M8 12h4" />
    <Path d="M13.748 13.752l-1.748 1.748" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgDirectionSignOff;
