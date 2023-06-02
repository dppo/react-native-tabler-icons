import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCrane = (props: SvgProps) => (
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
    <Path d="M6 21h6" />
    <Path d="M9 21v-18l-6 6h18" />
    <Path d="M9 3l10 6" />
    <Path d="M17 9v4a2 2 0 1 1 -2 2" />
  </Svg>
);
export default SvgCrane;
