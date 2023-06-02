import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlayCard = (props: SvgProps) => (
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
    <Path d="M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
    <Path d="M8 6h.01" />
    <Path d="M16 18h.01" />
    <Path d="M12 16l-3 -4l3 -4l3 4z" />
  </Svg>
);
export default SvgPlayCard;
