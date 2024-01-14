let loopis = false;
while (loopis){
    console.log("This loop will never run."); //this loop never run because of vaule is FALSE.
}
do {
    console.log("It will run at least once."); // if conditon FALSE do-while loop run at least one time & while loop never run if value is false.
} while(loopis);