import React, { VFC } from 'react';
import UserData from './templates/UserData';
import BTools from '../logic/functions';

type Props = {
  command: string;
};

const CommandList: VFC<Props> = ({ command }: Props) => {
  const commandArr = command.trimRight().split(' ');
  const validCommand = BTools.ValidateCommandArr(commandArr);
  console.log(validCommand);
  return (
    <>
        {commandArr.map((val) => (
          <p key={val}><UserData />: {val}</p>
        ))}
    </>
  );
};

export default CommandList;
