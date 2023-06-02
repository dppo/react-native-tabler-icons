import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBlurOff = (props: SvgProps) => (
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
    <Path d="M12 3v5m0 4v8" />
    <Path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
    <Path d="M16 12h5" />
    <Path d="M13 9h7" />
    <Path d="M12 6h6" />
    <Path d="M12 18h6" />
    <Path d="M12 15h3m4 0h1" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgBlurOff;
