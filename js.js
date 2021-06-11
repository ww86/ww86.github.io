


var update = function () {

  losangeles = moment.tz("America/Los_Angeles");
  newyork = moment.tz("America/New_York");
  greenwich = moment.tz("Europe/Greenwich");
  paris = moment.tz("Europe/Paris");
  helsinki = moment.tz("Europe/Helsinki");
  moscow = moment.tz("Europe/Moscow");
  delhi = moment.tz("Asia/Delhi");
  beijing = moment.tz("Asia/Beijing");
  tokyo = moment.tz("Asia/Tokyo");
  sydney = moment.tz("Australia/Sydney");


  $('.losangeles').html(losangeles.format('hh:mm a'));

  $('.newyork').html(newyork.format('hh:mm a'));

  $('.greenwich').html(greenwich.format('hh:mm a'));

  $('.paris').html(paris.format('hh:mm a'));

  $('.helsinki').html(helsinki.format('hh:mm a'));

  $('.moscow').html(moscow.format('hh:mm a'));

  $('.delhi').html(delhi.format('hh:mm a'));

  $('.beijing').html(beijing.format('hh:mm a'));

  $('.tokyo').html(tokyo.format('hh:mm a'));

  $('.sydney').html(sydney.format('hh:mm a'));

};

$(function(){
  update();
  setInterval(update, 30000);
});