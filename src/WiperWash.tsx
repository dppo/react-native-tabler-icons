import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWiperWash = (props: SvgProps) => (
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
    <Path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
    <Path d="M12 20l0 -14" />
    <Path d="M4 6a4 4 0 0 1 .4 -1.8" />
    <Path d="M7 2.1a4 4 0 0 1 2 0" />
    <Path d="M12 6a4 4 0 0 0 -.4 -1.8" />
    <Path d="M12 6a4 4 0 0 1 .4 -1.8" />
    <Path d="M15 2.1a4 4 0 0 1 2 0" />
    <Path d="M20 6a4 4 0 0 0 -.4 -1.8" />
  </Svg>
);
export default SvgWiperWash;
