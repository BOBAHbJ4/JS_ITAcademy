'use strict';

var formDef1 = [{
    label: 'Название сайта:',
    kind: 'longtext',
    name: 'sitename'
  },
  {
    label: 'URL сайта:',
    kind: 'longtext',
    name: 'siteurl'
  },
  {
    label: 'Посетителей в сутки:',
    kind: 'number',
    name: 'visitors'
  },
  {
    label: 'E-mail для связи:',
    kind: 'shorttext',
    name: 'email'
  },
  {
    label: 'Рубрика каталога:',
    kind: 'combo',
    name: 'division',
    variants: [{
      text: 'здоровье',
      value: 1
    }, {
      text: 'домашний уют',
      value: 2
    }, {
      text: 'бытовая техника',
      value: 3
    }]
  },
  {
    label: 'Размещение:',
    kind: 'radio',
    name: 'payment',
    variants: [{
      text: 'бесплатное',
      value: 1
    }, {
      text: 'платное',
      value: 2
    }, {
      text: 'VIP',
      value: 3
    }]
  },
  {
    label: 'Разрешить отзывы:',
    kind: 'check',
    name: 'votes'
  },
  {
    label: 'Описание сайта:',
    kind: 'memo',
    name: 'description'
  },
  {
    label: 'Опубликовать:',
    kind: 'submit'
  },
];

var formDef2 = [{
    label: 'Фамилия:',
    kind: 'longtext',
    name: 'lastname'
  },
  {
    label: 'Имя:',
    kind: 'longtext',
    name: 'firstname'
  },
  {
    label: 'Отчество:',
    kind: 'longtext',
    name: 'secondname'
  },
  {
    label: 'Возраст:',
    kind: 'number',
    name: 'age'
  },
  {
    label: 'Зарегистрироваться:',
    kind: 'submit'
  },
];

var form1 = document.forms.form1;

var form2 = document.forms.form2;


function createForm(form, array) {
  var arr = array;
  var frm = form;

  function createInput(type) {
    var input = document.createElement('input');
    var label = document.createElement('label');
    var labelText = document.createTextNode(elem.label);

    input.type = type;

    if (input.type === 'submit') {
      delete input.name;
      input.value = elem.label;
      frm.appendChild(input);
    } else {
      input.name = elem.name;
      label.appendChild(labelText);
      frm.appendChild(label).appendChild(input);
    };
  }

  for (var i = 0; i < arr.length; i++) {
    var elem = arr[i];

    if (elem.kind === 'longtext') {
      createInput('text');

    } else if (elem.kind === 'number') {
      createInput('number');

    } else if (elem.kind === 'shorttext') {
      createInput('email');

    } else if (elem.kind === 'combo') {
      var options = elem.variants;

      var label = document.createElement('label');
      var labelText = document.createTextNode(elem.label);

      var select = document.createElement('select');
      select.name = elem.name;

      label.appendChild(labelText);
      frm.appendChild(label).appendChild(select);

      options.forEach(function (item, i, arr) {
        var option = document.createElement('option');
        var optionText = document.createTextNode(item.text);
        option.value = item.value;

        select.appendChild(option).appendChild(optionText);
      });

    } else if (elem.kind === 'radio') {
      var radioItems = elem.variants;

      var label = document.createElement('label');
      var labelText = document.createTextNode(elem.label);

      frm.appendChild(label).appendChild(labelText);

      radioItems.forEach(function (item, i, arr) {
        var input = document.createElement('input');

        var labell = document.createElement('label');
        var labellText = document.createTextNode(item.text);

        input.type = 'radio';
        input.name = elem.name;
        input.value = item.value;

        labell.appendChild(labellText);
        label.appendChild(labell).appendChild(input);
      });

    } else if (elem.kind === 'check') {
      createInput('checkbox');

    } else if (elem.kind === 'memo') {
      var label = document.createElement('label');
      var labelText = document.createTextNode(elem.label);

      var textarea = document.createElement('textarea');
      textarea.name = elem.name;

      label.appendChild(labelText);
      frm.appendChild(label).appendChild(textarea);

    } else if (elem.kind === 'submit') {
      createInput('submit');
    }
  }
}
createForm(form1, formDef1);
createForm(form2, formDef2);