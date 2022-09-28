// Javascript Datatypes

function ShowValue()
{
    var liValues='';
    for(var i=1;i<5;i++)
    {
        
        //console.log(i);
        liValues=liValues+'<li>'+i+'</li>';
    }
    document.getElementById('values').innerHTML=liValues;
}

// for (let i = 0; i < 5; i++) {
//     console.log(i);    
// }
console.log(ShowValue());

 //Calling