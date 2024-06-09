//Short circuit
// Rules
// if left hand side or right hand side are true so left hand value will be show;
// first we solve () circle braket;
// second we solve  && operator;
// then we solve || operator;
// && end operator means is LHS abd RHS is true;
// || or operator means is LHS and RHS any one is true;

// trur value
//  string: " "
//  true
// other number

// false value
// empty string: ""
// 0 number
// false
// undefined
// null

// expression-no-01
// let exp1 = "faraz" || (true + false) + 5 && " " || "true";
// "faraz" || 6 && " " || "true"
// "faraz" || 6 || "true"
// "faraz" || "true"
// Output: "faraz"
// console.log(exp1);

// expression-no-02
// let b = 3
// let exp2 = (1 + 2) + ++b || 5 && 0 ;
// 7 || 0
// Output: 7
// console.log(exp2);

// expression-no-03
// let a = 5;
// let exp3 = 32 && true - ++a && " " || "true";
// 32 && true - 6 && " " || "true"
// 32 - 6 && " " || "true"
// " " || "true"
// Output: " "
// console.log(exp3);

// expression-no-04
// let exp4 = (true + 3) * 5 && undefined || "faraz" + 5;
// 20 && undefined || "faraz5"
// undefined || "faraz5"
// Output: "faraz5"
// console.log(exp4);

// expression-no-05
// let exp5 = 32 + "abc" || (true + false) + false || + 5 || "true";
// "32abc" || 1 || +5 || "true"
// "32abc" || + 5 || "true"
// "32abc" || "true"
// Output: "32abc"
// console.log(exp5);

// expression-no-06
// let exp6 = false || (true + true) + 15 && "" || 50;
// false || 17 && "" || 50;
// false || "" || 50
// flase || 50
// Output: "50"
// console.log(exp6);

// expression-no-07
// let exp7 = (true + false) + 5 || false + 8 + "abc" || "true";
// 6 || "8abc" || "true"
// 6 || "true"
// Output: 6
// console.log(exp7);

// expression-no-08
// let exp8 = "faraz" || false + 10 || "true";
// "faraz" || 10 || "true"
// "faraz" || "true"
// Output: "faraz"
// console.log(exp8);

// expression-no-09
// let exp9 = 12 + (false + false) + true && null || "faraz";
// 13 && null || "faraz"
// null || "faraz"
// Output: "faraz"
// console.log(exp9);

// expression-no-10
// let exp10 = (false + true + false + 2) || "faraz" && false || 1 + 10;
// 3 || "faraz" && false || 11
// 3 || false || 11
// 3 || 11
// Output: 3
// console.log(exp10);

// expression-no-11
// let exp11 = (true + false) + 5 || false + 8 + "abc" || "true";
// 6 || "8abc" || "true"
// 6 || "true"
// Output: 6
// console.log(exp11)

// expression-no-12
// let exp12 = (true + false) * 3 && "" || false + true - (12 + true + true + false);
// 3 && "" || 1 - 14
// "" || -13
// Output: -13
// console.log(exp12);