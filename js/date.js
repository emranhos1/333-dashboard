$(function () {

  var dateRanges = [
    { id: 'reportrange1', startDate: moment().subtract(7, 'days'), endDate: moment() },
    { id: 'reportrange2', startDate: moment().subtract(7, 'days'), endDate: moment() },
    { id: 'reportrange3', startDate: moment().subtract(7, 'days'), endDate: moment() },
    { id: 'reportrange4', startDate: moment().subtract(7, 'days'), endDate: moment() },
    { id: 'reportrange5', startDate: moment().subtract(7, 'days'), endDate: moment() },
    { id: 'reportrange6', startDate: moment().subtract(7, 'days'), endDate: moment() },
    { id: 'reportrange7', startDate: moment().subtract(7, 'days'), endDate: moment() },
    { id: 'reportrange8', startDate: moment().subtract(7, 'days'), endDate: moment() },
  ];

  function cb(start, end) {
    $(this.element).find('span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  }

  dateRanges.forEach(function (range) {
    $('#' + range.id).daterangepicker({
      startDate: range.startDate,
      endDate: range.endDate,
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
    }, cb);

    cb.call({ element: document.getElementById(range.id) }, range.startDate, range.endDate);
  });

});
