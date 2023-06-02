import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandDaysCounter = (props: SvgProps) => (
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
    <Path d="M20.779 10.007a9 9 0 1 0 -10.77 10.772" />
    <Path d="M13 21h8v-7" />
    <Path d="M12 8v4l3 3" />
  </Svg>
);
export default SvgBrandDaysCounter;
