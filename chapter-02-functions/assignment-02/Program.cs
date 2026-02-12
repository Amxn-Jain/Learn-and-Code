using System;
using SubarrayMean.Services;

namespace SubarrayMean
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] counts = Array.ConvertAll(Console.ReadLine().Split(' '), int.Parse);
            int totalElements = counts[0];
            int totalQueries = counts[1];

            long[] arrayElements = Array.ConvertAll(Console.ReadLine().Split(' '), long.Parse);

            var subarrayMeanCalculator = new SubarrayMeanCalculator(arrayElements);

            for (int queryNumber = 0; queryNumber < totalQueries; queryNumber++)
            {
                int[] queryBounds = Array.ConvertAll(Console.ReadLine().Split(' '), int.Parse);
                int startIndex = queryBounds[0];
                int endIndex = queryBounds[1];

                long floorMean = subarrayMeanCalculator.CalculateFloorMean(startIndex, endIndex);
                Console.WriteLine(floorMean);
            }
        }
    }
}