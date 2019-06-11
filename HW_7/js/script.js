"use strict";

function validAuthor(autoFocus) {
  var errCount = 0;
  var authorField = document.forms.form1.author;
  var authorValue = authorField.value;
  var authorErr = document.querySelector('.author-err');

  if (authorValue == "") {
    authorErr.innerHTML = "Введите автора";
    errCount++;
  } else {
    authorErr.innerHTML = "";
  }

  if (errCount && autoFocus) {
    authorField.focus();
  }
  return errCount;
}

function validTitle(autoFocus) {
  var errCount = 0;
  var titleField = document.forms.form1.title;
  var titleValue = titleField.value;
  var titleErr = document.querySelector('.title-err');

  if (titleValue == "") {
    titleErr.innerHTML = "Введите название сайта";
    errCount++;
  } else {
    titleErr.innerHTML = "";
  }

  if (errCount && autoFocus) {
    titleField.focus();
  }
  return errCount;
}

function validUrl(autoFocus) {
  var errCount = 0;
  var urlField = document.forms.form1.url;
  var urlValue = urlField.value;
  var urlErr = document.querySelector('.url-err');

  if (urlValue == "") {
    urlErr.innerHTML = "Введите адрес сайта";
    errCount++;
  } else {
    urlErr.innerHTML = "";
  }

  if (errCount && autoFocus) {
    urlField.focus();
  }
  return errCount;
}

function validStartdate(autoFocus) {
  var errCount = 0;
  var startdateField = document.forms.form1.startdate;
  var startdateValue = startdateField.value;
  var startdateErr = document.querySelector('.startdate-err');

  if (startdateValue == "") {
    startdateErr.innerHTML = "Введите дату запуска сайта";
    errCount++;
  } else {
    startdateErr.innerHTML = "";
  }

  if (errCount && autoFocus) {
    startdateField.focus();
  }
  return errCount;
}

function validPersons(autoFocus) {
  var errCount = 0;
  var personsField = document.forms.form1.persons;
  var personsValue = personsField.value;
  var personsErr = document.querySelector('.persons-err');

  if (personsValue == "") {
    personsErr.innerHTML = "Введите количество посетителей в сутки ЦИФРАМИ";
    errCount++;
  } else {
    personsErr.innerHTML = "";
  }

  if (errCount && autoFocus) {
    personsField.focus();
  }
  return errCount;
}

function validMail(autoFocus) {
  var errCount = 0;
  var mailField = document.forms.form1.mail;
  var mailValue = mailField.value;
  var mailErr = document.querySelector('.mail-err');

  if (mailValue == "") {
    mailErr.innerHTML = "Введите корректный e-mail";
    errCount++;
  } else {
    mailErr.innerHTML = "";
  }

  if (errCount && autoFocus) {
    mailField.focus();
  }
  return errCount;
}

function validRubric(autoFocus) {
  var errCount = 0;
  var rubricField = document.forms.form1.rubric;
  var rubricValue = rubricField.value;
  var rubricErr = document.querySelector('.rubric-err');


  switch (rubricValue) {
    case ('0'):
      rubricErr.innerHTML = "Вы ничего не выбрали";
      errCount++;
      break;
    case ('2'):
      rubricErr.innerHTML = "Этот раздел в разработке";
      errCount++;
      break;
    default:
      rubricErr.innerHTML = "";
  }

  if (errCount && autoFocus) {
    rubricField.focus();
  }
  return errCount;
}

function validPublik(autoFocus) {
  var errCount = 0;
  var publikField = document.forms.form1.publik;
  var publikValue = publikField.value;
  var publikErr = document.querySelector('.publik-err');

  switch (publikValue) {
    case (''):
      publikErr.innerHTML = "Вы ничего не выбрали";
      errCount++;
      break;
    case ('1'):
      publikErr.innerHTML = "Бесплатно только сыр в мышеловке";
      errCount++;
      break;
    case ('2'):
      publikErr.innerHTML = "Остались только VIP";
      errCount++;
      break;
    default:
      publikErr.innerHTML = "";
  }

  if (errCount && autoFocus) {
    publikField[2].focus();
  }
  return errCount;
}

function validComments(autoFocus) {
  var errCount = 0;
  var commentsField = document.forms.form1.comments;
  var commentsValue = commentsField.value;
  var commentsErr = document.querySelector('.comments-err');

  if (!commentsField.checked) {
    commentsErr.innerHTML = "Разрешите отзывы";
    errCount++;
  } else {
    commentsErr.innerHTML = "";
  }

  if (errCount && autoFocus) {
    commentsField.focus();
  }
  return errCount;
}

function validArticle(autoFocus) {
  var errCount = 0;
  var articleField = document.forms.form1.article;
  var articleValue = articleField.value;
  var articleErr = document.querySelector('.article-err');

  if (articleValue == "") {
    articleErr.innerHTML = "Опишите свой сайт";
    errCount++;
  } else {
    articleErr.innerHTML = "";
  }

  if (errCount && autoFocus) {
    articleField.focus();
  }
  return errCount;
}

document.forms.form1.author.onblur = function () {
  validAuthor(false);
}
document.forms.form1.title.onblur = function () {
  validTitle(false);
}
document.forms.form1.url.onblur = function () {
  validUrl(false);
}
document.forms.form1.startdate.onblur = function () {
  validStartdate(false);
}
document.forms.form1.persons.onblur = function () {
  validPersons(false);
}
document.forms.form1.mail.onblur = function () {
  validMail(false);
}
document.forms.form1.rubric.onchange = function () {
  validRubric(false);
}
document.forms.form1.publik[0].onchange = function () {
  validPublik(false);
}
document.forms.form1.publik[1].onchange = function () {
  validPublik(false);
}
document.forms.form1.publik[2].onchange = function () {
  validPublik(false);
}
document.forms.form1.comments.onchange = function () {
  validComments(false);
}
document.forms.form1.article.onblur = function () {
  validArticle(false);
}

function validAll(EO) {
  EO = EO || window.event;

  try {
    var totalErrCount = 0;
    totalErrCount += validAuthor(!totalErrCount);
    totalErrCount += validTitle(!totalErrCount);
    totalErrCount += validUrl(!totalErrCount);
    totalErrCount += validStartdate(!totalErrCount);
    totalErrCount += validPersons(!totalErrCount);
    totalErrCount += validMail(!totalErrCount);
    totalErrCount += validRubric(!totalErrCount);
    totalErrCount += validPublik(!totalErrCount);
    totalErrCount += validComments(!totalErrCount);
    totalErrCount += validArticle(!totalErrCount);

    if (totalErrCount)
      EO.preventDefault(); // если ошибки были - отменяем отправку формы на сервер
  } catch (err) {
    EO.preventDefault(); // что-то пошло не так - отменяем отправку формы на сервер
  }
}


document.forms.form1.addEventListener('submit', validAll, false);