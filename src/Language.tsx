import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLanguage = (props: SvgProps) => (
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
    <Path d="M4 5h7" />
    <Path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
    <Path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
    <Path d="M12 20l4 -9l4 9" />
    <Path d="M19.1 18h-6.2" />
  </Svg>
);
export default SvgLanguage;
