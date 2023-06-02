import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFlipVertical = (props: SvgProps) => (
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
    <Path d="M12 3l0 18" />
    <Path d="M16 7l0 10l5 0l-5 -10" />
    <Path d="M8 7l0 10l-5 0l5 -10" />
  </Svg>
);
export default SvgFlipVertical;
