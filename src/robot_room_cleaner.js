var cleanRoom = function(robot) {
  // keep track of visited vertices
  const doneSet = new Set();
  // array of four surrounding coordinates
  const coordinates = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  // index of cleaners direction
  dfs(0, 0, 0);
  
  function dfs(lastDirIndex, x, y) {
    // clean the square
    robot.clean();
    // add to doneSet
    doneSet.add(`${x}, ${y}`);
    // Run for each direction
    for (let i = 0; i < 4; i++) {
      //   curr direction
      const currDirIndex = (i + lastDirIndex) % 4;
      //   x and y coordinates for next square
      const xx = x + coordinates[currDirIndex][0];
      const yy = y + coordinates[currDirIndex][1];
      //   if doneSet doesn't have the next coordinate and move to it
      if (!doneSet.has(`${xx}, ${yy}`) && robot.move()) {
        // call dfs for those coordinates        
        dfs(currDirIndex, xx, yy);
      }
      // if not, turn the robot right
      robot.turnRight();
    }
    // Now robot is facing back in the starting direction, move it back to the square it was in previously
    robot.turnRight();
    robot.turnRight();
    robot.move();
    robot.turnRight();
    robot.turnRight();
  }
};
