import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMedal2 = (props: SvgProps) => (
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
    <Path d="M9 3h6l3 7l-6 2l-6 -2z" />
    <Path d="M12 12l-3 -9" />
    <Path d="M15 11l-3 -8" />
    <Path d="M12 19.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
  </Svg>
);
export default SvgMedal2;
