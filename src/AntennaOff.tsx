import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAntennaOff = (props: SvgProps) => (
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
    <Path d="M20 4v8" />
    <Path d="M16 4.5v7" />
    <Path d="M12 5v3m0 4v9" />
    <Path d="M8 8v2.5" />
    <Path d="M4 6v4" />
    <Path d="M20 8h-8m-4 0h-4" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgAntennaOff;
