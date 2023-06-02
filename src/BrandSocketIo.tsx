import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandSocketIo = (props: SvgProps) => (
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
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M11 11h1l3 -4z" />
    <Path d="M12 13h1l-4 4z" />
  </Svg>
);
export default SvgBrandSocketIo;
