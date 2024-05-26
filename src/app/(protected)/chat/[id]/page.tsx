'use client';
import React, { FC } from 'react';
interface SpecificChatProps {
  params: {
    id: string;
  };
}
const SpecificChat: FC<SpecificChatProps> = ({ params: { id } }) => {
  return <div>{id}</div>;
};

export default SpecificChat;
