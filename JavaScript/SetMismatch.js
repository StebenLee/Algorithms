var findErrorNums = function(nums) {
  const map = [];
  const res = [];
  for(var i = 0; i < nums.length; i++) {
    if(map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] = map[nums[i]]+1;
    }
  }
  
  for(var i = 1; i < map.length; i++) {
    if(map[i] === undefined) {
      res[1] = i;
    }
    if(map[i] == 2) {
      res[0] = i;
    }
  }
  if(res[1] === undefined)
    res[1]=i;

  return res;
};

//time 132ms time complexity O(n) space complexity O(n)
//using array to implement map 