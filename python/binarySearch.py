def binarySearch(nums, n):
  left = 0
  right = len(nums)

  while left < right:
    mid = int((left + rigth) / 2)

    if (nums[mid] == n):
      return mid
    elif nums[mid] < n:
      left = mid + 1
    else:
      right = mid

  return -1;