//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var classDivOne = document.getElementsByClassName('navi');

for (i=0;i<classDivOne.length;i++){
    classDivOne[i].addEventListener('click',showHidden);
}

function showHidden(){
    var x = this.querySelectorAll('.inner')[0];
    if(x.style.display === 'block'){
        x.style.display = 'none';
    }else{
        x.style.display = 'block';
    }
}


/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var classDivTwo = document.getElementsByClassName('name');

for(j=0;j<classDivTwo.length;j++){
classDivTwo[j].addEventListener('click', showSecret);
}
function showSecret(){
    var y = this.querySelectorAll('.menu')[0];
    if (y.style.display === 'none'){
        y.style.display = 'block';
    }else{
        y.style.display = 'none';
    }

}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var three = document.getElementsByClassName('thumb');

for(i=0;i<three.length;i++){
three[i].addEventListener('click', down);
var counter = document.createElement('div');
counter.className = 'dislikes';
counter.innerHTML = 0;
three[i].appendChild(counter);

}

function down(){
var x = this.querySelectorAll('.dislikes')[0];
x.innerHTML++;
}
