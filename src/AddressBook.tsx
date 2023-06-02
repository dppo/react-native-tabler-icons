import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAddressBook = (props: SvgProps) => (
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
    <Path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
    <Path d="M10 16h6" />
    <Path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M4 8h3" />
    <Path d="M4 12h3" />
    <Path d="M4 16h3" />
  </Svg>
);
export default SvgAddressBook;
