import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgKeyframes = (props: SvgProps) => (
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
    <Path d="M9.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z" />
    <Path d="M17 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836" />
    <Path d="M13 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836" />
  </Svg>
);
export default SvgKeyframes;
