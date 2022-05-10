const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
// const nums1 = [4,9,5]
// const nums2 = [9,4,9,8,4]

const intersect = (nums1, nums2) => {
  const nums1Obj = {};
  for (let num of nums1) {
    if (!nums1Obj[num]) {
      nums1Obj[num] = 1;
    } else {
      nums1Obj[num] = nums1Obj[num] + 1;
    }
  }
  let finalArray = [];
  for (let num of nums2) {
    const count =  nums1Obj[num]
    if (count > 0) {
      finalArray.push(num);
      nums1Obj[num] = nums1Obj[num] - 1;
    }
  }

  return finalArray;
};

console.log(intersect(nums1, nums2));
