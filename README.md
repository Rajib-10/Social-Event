
# Social Event

Social Event is a simple react project where we are exploring react router,react private router as well as firebase authentication.


# Live Link:    [Social Event](http://motionless-change.surge.sh/)


#### Add at least five Project features:

* **Navigation with Navbar:**  
     users to easily navigate different pages like  home, contact,about,gallery and events page.


* **Engaging Home Page**  
    Here user can see our services and some of our service those we have already finished.Services and some of service will grab user attention.

* **Contact Page for Inquiries**    
     User can reach out for inquiries or event bookings.

* **Gallery for Visual Showcase:**  
    High-quality images can enhance the impact.
* **Upcoming Events Display:**   
     Display upcoming events,event names, dates, descriptions, and any additional important information. 

<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>A.{} is the right answer.greetign is assign as empty object and 'A' is the correct representation of empty object.ReferenceError is type error.Since greetign is empty object it can not be undefined</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>I think the answer is 'C'. In javascript when we try to sum a number and string then number and string will be concatenate and sum will be string. </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>A: `['🍕', '🍫', '🥑', '🍔']` is the correct answer.because info.favoriteFood is the property of the info.we can change the value of info property but this does not change the original food array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>B: `Hi there, undefined` is the correct answer.sayHi is a function.It takes parameter name.Since sayHi() is called without passing argument so name will be undefined inside the function.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>C: 3 is the correct answer because if condition will be true for 1,2,3.since if condition is true for 3 times so count will be increase 3 times and count will be 3.for 0 if condition will not execute.</i>

</p>
</details>
