import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsJoin2 = (props: SvgProps) => (
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
    <Path d="M3 7h1.948c1.913 0 3.705 .933 4.802 2.5a5.861 5.861 0 0 0 4.802 2.5h6.448" />
    <Path d="M3 17h1.95a5.854 5.854 0 0 0 4.798 -2.5a5.854 5.854 0 0 1 4.798 -2.5h5.454" />
    <Path d="M18 15l3 -3l-3 -3" />
  </Svg>
);
export default SvgArrowsJoin2;
