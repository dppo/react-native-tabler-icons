import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCrown = (props: SvgProps) => (
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
    <Path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
  </Svg>
);
export default SvgCrown;
