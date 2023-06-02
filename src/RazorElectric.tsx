import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRazorElectric = (props: SvgProps) => (
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
    <Path d="M8 3v2" />
    <Path d="M12 3v2" />
    <Path d="M16 3v2" />
    <Path d="M9 12v6a3 3 0 0 0 6 0v-6h-6z" />
    <Path d="M8 5h8l-1 4h-6z" />
    <Path d="M12 17v1" />
  </Svg>
);
export default SvgRazorElectric;
