'use strict';

function Horns(data) {
  this.image_url = data.image_url;
  this.title = data.title;
  this.description = data.description;
  this.keyword = data.keyword;
  this.horns = data.horns;
  Horns.all.push(this);
}
Horns.all = [];

Horns.prototype.render = function() {

  // Create a new empty div tag
  let hornOutput = $('<div></div>');
      hornOutput.addClass(this.keyword);

  // clone (copy) the html from inside the photo-template
  let template = $('#photo-template').html();

  // Add the template to the output div
  hornOutput.html( template );

  // Put the data in
  hornOutput.find('h2').text( this.title );
  hornOutput.find('img').attr('src', this.image_url);
  hornOutput.find('p').text(this.description);

  $('main').append(hornOutput);

};

function populateSelectBox() {
  let seen = {};
  let select = $('select');
  Horns.all.forEach( (horn) => {
    if ( ! seen[horn.keyword] ) {
      let option = `<option value="${horn.keyword}">${horn.keyword}</option>`;
      select.append(option);
      seen[horn.keyword] = true;
    }
  });

  console.log(seen);
}

$('select').on('change', function() {
  let selected = $(this).val();
  $('div').hide();
  $(`.${selected}`).fadeIn(800);
});

$.get('../data/page-1.json')
  .then( data => {
    data.forEach( (thing) => {
      let horn = new Horns(thing);
      horn.render();
    });
  })
  .then( () => populateSelectBox() );
  .then(() => {sortByTitle(ItemAll)
  };
  .then(render);
}

  function sortByTitle(array) {
    array.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      else if (a.title < b.title) {
        return -1;
      }
      else {return 0;}
    });
  }
  
  function sortByHorns(array) {
   
   array.sort((a, b) => a.horns - b.horns);
  
  }
  
  
  
  readData(); 
  
  $('select').on('change', function(){
    let $select = $(this).val();
    $('div').hide();
    $(`div[data-keyword="${$select}"]`).show();
  });
  
  $('button[value="page1"]').on('click', () => {
    readData('page-1');
  });
  $('button[value="page2"]').on('click', () => {
    readData('page-2');
  });
  
  $('button[value="sortKeyword"]').on('click', () => {
    $('main').html('');
    sortByTitle(ItemAll);
    render();
  });
  $('button[value="sortKeyword2"]').on('click', () => {
    $('main').html('');
      sortByHorns(ItemAll);
      render();
  
  });