const commandList = ['searchByTitle', 'uniqueNameCount', 'titleByUniqueName'];

class BTools {
  static ValidateCommandArr = (commandArr: string[]): string[] => {
    if (commandArr.length <= 1 || commandArr[0] !== 'bt') return ['invalid input. must take form "bt command" or "bt command argument".'];
    if (commandList.indexOf(commandArr[1]) === -1) return ['invalid command. please choose from [searchByTitle] [uniqueNameCount] [titleByUniqueName].'];
    if (commandArr[1] === 'searchByTitle') return BTools.ValidateSearchByTitle(commandArr);
    if (commandArr[1] === 'uniqueNameCount' || commandArr[1] === 'titleByUniqueName') return BTools.ValidateArgNum(commandArr);

    return commandArr;
  }

  static ValidateSearchByTitle = (command: string[]): string[] => {
    if (command.length > 4) return ['invalid input. searchByTitle need [bookTitle] [maxNumber]'];
    if (command.length === 4 && isNaN(Number(command[3]))) return ['maxNumber must be integer'];
    return command;
  }

  static ValidateArgNum = (command: string[]): string[] => {
    if (command.length > 3 || command.length == 2) return [`command ${command[1]} must have only one argument.`];
    return command;
  }
}

export default BTools;
