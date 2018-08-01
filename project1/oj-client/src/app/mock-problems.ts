import { Problem } from "./models/problem.model";
export const PROBLEMS: Problem[]=[
{
  id: 1,
  name: "Two Sum",
  desc: "Given an array of integers, return indices of the two numbers such that they add up to a specific target",
  difficulty:"easy"
},
{ 
  id: 2,
  name: "3Sum",
  desc: "Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.",
  difficulty:"medium"
  
},
{
  id: 3,
  name: "4Sum",
  desc: "Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.",
  difficulty:"medium"
}
];