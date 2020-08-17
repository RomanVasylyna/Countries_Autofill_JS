
function start() {
document.querySelector('input').addEventListener('keyup', runAutofill);
}


//Autofill function
function runAutofill() {
    //Clearing Uls
    deleteUl();

    //Defining Elements
    let arr = countriesArr();

    //Return First Letter Match
    let newArr = arr.filter(elem => {
    return elem.includes(this.value);
    });

    //Creating Individual Uls
    for(let i = 0; i < newArr.length; i++) {
    createUl(this, newArr[i]);
    }


   //If empty
   checkEmpty();


}


//If input is empty - delete all uls
function checkEmpty() {
if(document.querySelector('input').value == '') deleteUl();
}


//Create Dropdown Ul
function createUl(thisElem, arrElem) {
  let ul = document.createElement('ul');
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  ul.classList.add('list-group', 'w-25');
  let li = document.createElement('li');
  li.classList.add('list-group-item');
  span1.innerHTML = `<strong>${arrElem.substr(document.querySelector('input').value, document.querySelector('input').value.length)}<strong/>`;
  span2.innerHTML = `${arrElem.substr(document.querySelector('input').value.length, )}`;
  li.appendChild(span1);
  li.appendChild(span2);
  li.addEventListener('click', addText);
  ul.appendChild(li);
  thisElem.parentElement.appendChild(ul);
}

//Delete Already Created Uls
function deleteUl() {
let lis = document.querySelectorAll('li');
for(let i = 0; i < lis.length; i++) {
lis[i].parentElement.remove();
}
}

//Adding text to input
function addText() {
document.querySelector('input').value = this.innerHTML;
deleteUl();
}

//Array with countries
function countriesArr() {
  var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  return countries;
}
