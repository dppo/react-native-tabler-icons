import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgStepInto = (props: SvgProps) => (
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
    <Path d="M12 3l0 12" />
    <Path d="M16 11l-4 4" />
    <Path d="M8 11l4 4" />
    <Path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </Svg>
);
export default SvgStepInto;
