function fiboEvenSum(n) {
  let sum = 0
  let prev = 1
  let current = 1
  while (current <= n) {
    let fibonacci = prev + current
    if (fibonacci%2 === 0) {
      sum+=fibonacci
    }
    prev = current
    current = fibonacci
  }
  console.log(`The sum of the even-valued terms is ${sum}.`)
return sum
}

fiboEvenSum(4000000);