import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';
const SvgBrandDeliveroo = (props: SvgProps) => (
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
    <Path d="M15 11l1 -9l5 .5l-1 13.5l-3 6l-12.5 -2.5l-1.5 -6l7 -1.5l-1.5 -7.5l4.5 -1z" />
    <Circle cx={15.5} cy={15.5} r={1} fill="currentColor" />
    <Circle cx={11.5} cy={14.5} r={1} fill="currentColor" />
  </Svg>
);
export default SvgBrandDeliveroo;
