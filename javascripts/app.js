// ======================

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [], 
}

// ======================

var mars = [ 
  [null, null, null, null, null, null, "rock", null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, "rock", null, null, null, null, null],
  [null, "rock", null, null, null, null, null, null, "rock", null],
  [null, null, null, null, null, null, "rock", null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, "rock", null, null, null, null, null, "rock", null],
  [null, null, null, null, null, null, "rock", null, null, null],
  [null, "rock", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
 ];




function turnLeft(rover){
  console.log("turnLeft was called!");
  var direction = rover.direction;

  switch (direction) {
    case "N":
    direction = "W";
    break;
    
    case "S":
    direction = "E";
    break;

    case "E":
    direction = "W";
    break; 

    case "W":
    direction = "S";
    break;

    default:
      break;
  }
  rover.direction = direction;

}

function turnRight(rover){
  console.log("turnRight was called!");
  var direction = rover.direction;

  switch (direction) {
    case "N":
    direction = "E";
    break;
    
    case "S":
    direction = "W";
    break;

    case "E":
    direction = "S";
    break;

    case "W":
    direction = "N";
    break;

    default:
      break;
  }
  rover.direction = direction;
}

function moveForward(rover){
  console.log("moveForward was called")

  var direction = rover.direction;

  switch (direction) {
    case "N":    
    if (rover.y > 0) {
      storeCoordinate(rover);
      rover.y -= 1;
    } else {
      gridError();
    }    
    break;

    case "S":    
    if (rover.y < 9) {
      storeCoordinate(rover);
      rover.y += 1; 
    } else {
      gridError();
    }  
    break;    

    case "E":    
    if (rover.x < 9) {
      storeCoordinate(rover);
      rover.x += 1; 
    } else {
      gridError();
    }    
    break;

    case "W":    
    if (rover.x > 0) {
      storeCoordinate(rover);
      rover.x -= 1; 
    } else {
      gridError();
    } 
    break;

    default:
      break;
  }
  
}

function moveBackward(rover){
  console.log("moveBackward was called")

  var direction = rover.direction;

  switch (direction) {
    case "N":    
    if (rover.y < 9) {
      storeCoordinate(rover);
      rover.y += 1;
    } else {
      gridError();
    }    
    break;

    case "S":    
    if (rover.y > 0) {
      storeCoordinate(rover);
      rover.y -= 1; 
    } else {
      gridError();
    }  
    break;    

    case "E":    
    if (rover.x > 0) {
      storeCoordinate(rover);
      rover.x += 1; 
    } else {
      gridError();
    }    
    break;

    case "W":    
    if (rover.x < 0) {
      storeCoordinate(rover);
      rover.x -= 1; 
    } else {
      gridError();
    } 
    break;

    default:
      break;
  }
  
}

function detectObstacle () {
  // work in progess
}

function gridError() {
  console.log("Illegal move; Rover already on the edge of grid.");
}


function storeCoordinate(rover) {
  rover.travelLog.push("[" + rover.x + "," + rover.y + "]");
}


function commands(commandString){
  var x = 0;
  while (x < commandString.length) {
    var letter = commandString[x];
    switch (letter) {
      case "l":
      turnLeft(rover);      
      break; 
      
      case "r":  
      turnRight(rover);      
      break; 

      case "f": 
      moveForward(rover); 
      console.log("Rovers position is: " + getRoverPos(rover));
      break; 

      case "b": 
      moveBackward(rover); 
      console.log("Rovers position is: " + getRoverPos(rover));
      break; 

      default:
      console.log("---- Invalid command. ----");
      break;
    } x++
  }
}


function getRoverPos(rover) {
  var position = rover.x + ", " +  rover.y;
  return position;
}

console.log("Rovers position is: " + getRoverPos(rover));
commands("rfrflfqrfffffffffff");
console.log("Previous positions: " + rover.travelLog);