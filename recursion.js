/*
Rcursion = A function that call itself;
we can use this instead of loops 

*/

// function sayhello(N){
//     if(N == 0) return;
//     console.log("hello");
//     sayhello(N - 1);
// }
// sayhello(5);


// To find to N natural numbers 
// like if Input:10 Output:10,9,8,7,6,5,4,3,2,1

function Natural(N){
    if(N == 0) return;
    console.log(N)
    Natural(N-1)
}
Natural(3);

//how it works 

/*
          natural(3)
            console.log(3)
              natrual(2)
                console.log(2)
                  natural(1)
                    console.log(1)
                         narutal(0)      >>> it'll break here because of the if condition


*/

// function natural(N){
//     if(N == 0) return;
    
//     natural(N-1)

//     console.log(N)
// }
// natural(3);

//                                             >>> *****  another thing to be noted in recursion   ***** 
/*
    natural(3)
     if(3 == 0)  false
      natural(2)
        if(2 == 0)  false
          natural(1)
           if(1 == 0)   false
             natural(0)
              if(0 == 0)  true return
               console.log(1)
          console.log(2)
      console.log(3)

*/


