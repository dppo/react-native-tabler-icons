import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgVocabularyOff = (props: SvgProps) => (
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
    <Path d="M7 3h3a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v13m-2 2h-5a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2h-6a1 1 0 0 1 -1 -1v-14c0 -.279 .114 -.53 .298 -.712" />
    <Path d="M12 5v3m0 4v9" />
    <Path d="M7 11h1" />
    <Path d="M16 7h1" />
    <Path d="M16 11h1" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgVocabularyOff;
