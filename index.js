// Code your solution in this file!
function distanceFromHqInBlocks(block){
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(feet){
  return distanceFromHqInBlocks(feet)*264;
}

function distanceTravelledInFeet(start, destination){
  return Math.abs(start-destination)*264;
}

function calculatesFarePrice(start, destination){
  if (Math.abs(start-destination) < 400)
    return 0;
  if (Math.abs(start-destination) > 400 && <2000)
    return (Math.abs(start-destination))*.02;

}
