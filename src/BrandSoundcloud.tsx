import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandSoundcloud = (props: SvgProps) => (
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
    <Path d="M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4z" />
    <Path d="M9 8l0 9" />
    <Path d="M6 17l0 -7" />
    <Path d="M3 16l0 -2" />
  </Svg>
);
export default SvgBrandSoundcloud;
