import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowMoveUp = (props: SvgProps) => (
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
    <Path d="M12 13v-10" />
    <Path d="M9 6l3 -3l3 3" />
    <Path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z" />
  </Svg>
);
export default SvgArrowMoveUp;
