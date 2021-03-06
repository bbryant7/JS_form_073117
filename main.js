// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

let formHTML = document.getElementById ('fields');

for (var i = 0; i < formData.length; i++) {
  if (formData[i].type === 'textarea'){
    let textArea = document.createElement('textarea');
    formHTML.appendChild(textArea);
    textArea.setAttribute('type', formData[i].type);
    textArea.setAttribute('placeholder', formData[i].label);
    textArea.setAttribute('id', formData[i].id);
    textArea.setAttribute('icon', formData[i].icon);
    textArea.setAttribute('cols','30');
    textArea.setAttribute('rows','30');
  }

  else if (formData[i].type === 'select'){
    let select = document.createElement('select');
    select.innerHTML = '<option value="" disabled selected hidden>Select language...</option>';
    formHTML.appendChild(select);
    select.setAttribute('type', formData[i].type);
    select.setAttribute('placeholder', formData[i].label);
    select.setAttribute('id', formData[i].id);
    select.setAttribute('icon', formData[i].icon);


    let selectOptions = formData[i].options;
      for (let b = 0; b < selectOptions.length; b++) {
        let option = document.createElement('option');
        select.appendChild(option);
        option.setAttribute('value', selectOptions[b].value);
        option.setAttribute('label',  selectOptions[b].label);


    }
}
  else {
    let input = document.createElement('input');
    formHTML.appendChild(input);
    input.setAttribute('type', formData[i].type);
    input.setAttribute('placeholder', formData[i].label);
    input.setAttribute('id', formData[i].id);
    input.setAttribute('icon', formData[i].icon);

  }
  }


  // WORKING ON FORM OPTIONS DOWN HERE :). Trying to make this for loop situation work
