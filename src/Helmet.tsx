import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHelmet = (props: SvgProps) => (
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
    <Path d="M12 4a9 9 0 0 1 5.656 16h-11.312a9 9 0 0 1 5.656 -16z" />
    <Path d="M20 9h-8.8a1 1 0 0 0 -.968 1.246c.507 2 1.596 3.418 3.268 4.254c2 1 4.333 1.5 7 1.5" />
  </Svg>
);
export default SvgHelmet;
