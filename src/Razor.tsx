import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRazor = (props: SvgProps) => (
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
    <Path d="M7 3h10v4h-10z" />
    <Path d="M12 7v4" />
    <Path d="M12 11a2 2 0 0 1 2 2v6a2 2 0 1 1 -4 0v-6a2 2 0 0 1 2 -2z" />
  </Svg>
);
export default SvgRazor;
