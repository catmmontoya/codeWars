function missingNo(nums) {
  //sort the numbers, then check if the following number adds one to the last.
  //if it does not equal its index in order, return that number.
  nums.sort((a, b) => a - b);
  for (let i = 0; i < 101; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return nums.length;
}
