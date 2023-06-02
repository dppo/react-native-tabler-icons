import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChairDirector = (props: SvgProps) => (
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
    <Path d="M6 21l12 -9" />
    <Path d="M6 12l12 9" />
    <Path d="M5 12h14" />
    <Path d="M6 3v9" />
    <Path d="M18 3v9" />
    <Path d="M6 8h12" />
    <Path d="M6 5h12" />
  </Svg>
);
export default SvgChairDirector;
