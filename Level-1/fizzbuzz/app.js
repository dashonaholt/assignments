
// prints each number from 1 to 100 on a new line.
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

let i;
    for (i=1; i<=100; i++)
    {
        // multiples of both 3 and 5, print FizzBuzz
        if (i%15 == 0)   
            document.write("FizzBuzz" + " ");
        //multiple of 3 print Fizz
        else if ((i%3) == 0)
            document.write("Fizz" + " ");               
        //multiple of 5 printBuzz
        else if ((i%5) == 0)                   
            document.write("Buzz" + " ");     
        // print the number           
        else       
            document.write(i + " ");               
    }