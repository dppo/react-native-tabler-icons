import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgOvalVerticalFilled = (props: SvgProps) => (
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
    <Path
      d="M12 5c-5.457 0 -10 3.028 -10 7s4.543 7 10 7s10 -3.028 10 -7s-4.543 -7 -10 -7z"
      strokeWidth={0}
      fill="currentColor"
    />
  </Svg>
);
export default SvgOvalVerticalFilled;
