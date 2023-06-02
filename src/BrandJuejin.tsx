import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandJuejin = (props: SvgProps) => (
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
    <Path d="M2 12l10 7.422l10 -7.422" />
    <Path d="M7 9l5 4l5 -4" />
    <Path d="M11 6l1 .8l1 -.8l-1 -.8z" />
  </Svg>
);
export default SvgBrandJuejin;
