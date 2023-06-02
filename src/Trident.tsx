import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTrident = (props: SvgProps) => (
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
    <Path d="M3 6l2 -2v3a7 7 0 0 0 14 0v-3l2 2" />
    <Path d="M12 21v-18l-2 2m4 0l-2 -2" />
  </Svg>
);
export default SvgTrident;
