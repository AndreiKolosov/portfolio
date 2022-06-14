const countFullAge = (yyyy, m, d) => {
  let age; //Возраст
  let now = new Date(); //Текущя дата
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
  let dob = new Date(yyyy, m, d); //Дата рождения в формате ~ 2000 6 25
  let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году

  //Возраст = текущий год - год рождения
  age = today.getFullYear() - dob.getFullYear();
  //Если ДР в этом году ещё предстоит, то вычитаем из age один год
  if (today < dobnow) {
    age = age - 1;
  }

  return age;
};

export { countFullAge };
