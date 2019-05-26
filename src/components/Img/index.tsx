import React from 'react';
import styled from 'styled-components';
import { ImageProp } from '../../interfaces/image-prop';

const Img = styled.img`
  src: ${(props: ImageProp) => props.src};
  width: ${(props: ImageProp) => props.width || '150px'};
  height: ${(props: ImageProp) => props.height || '200px'};
`;

export default Img;