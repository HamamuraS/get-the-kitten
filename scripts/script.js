/*

Author: Santiago Ezequiel Hamamura

*/

let kitten = document.getElementById("cat1");

function randomBetween(min, max){
    return Math.random() * (max-min) + min;
}

function randomIntBetween(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function distance(vec1, vec2){
    return Math.sqrt(Math.pow(vec2[0]-vec1[0], 2)+Math.pow(vec2[1]-vec1[1], 2));
}

function actualPosition(){
    const position = [
        kitten.style.top.slice(0, kitten.style.top.length-1),
        kitten.style.left.slice(0, kitten.style.left.length-1)
    ]
    return position;
}

const audios = document.getElementsByTagName("audio");

kitten.addEventListener("mouseover", function() {

    const actual_position = actualPosition();

    let new_position=[0,0];

    do {
        
        new_position[1] = randomBetween(20,80);
        new_position[0] = randomBetween(0,90);

    } while (distance(actualPosition, new_position)<60);

    kitten.style.top = new_position[1]+'%';
    kitten.style.left = new_position[0]+'%';    

        //he'll cry pls stop :(
    audios[randomIntBetween(0, audios.length-1)].play();

});