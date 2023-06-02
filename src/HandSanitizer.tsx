import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHandSanitizer = (props: SvgProps) => (
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
    <Path d="M7 21h10v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10z" />
    <Path d="M15 3h-6a2 2 0 0 0 -2 2" />
    <Path d="M12 3v5" />
    <Path d="M12 11v4" />
    <Path d="M10 13h4" />
  </Svg>
);
export default SvgHandSanitizer;
