import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPepperOff = (props: SvgProps) => (
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
    <Path d="M12.59 12.59c-.77 1.418 -2.535 2.41 -4.59 2.41c-2.761 0 -5 -1.79 -5 -4a8 8 0 0 0 13.643 5.67m1.64 -2.357a7.97 7.97 0 0 0 .717 -3.313a3 3 0 0 0 -5.545 -1.59" />
    <Path d="M16 8c0 -2 2 -4 4 -4" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgPepperOff;
