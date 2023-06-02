import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDna = (props: SvgProps) => (
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
    <Path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
    <Path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" />
    <Path d="M14.828 3.515a4 4 0 0 0 5.657 5.657" />
  </Svg>
);
export default SvgDna;
