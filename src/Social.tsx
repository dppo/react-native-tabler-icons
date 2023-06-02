import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSocial = (props: SvgProps) => (
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
    <Path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M12 7l0 4" />
    <Path d="M6.7 17.8l2.8 -2" />
    <Path d="M17.3 17.8l-2.8 -2" />
  </Svg>
);
export default SvgSocial;
