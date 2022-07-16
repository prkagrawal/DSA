/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
// const canVisitAllRooms1 = function(rooms) {
//   const isVisited = [];
//   for (const room of rooms) {
//     isVisited.push(false);
//   }
//   // console.log('isVisited', isVisited);
//   const keySet = new Set();
//   keySet.add(0);

//   while (keySet.size > 0) {
//     // console.log('while loop', keySet);
//     const key = keySet.values().next().value;
//     isVisited[key] = true;
//     const currentRoom = rooms[key];
//     // console.log('room', currentRoom);
//     for (const keyNum of currentRoom) {
//       if (isVisited[keyNum] === false) {
//         keySet.add(keyNum);
//       }
//     }
//     keySet.delete(key);
//   }

//   if (isVisited.includes(false)) {
//     return false;
//   }
//   return true;
// };

// console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));

// const canVisitAllRooms2 = function(rooms) {
//   const isVisited = new Set();
//   // for (const room of rooms) {
//   //   isVisited.push(false);
//   // }
//   // console.log('isVisited', isVisited);
//   const keySet = new Set();
//   keySet.add(0);

//   while (keySet.size > 0) {
//     // console.log('while loop', keySet);
//     const key = keySet.values().next().value;
//     // isVisited[key] = true;
//     isVisited.add(key);
//     const currentRoom = rooms[key];
//     // console.log('room', currentRoom);
//     for (const keyNum of currentRoom) {
//       if (!isVisited.has(keyNum)) {
//         keySet.add(keyNum);
//       }
//     }
//     keySet.delete(key);
//   }

//   if (isVisited.size !== rooms.length) {
//     return false;
//   }
//   return true;
// };

const canVisitAllRooms3 = function(rooms) {
  const isVisited = [];
  // for (const room of rooms) {
  //   isVisited.push(false);
  // }
  // console.log('isVisited', isVisited);
  const keySet = new Set();
  keySet.add(0);

  while (keySet.size > 0) {
    // console.log('while loop', keySet);
    const key = keySet.values().next().value;
    isVisited.push(key);
    const currentRoom = rooms[key];
    // console.log('room', currentRoom);
    for (const keyNum of currentRoom) {
      if (!isVisited.includes(keyNum)) {
        keySet.add(keyNum);
      }
    }
    keySet.delete(key);
  }

  if (isVisited.length !== rooms.length) {
    return false;
  }
  return true;
};


console.log(canVisitAllRooms3([[1],[3],[3],[0]]));

// const mySet1 = new Set(['text', 11, 2, 3]);

// console.log(mySet1.values());

// for (const item of mySet1) {
//   console.log(item);
// }

// // logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// for (const item of mySet1.keys()) {
//   console.log(item);
// }

// // logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// for (const item of mySet1.values()) {
//   console.log(item);
// }
