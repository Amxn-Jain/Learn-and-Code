using System;

namespace SubarrayMean.Services
{
    public class SubarrayMeanCalculator
    {
        private readonly long[] cumulativeSums;

        public SubarrayMeanCalculator(long[] numbers)
        {
            int arrayLength = numbers.Length;
            cumulativeSums = new long[arrayLength + 1];
            cumulativeSums[0] = 0;

            for (int elementIndex = 1; elementIndex <= arrayLength; elementIndex++)
            {
                cumulativeSums[elementIndex] = cumulativeSums[elementIndex - 1] + numbers[elementIndex - 1];
            }
        }

        public long CalculateFloorMean(int startIndex, int endIndex)
        {
            long subarraySum = cumulativeSums[endIndex] - cumulativeSums[startIndex - 1];
            long subarrayLength = endIndex - startIndex + 1;
            return subarraySum / subarrayLength;
        }
    }
}