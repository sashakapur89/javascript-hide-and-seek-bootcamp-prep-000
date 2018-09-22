function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  var elem = document.getElementById('nested');
  return elem.querySelector('.target');
}

function increaseRankBy(n){
  const rank = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for(let i=0; i<rank.length; i++){
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + parseInt(n);
  }
}

function deepestChild(){
    var insert = 'div div';
    var clause = insert
    var array = document.getElementById('grand-node').querySelectorAll(clause)
    while (array.length>0){
      insert = insert + ' div';
    }
    return array.innerHTML;
}