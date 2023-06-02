import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgNumber0 = (props: SvgProps) => (
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
    <Path d="M16 16v-8" />
    <Path d="M12 20a4 4 0 0 0 4 -4v-8a4 4 0 1 0 -8 0v8a4 4 0 0 0 4 4z" />
  </Svg>
);
export default SvgNumber0;
