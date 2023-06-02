import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandComedyCentral = (props: SvgProps) => (
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
    <Path d="M5.343 17.657a8 8 0 1 0 0 -11.314" />
    <Path d="M13.828 9.172a4 4 0 1 0 0 5.656" />
  </Svg>
);
export default SvgBrandComedyCentral;
