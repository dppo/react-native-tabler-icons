import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTableMinus = (props: SvgProps) => (
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
    <Path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10" />
    <Path d="M3 10h18" />
    <Path d="M10 3v18" />
    <Path d="M16 19h6" />
  </Svg>
);
export default SvgTableMinus;
