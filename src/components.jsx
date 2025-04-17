import {colour_mix, largest_product, day_of_the_week, pay_raise, is_leap} from './functions.js';

function Question1(){
    return <section>
1. Colour Mix
      <h2>results</h2>
      <p>colour_mix("red", "blue") == "{colour_mix('red', 'blue')}"</p>
      <p>colour_mix("green", "green") == "{colour_mix('green', 'green')}"</p>
      <p>colour_mix("purple", "blue") == "{colour_mix('purple', 'blue')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Largest Product
      <h2>results</h2>
      <p>largest_product(1, 2, 3) == "{largest_product(1, 2, 3)}"</p>
      <p>largest_product(2, 1, 5) == "{largest_product(2, 1, 5)}"</p>
      <p>largest_product(1, 9, 4) == "{largest_product(1, 9, 4)}"</p>
    </section>;
}

function Question3(){
    return <section>
3. Day of the week
      <h2>results</h2>
      <p>day_of_the_week(1) == "{day_of_the_week(1)}"</p>
      <p>day_of_the_week(3) == "{day_of_the_week(3)}"</p>
      <p>day_of_the_week(5) == "{day_of_the_week(5)}"</p>
    </section>;
}

function Question4(){
    return <section>
4. Pay Raise
      <h2>results</h2>
      <p>pay_raise('F', 12, 50000) == "{pay_raise('F', 12, 50000)}"</p>
      <p>pay_raise('P', 3, 40000) == "{pay_raise('P', 3, 40000)}"</p>
      <p>pay_raise('X', 5, 30000) == "{pay_raise('X', 5, 30000)}"</p>
    </section>;
}

function Question5(){
    return <section>
5. Leap Year
      <h2>results</h2>
      <p>is_leap(2020) == "{is_leap(2020)}"</p>
      <p>is_leap(1900) == "{is_leap(1900)}"</p>
      <p>is_leap(2000) == "{is_leap(2000)}"</p>
    </section>;
}

export{Question1, Question2, Question3, Question4, Question5}