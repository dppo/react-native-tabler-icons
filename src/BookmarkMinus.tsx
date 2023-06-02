import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBookmarkMinus = (props: SvgProps) => (
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
    <Path d="M12.427 17.256l-.427 -.256l-5 3v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v9" />
    <Path d="M16 19h6" />
  </Svg>
);
export default SvgBookmarkMinus;
