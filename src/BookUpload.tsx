import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBookUpload = (props: SvgProps) => (
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
    <Path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />
    <Path d="M11 16h-5a2 2 0 0 0 -2 2" />
    <Path d="M15 16l3 -3l3 3" />
    <Path d="M18 13v9" />
  </Svg>
);
export default SvgBookUpload;
