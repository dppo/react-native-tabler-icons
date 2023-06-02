import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSalt = (props: SvgProps) => (
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
    <Path d="M12 13v.01" />
    <Path d="M10 16v.01" />
    <Path d="M14 16v.01" />
    <Path d="M7.5 8h9l-.281 -2.248a2 2 0 0 0 -1.985 -1.752h-4.468a2 2 0 0 0 -1.986 1.752l-.28 2.248z" />
    <Path d="M7.5 8l-1.612 9.671a2 2 0 0 0 1.973 2.329h8.278a2 2 0 0 0 1.973 -2.329l-1.612 -9.671" />
  </Svg>
);
export default SvgSalt;
