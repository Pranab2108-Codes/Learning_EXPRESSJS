function getLength(name) {

    return name.length;

}

try{

    const ans = getLength();                                 /* Here we are not passing any string as name inside of this getLength function. */
    console.log(ans);                                        /* So it should give us an error here. */

}catch(error){                                               /* If we will not catch the error through the catch block, then the line which is printing "Hi there" will never be print, because once the error get trigger at a line, flow of execution will never passed from that line, so it will stop there forever. */

    console.log("The type of error is: " +error);            /* But in this code flow of execution will not stop at the error line, hence the line of "Hi there" get print. */

}

console.log("Hi there");