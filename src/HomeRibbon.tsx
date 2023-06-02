import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHomeRibbon = (props: SvgProps) => (
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
    <Path d="M16 15h5v7l-2.5 -1.5l-2.5 1.5z" />
    <Path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" />
    <Path d="M9 21v-6a2 2 0 0 1 2 -2h1.5" />
  </Svg>
);
export default SvgHomeRibbon;
