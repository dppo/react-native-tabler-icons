import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArtboardOff = (props: SvgProps) => (
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
    <Path d="M12 8h3a1 1 0 0 1 1 1v3" />
    <Path d="M15.716 15.698a1 1 0 0 1 -.716 .302h-6a1 1 0 0 1 -1 -1v-6c0 -.273 .11 -.52 .287 -.7" />
    <Path d="M3 8h1" />
    <Path d="M3 16h1" />
    <Path d="M8 3v1" />
    <Path d="M16 3v1" />
    <Path d="M20 8h1" />
    <Path d="M20 16h1" />
    <Path d="M8 20v1" />
    <Path d="M16 20v1" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgArtboardOff;
