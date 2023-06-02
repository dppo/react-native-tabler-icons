import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandGooglePlay = (props: SvgProps) => (
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
    <Path d="M4 3.71v16.58a.7 .7 0 0 0 1.05 .606l14.622 -8.42a.55 .55 0 0 0 0 -.953l-14.622 -8.419a.7 .7 0 0 0 -1.05 .607z" />
    <Path d="M15 9l-10.5 11.5" />
    <Path d="M4.5 3.5l10.5 11.5" />
  </Svg>
);
export default SvgBrandGooglePlay;
