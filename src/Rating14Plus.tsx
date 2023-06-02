import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRating14Plus = (props: SvgProps) => (
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
    <Path d="M7 15v-6" />
    <Path d="M15.5 12h3" />
    <Path d="M17 10.5v3" />
    <Path d="M12.5 15v-6m-2.5 0v4h3" />
  </Svg>
);
export default SvgRating14Plus;
