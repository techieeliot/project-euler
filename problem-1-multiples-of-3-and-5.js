function multiplesOf3and5(number) {
    // natural numbers below the number
    const natural = number-1;
    
    // function to find the quotients and round down
    const quotientOfNum = multiple => Math.floor(natural / multiple)
    
    // function to create an array
    const findMultiplesOf = multiple => Array.from(Array(quotientOfNum(multiple))).map((entry, idx)=> (idx + 1) * multiple)
    
    // combine the lists and deduplicate
    const uniqueMultiplesOf3and5 = [...new Set([...findMultiplesOf(3), ...findMultiplesOf(5)]) ]
    
    // sum the totals
    const answer = uniqueMultiplesOf3and5.reduce((bucket, entry) => bucket + entry, 0)
    
    console.log(`Adding the multiples of 3 and 5 below ${number} equals ${answer}!`)
      return answer;
    }
    
    multiplesOf3and5(1000);