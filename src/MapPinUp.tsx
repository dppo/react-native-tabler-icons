import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMapPinUp = (props: SvgProps) => (
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
    <Path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    <Path d="M12.789 21.324a2 2 0 0 1 -2.202 -.424l-4.244 -4.243a8 8 0 1 1 13.59 -4.626" />
    <Path d="M19 22v-6" />
    <Path d="M22 19l-3 -3l-3 3" />
  </Svg>
);
export default SvgMapPinUp;
