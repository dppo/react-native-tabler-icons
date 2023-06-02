import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLocationBroken = (props: SvgProps) => (
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
    <Path d="M12.896 19.792l-2.896 -5.792l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.487 9.657" />
    <Path d="M21.5 21.5l-5 -5" />
    <Path d="M16.5 21.5l5 -5" />
  </Svg>
);
export default SvgLocationBroken;
