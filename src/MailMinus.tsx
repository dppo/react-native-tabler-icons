import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMailMinus = (props: SvgProps) => (
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
    <Path d="M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8" />
    <Path d="M16 19h6" />
    <Path d="M3 7l9 6l9 -6" />
  </Svg>
);
export default SvgMailMinus;
