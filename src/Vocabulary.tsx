import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgVocabulary = (props: SvgProps) => (
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
    <Path d="M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2z" />
    <Path d="M12 5v16" />
    <Path d="M7 7h1" />
    <Path d="M7 11h1" />
    <Path d="M16 7h1" />
    <Path d="M16 11h1" />
    <Path d="M16 15h1" />
  </Svg>
);
export default SvgVocabulary;
