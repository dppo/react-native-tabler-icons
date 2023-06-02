import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLanguageKatakana = (props: SvgProps) => (
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
    <Path d="M5 5h6.586a1 1 0 0 1 .707 1.707l-1.293 1.293" />
    <Path d="M8 8c0 1.5 .5 3 -2 5" />
    <Path d="M12 20l4 -9l4 9" />
    <Path d="M19.1 18h-6.2" />
  </Svg>
);
export default SvgLanguageKatakana;
