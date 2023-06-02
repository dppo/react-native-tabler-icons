import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSchema = (props: SvgProps) => (
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
    <Path d="M5 2h5v4h-5z" />
    <Path d="M15 10h5v4h-5z" />
    <Path d="M5 18h5v4h-5z" />
    <Path d="M5 10h5v4h-5z" />
    <Path d="M10 12h5" />
    <Path d="M7.5 6v4" />
    <Path d="M7.5 14v4" />
  </Svg>
);
export default SvgSchema;
