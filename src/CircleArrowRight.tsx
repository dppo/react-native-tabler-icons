import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircleArrowRight = (props: SvgProps) => (
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
    <Path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
    <Path d="M16 12l-4 -4" />
    <Path d="M16 12h-8" />
    <Path d="M12 16l4 -4" />
  </Svg>
);
export default SvgCircleArrowRight;
