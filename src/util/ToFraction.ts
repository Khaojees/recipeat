const vulgarFraction: { [key: string]: (string | number)[] } = {
      "1/4":["&#188;",0.25],
      "1/2":["&#189;",0.50],
      "3/4":["&#190;",0.75],
      "1/7":["&#8528;",0.1428571429.toFixed(2)],
      "1/9":["&#8529;",0.1111111111.toFixed(2)],
      "1/10":["&#8530;",0.10],
      "1/3":["&#8531;",0.3333333333.toFixed(2)],
      "2/3":["&#8532;",0.6666666667.toFixed(2)],
      "1/5":["&#8533;",0.20],
      "2/5":["&#8534;",0.40],
      "3/5":["&#8535;",0.60],
      "4/5":["&#8536;",0.80],
      "1/6":["&#8537;",0.1666666667.toFixed(2)],
      "5/6":["&#8538;",0.8333333333.toFixed(2)],
      "1/8":["&#8539;",0.125.toFixed(2)],
      "3/8":["&#8540;",0.375.toFixed(2)],
      "5/8":["&#8541;",0.625.toFixed(2)],
      "7/8":["&#8542;",0.875.toFixed(2)],
}


export const findVulgarFraction=(num:number)=>{
      let left = Math.floor(num)
      let decimal = (num-Math.floor(num)).toFixed(2)
      // console.log(left,decimal)
      const entityCode = Object.keys(vulgarFraction).filter((item)=>{
            // console.log(vulgarFraction[item][1], ' and ', decimal)
            return  vulgarFraction[item][1] == decimal      
      }).map((e)=>{
            return vulgarFraction[e][0]
      })
      // console.log(entityCode)
      if(decimal === "0.00"){
            return `${num.toFixed(0)}`
      }
      else if(entityCode.length === 0){
            return `${num.toFixed(2)}`
      }
      else if(left === 0){
            return `${entityCode}`
      }
      else if(entityCode.length > 0){
            return `${left}${entityCode}`
      }      
}