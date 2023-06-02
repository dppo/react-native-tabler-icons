import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgColumns = (props: SvgProps) => (
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
    <Path d="M4 6l5.5 0" />
    <Path d="M4 10l5.5 0" />
    <Path d="M4 14l5.5 0" />
    <Path d="M4 18l5.5 0" />
    <Path d="M14.5 6l5.5 0" />
    <Path d="M14.5 10l5.5 0" />
    <Path d="M14.5 14l5.5 0" />
    <Path d="M14.5 18l5.5 0" />
  </Svg>
);
export default SvgColumns;
