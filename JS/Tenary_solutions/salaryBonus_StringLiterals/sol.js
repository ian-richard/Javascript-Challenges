/*
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

*/

function bonusTime_og(salary, bonus) {
    return bonus ? `£${(salary * 10)}` : `£${salary}`;
    }

const bonusTime = (salary, bonus) => '£' + salary * (bonus ? 10 : 1);
      

    console.log(bonusTime(2, true) === '£20');
    console.log(bonusTime(78, false) === '£78');
    console.log(bonusTime(67890, true) === '£678900');