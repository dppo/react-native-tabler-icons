import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCell = (props: SvgProps) => (
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
    <Path d="M8 4l-4 2v5l4 2l4 -2v-5z" />
    <Path d="M12 11l4 2l4 -2v-5l-4 -2l-4 2" />
    <Path d="M8 13v5l4 2l4 -2v-5" />
  </Svg>
);
export default SvgCell;
