import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRouterOff = (props: SvgProps) => (
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
    <Path d="M17 13h2a2 2 0 0 1 2 2v2m-.588 3.417c-.362 .36 -.861 .583 -1.412 .583h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h8" />
    <Path d="M17 17v.01" />
    <Path d="M13 17v.01" />
    <Path d="M12.226 8.2a4 4 0 0 1 6.024 .55" />
    <Path d="M9.445 5.407a8 8 0 0 1 12.055 1.093" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgRouterOff;
