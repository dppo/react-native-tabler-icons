import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWorldCancel = (props: SvgProps) => (
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
    <Path d="M21 12a9 9 0 1 0 -8.985 9" />
    <Path d="M3.6 9h16.8" />
    <Path d="M3.6 15h9.9" />
    <Path d="M11.5 3a17 17 0 0 0 0 18" />
    <Path d="M12.5 3a16.991 16.991 0 0 1 2.53 10.275" />
    <Path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M17 21l4 -4" />
  </Svg>
);
export default SvgWorldCancel;
