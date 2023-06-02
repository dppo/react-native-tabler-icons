import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLetterM = (props: SvgProps) => (
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
    <Path d="M6 20v-16l6 14l6 -14v16" />
  </Svg>
);
export default SvgLetterM;
