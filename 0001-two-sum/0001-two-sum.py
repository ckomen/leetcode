class Solution:
    def twoSum(self, nums, target):
        """
        Find two numbers such that they add up to a specific target.

        Args:
        nums: List[int] - Array of integers
        target: int - Target sum

        Returns:
        List[int] - Indices of the two numbers
        """
        # Create a hash map to store the indices of elements
        num_map = {}

        # Iterate through the array
        for i, num in enumerate(nums):
            # Calculate the complement
            complement = target - num

            # Check if the complement is already in the hash map
            if complement in num_map:
                return [num_map[complement], i]

            # Add the current number and its index to the hash map
            num_map[num] = i
