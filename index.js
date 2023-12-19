function superbowlWin(record) {
    const winningYear = record.find(record => record.result === "W");
    return winningYear ? winningYear.year : undefined;
  }