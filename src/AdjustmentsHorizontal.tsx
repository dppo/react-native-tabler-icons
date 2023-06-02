import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAdjustmentsHorizontal = (props: SvgProps) => (
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
    <Path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M4 6l8 0" />
    <Path d="M16 6l4 0" />
    <Path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M4 12l2 0" />
    <Path d="M10 12l10 0" />
    <Path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M4 18l11 0" />
    <Path d="M19 18l1 0" />
  </Svg>
);
export default SvgAdjustmentsHorizontal;
