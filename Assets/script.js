
$('#currentDay').text(moment().format('dddd') + ', ' + moment().format('MMMM Do YYYY'))
let timeInterval = setInterval(colorTimer, 10000)
for (i = 0; i < localStorage.length; i++) {
  $("#" + localStorage.key(i) + ' .description').val(localStorage.getItem(localStorage.key(i)))
}

$('.saveBtn').on('click', function () {
  let input = $(this).siblings('.description').val()
  let time = $(this).parent().attr('id')
  localStorage.setItem(time, input)
})

function colorTimer() {
  let currentTime = moment().hours()
  for (i = 9; i < ($('.time-block').length + 9); i++) {
    let tmBlock = $('#hour-' + i).children('.description')
    tmBlock.removeClass('past')
    tmBlock.removeClass('present')
    tmBlock.removeClass('future')
    tmBlock.removeClass('placeholder')
    
    if (currentTime === i) {
      tmBlock.addClass('present')
      tmBlock.attr('placeholder')
    } else if (currentTime > i) {
      tmBlock.addClass('past')
    } else {
      tmBlock.addClass('future')
    }
  }
  
}
colorTimer()
