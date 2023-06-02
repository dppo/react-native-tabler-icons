import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandNetflix = (props: SvgProps) => (
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
    <Path d="M9 3l10 18h-4l-10 -18z" />
    <Path d="M5 3v18h4v-10.5" />
    <Path d="M19 21v-18h-4v10.5" />
  </Svg>
);
export default SvgBrandNetflix;
