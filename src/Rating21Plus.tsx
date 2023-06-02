import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRating21Plus = (props: SvgProps) => (
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
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M13 15v-6" />
    <Path d="M15.5 12h3" />
    <Path d="M17 10.5v3" />
    <Path d="M7 10.5a1.5 1.5 0 0 1 3 0c0 .443 -.313 .989 -.612 1.393l-2.388 3.107h3" />
  </Svg>
);
export default SvgRating21Plus;
