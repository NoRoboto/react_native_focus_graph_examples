import React from 'react'
import { Modal } from 'react-native'
import { TVRCHandler } from 'react-native-focus-graph';
import TVModal from "./modal";

const ModalHandler = ({children, showModal}) => {

  const graphModel = {
    vertexList: ['A', 'B', 'C'],
    edgeList: [
      {vertex: 'A', down: 'B'},
      {vertex: 'B', up: 'A', down: 'C'},
      {vertex: 'C', up: 'B'},
    ],
  };

  return (
    <TVRCHandler
      graphModel={graphModel}
      initialElementId="B"
      enable={true}
      children={TVModal}
    />
  );
}

export default ModalHandler
