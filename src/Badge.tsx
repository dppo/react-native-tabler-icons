import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBadge = (props: SvgProps) => (
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
    <Path d="M17 17v-13l-5 3l-5 -3v13l5 3z" />
  </Svg>
);
export default SvgBadge;
