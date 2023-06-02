import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgToiletPaper = (props: SvgProps) => (
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
    <Path d="M6 10m-3 0a3 7 0 1 0 6 0a3 7 0 1 0 -6 0" />
    <Path d="M21 10c0 -3.866 -1.343 -7 -3 -7" />
    <Path d="M6 3h12" />
    <Path d="M21 10v10l-3 -1l-3 2l-3 -3l-3 2v-10" />
    <Path d="M6 10h.01" />
  </Svg>
);
export default SvgToiletPaper;
