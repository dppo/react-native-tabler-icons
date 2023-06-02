import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandFramerMotion = (props: SvgProps) => (
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
    <Path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
    <Path d="M20 12l-8 8l-4 -4" />
  </Svg>
);
export default SvgBrandFramerMotion;
