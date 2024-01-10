// input `5.5.5` output=> 5[.]5[.]5

const solution_3_4 = (str: any): string => str.replaceAll(".", "[.]")


console.log(solution_3_4("5.5.5"));
