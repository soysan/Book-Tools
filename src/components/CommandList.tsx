import React, { VFC } from 'react';

type Props = {
  command: string;
};

const CommandList: VFC<Props> = (props: { command: string }) => {
  const commandArr = props.command.split(' ');
  return (
    <>
      <ul>
        {commandArr.map((val) => (
          <li key={val}>{val}</li>
        ))}
      </ul>
    </>
  );
};

export default CommandList;
