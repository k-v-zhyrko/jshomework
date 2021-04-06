function printPorchAndFloor() {
    const roomsOnFloor = 3;
    const floors = 9;
    const roomNumber = 456;
    
    const r = roomNumber % (roomsOnFloor*floors) 
    const porch = (roomNumber-r)/(roomsOnFloor*floors) + (r > 0 ? 1 : 0);
    const rf = (roomNumber - (porch-1)*roomsOnFloor*floors) % roomsOnFloor 
    const floor = (roomNumber - (porch-1)*roomsOnFloor*floors - rf)/roomsOnFloor + (rf > 0 ? 1 : 0);
    console.log('Porch: '+porch+', floor: '+floor)
}

console.log('Task 4');
printPorchAndFloor(); 

