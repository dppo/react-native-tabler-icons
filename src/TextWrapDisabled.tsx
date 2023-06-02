import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTextWrapDisabled = (props: SvgProps) => (
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
    <Path d="M4 6l10 0" />
    <Path d="M4 18l10 0" />
    <Path d="M4 12h17l-3 -3m0 6l3 -3" />
  </Svg>
);
export default SvgTextWrapDisabled;
