import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGlassOff = (props: SvgProps) => (
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
    <Path d="M8 21l8 0" />
    <Path d="M12 15l0 6" />
    <Path d="M7 3h10l1 7a4.511 4.511 0 0 1 -1.053 2.94m-2.386 1.625a7.48 7.48 0 0 1 -2.561 .435c-3.314 0 -6 -1.988 -6 -5l.5 -3.495" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgGlassOff;
