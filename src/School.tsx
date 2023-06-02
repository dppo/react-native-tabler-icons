import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSchool = (props: SvgProps) => (
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
    <Path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
    <Path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
  </Svg>
);
export default SvgSchool;
