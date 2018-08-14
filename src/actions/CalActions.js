export function showCals(arr, year){
      //console.log(arguments);
      let cals = formatInput(arr, year);
      
      return {"type": "UPDATE_CAL", cals};
}

function formatInput(arr, year){
    let weekdays = [];
    arr.map((el) => {
        debugger;
        let date_arr = el.birthday.split('/');
        let y = year?year:date_arr[2];
        let d = new Date(y+"/"+date_arr[0]+"/"+date_arr[1]);
        //console.log('day: ', d.getDay());
        if(!weekdays[d.getDay()]) weekdays[d.getDay()] = []; 
        weekdays[d.getDay()].push({name:el.name.slice(0,2).toUpperCase(), time: d.getTime()});
    });

    weekdays.map(el => {
        el.sort((x,y) => {
           return x.time > y.time ? 1 : 0;
        })  
    });
    for(let i=0; i<7; i++) if(!weekdays[i]) weekdays[i] = [];
    return weekdays;
}