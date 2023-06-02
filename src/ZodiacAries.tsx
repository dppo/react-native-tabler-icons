import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgZodiacAries = (props: SvgProps) => (
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
    <Path d="M12 5a5 5 0 1 0 -4 8" />
    <Path d="M16 13a5 5 0 1 0 -4 -8" />
    <Path d="M12 21l0 -16" />
  </Svg>
);
export default SvgZodiacAries;
