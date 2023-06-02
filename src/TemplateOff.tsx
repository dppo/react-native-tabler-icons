import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTemplateOff = (props: SvgProps) => (
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
    <Path d="M8 4h11a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-7m-4 0h-3a1 1 0 0 1 -1 -1v-2c0 -.271 .108 -.517 .283 -.697" />
    <Path d="M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
    <Path d="M16 12h4" />
    <Path d="M14 16h2" />
    <Path d="M14 20h6" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgTemplateOff;
