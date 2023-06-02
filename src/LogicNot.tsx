import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLogicNot = (props: SvgProps) => (
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
    <Path d="M22 12h-3" />
    <Path d="M2 9h3" />
    <Path d="M2 15h3" />
    <Path d="M5 5l10 7l-10 7z" />
    <Path d="M17 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </Svg>
);
export default SvgLogicNot;
