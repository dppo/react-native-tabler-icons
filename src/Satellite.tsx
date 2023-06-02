import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSatellite = (props: SvgProps) => (
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
    <Path d="M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414z" />
    <Path d="M6 10l-3 3l3 3l3 -3" />
    <Path d="M10 6l3 -3l3 3l-3 3" />
    <Path d="M12 12l1.5 1.5" />
    <Path d="M14.5 17a2.5 2.5 0 0 0 2.5 -2.5" />
    <Path d="M15 21a6 6 0 0 0 6 -6" />
  </Svg>
);
export default SvgSatellite;
