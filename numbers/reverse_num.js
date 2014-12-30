// Write a function that will reverse a number.

function reverse_a_num(num)
{
  num = num + "";
  return num.split("").reverse().join("");
}
reverse_a_num(32243);
