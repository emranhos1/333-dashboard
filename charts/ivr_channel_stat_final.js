
function chart_change(indicator_id, chart_type = 'column', from_date = '', to_date = '', type = '') {
    if (from_date == '' && to_date == '') {
        let dates = $('.active input[name=options]').val();
        dates = dates.toString();
        const date = dates.split(",", 2);
        from_date = date[0];
        to_date = date[1];
    }
    $("#running_indicator").val(indicator_id);
    $('#indicator_list_drop').val(indicator_id);
    $("#running_graph").val(chart_type);
    $("#running_from_date").val(from_date);
    $("#running_to_date").val(to_date);

    let specFlag = document.getElementById('specific-value').value;

    const [division_bbs_code, district_bbs_code, upazila_bbs_code, geo_name] = getSelectedGeoAndBbsCode();

    //ajax
    let point_str = [];
    let target_str = [];
    let category_str = [];

    let details = "<thead><tr>" + "<th class='text-center'> তারিখ </th>" + "<th class='text-center'> অর্জন </th>" + "<th class='text-center'>পরিবর্তনের হার</th>" + "</tr></thead>";
    $.ajax({
        url: "http://172.16.12.100/test_json.php",
        data: {
            "indicator_id": indicator_id,
            "from_date": from_date,
            "to_date": to_date,
            "geo_name": geo_name,
            "division_bbs_code": division_bbs_code,
            "district_bbs_code": district_bbs_code,
            "upazila_bbs_code": upazila_bbs_code,
            "type": type,
            "specFlag": specFlag
        },
        success: function (response) {
            const parsed = response;
            const indicator_name = parsed['indicator_name'];
            const unit = parsed['unit'];
            const project_name = parsed['project_name'];
            let loop_data = parsed['point_data'];
            loop_data.forEach(function (element) {
                point_str.push(element.data);
                category_str.push(element.date);
                target_str.push(element.target_data);
            });

            //change the right portion
            $("#indicator_name_details").html(indicator_name);
            loop_data = parsed['details_data'];
            let data_length = loop_data.length;
            details += "";
            if (data_length > 0) {
                data_length--;

                let pre_val;
                let post_val;

            }
            $("#progress_report").val(details);
            $("#progress_report").attr('data-val', indicator_name);


            $("#details_data_portion").html();
            $("#details_data_portion").html(details);

            //progress
            $("#progress_header_title").html();
            $("#progress_header_title").html(indicator_name);

            $("#progress_title").html();
            $("#progress_title").html(parsed['progress']['title']);

            if (parseInt(parsed['progress']['pve']) == 1) {
                $("#progress_value").removeClass("text-danger");
                $("#progress_value").addClass("text-success");
            } else {
                $("#progress_value").removeClass("text-success");
                $("#progress_value").addClass("text-danger");
            }

            $("#progress_value").html();

            //different graph option
            $('#different_chart_option').html("");

            var different_chart_option = "";
            var default_chart = parsed['default_chart'];
            loop_data = parsed['chart'];
            loop_data.push(default_chart);
            var chart_list = parsed['chart_list'];
            data_length = loop_data.length;
            if (data_length > 1) {
                data_length--;
            }
            for (i = data_length; i >= 0; i--) {
                different_chart_option += '<label class="btn btn-xs btn-primary" onclick="different_chart_change(\'' + chart_list[loop_data[i]] + '\');">';
                different_chart_option += '<input type="radio" name="options" id="option2">';
                if (loop_data[i] == '3') {
                    different_chart_option += '<i class="fa fa-bar-chart other_chart" aria-hidden="true" id="other_chart" onclick="different_chart_change(\'' + chart_list[loop_data[i]] + '\');"></i>';
                } else {
                    different_chart_option += '<i class="fa fa-' + chart_list[loop_data[i]] + '-chart other_chart" aria-hidden="true" id="other_chart" onclick="different_chart_change(\'' + chart_list[loop_data[i]] + '\');"></i>';
                }
                different_chart_option += '</label>';
            }
            $('#different_chart_option').html(different_chart_option);

        },
        error: function (xhr) {
            $("#indicator_wise_raw_data").html('কোনো ডাটা নেই');
        }
        //
    });
    //end ajax

    event.preventDefault();
    // make_chart_for_indicator();
}

function onclick_date(from_date, to_date, type = '') {
    var running_indicator = $("#running_indicator").val();
    var running_graph = $("#running_graph").val();
    let indicator_user_category = $('.active input[name=user_section]').val();
    different_charts(running_indicator, running_graph, from_date, to_date, indicator_user_category, type);
}


// <!-- line chart js important 2 done-->

//Line chart data get multiple and single
function indicator_wise_line_data(running_indicator) {
    const selected = $("#indicator-id-" + running_indicator).hasClass('clicked');
    if (!selected) {
        const running_from_date = $("#running_from_date").val();
        const running_to_date = $("#running_to_date").val();

        const type = $('.active input[name=options]').attr('data-val');

        get_line_chart_data(running_indicator, running_from_date, running_to_date, type)
    } else {
        $("#indicator-id-" + running_indicator).removeClass('indi-hover clicked');
        let ind_name = $("#indicator-id-" + running_indicator).attr('data-value');
        remove_line_from_chart(ind_name);
    }
}

function get_line_chart_data(indicator_id, from_date, to_date, type = '') {
    $("#running_indicator").val(indicator_id);
    $("#running_from_date").val(from_date);
    $("#running_to_date").val(to_date);

    let specFlag = document.getElementById('specific-value').value;

    const [division_bbs_code, district_bbs_code, upazila_bbs_code, geo_name] = getSelectedGeoAndBbsCode();

    const point_str = [];
    const date_str = [];
    $.ajax({
        url: "http://172.16.12.100/test_json.php",
        data: {
            "indicator_id": indicator_id,
            "from_date": from_date,
            "to_date": to_date,
            "geo_name": geo_name,
            "division_bbs_code": division_bbs_code,
            "district_bbs_code": district_bbs_code,
            "upazila_bbs_code": upazila_bbs_code,
            "type": type,
            "specFlag": specFlag
        },
        success: function (response) {
            const parsed = response;

            let loop_data = parsed['point_data'];
            loop_data.forEach(function (element) {
                point_str.push(element.data);
                date_str.push(element.date);
            });

            if ($(".indicator-name").hasClass('indi-hover clicked')) {
                make_multiple_line_chart(point_str, parsed['indicator_name'])
            } else {
                make_line_chart(point_str, date_str, parsed['indicator_name'])
            }

            $("#indicator-id-" + indicator_id).addClass('indi-hover clicked');
        },
        error: function (xhr) {
        }
    });
}

let lineChart = '';

function make_line_chart(point_str, date_str, ind_name) {
    const config = {
        type: 'line',
        data: {
            labels: date_str,
            datasets: [{
                label: ind_name,
                backgroundColor: 'rgba(34, 167, 240, 1)',
                borderColor: 'rgba(34, 167, 240, 1)',
                fill: false,
                data: point_str

            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    grid: {
                        color: 'rgba(128,151,177, 0.3)',
                        borderDash: [3, 3],
                        drawTicks: false,
                        borderColor: '#424b5f',
                    },
                },
                x: {
                    grid: {
                        color: 'rgba(128,151,177, 0.3)',
                        borderDash: [3, 5],
                        drawTicks: false,
                        borderColor: '#424b5f'
                    },
                }
            },
            plugins: {
                legend: {
                    display: true
                },
                tooltip: {
                    usePointStyle: true,
                },
                zoom: {
                    zoom: {
                        wheel: {
                            enabled: true,
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: 'x',
                    },
                    pan: {
                        enabled: true,
                        mode: 'x',
                    },
                    limits: {
                        x: {
                            minRange: 3
                        },
                    },
                }
            }
        }
    };

    if (lineChart) lineChart.destroy(); //destroy prev chart instance
    const ctx2 = document.getElementById('line-canvas').getContext('2d');

    lineChart = new Chart(ctx2, config);
}

function make_multiple_line_chart(point_str, ind_name) {
    const color = '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    const newDataset = {
        label: ind_name,
        backgroundColor: color,
        borderColor: color,
        data: point_str,
        fill: false,
    };
    lineChart.data.datasets.push(newDataset);
    lineChart.update();
}

function remove_line_from_chart(label) {
    let dataset = lineChart.data.datasets;
    $.each(dataset, function (key, value) {
        if (value) {
            if (value.label.toString() == label.toString()) {
                dataset.splice(key, 1);
            }
        }
    });
    lineChart.update();
}

function deselectAllLineData(indicator_lists) {
    indicator_lists.map((item) => {
        $("#indicator-id-" + item.id).removeClass('indi-hover clicked');
        let ind_name = $("#indicator-id-" + item.id).attr('data-value');
        remove_line_from_chart(ind_name);
    });
}

$('#exportCompareLineChart').click(function (event) {
    /* save as image */
    let link = document.createElement('a');
    link.href = lineChart.toBase64Image();
    link.download = 'lineChart.png';
    link.click();
});


// <!-- important 3 done-->

function getSelectedGeoAndBbsCode() {
    let division_bbs_code;
    let district_bbs_code;
    let upazila_bbs_code;
    let geo_name;

    let division_value = $('#divisions_data').val();
    let district_value = $('#districts_data').val();
    let upazila_value = $('#upazilas_data').val();

    if (district_value == 'জেলা') {
        district_value = undefined;
    }

    if (upazila_value == 'উপজেলা') {
        upazila_value = undefined;
    }

    if (division_value) {
        division_bbs_code = division_value;
        geo_name = 'division'
    }

    if (division_value && district_value) {
        district_bbs_code = district_value;
        geo_name = 'district'
    }

    if (division_value && district_value && upazila_value) {
        upazila_bbs_code = upazila_value;
        geo_name = 'upazila'
    }

    return [division_bbs_code, district_bbs_code, upazila_bbs_code, geo_name];
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});


// <!-- important  4-->

$(document).ready(function () {
    let indicator_id = $('#first_indicator').val();
    let chart_type = $('#first_chart_type').val();
    $('#indicator_list_drop').val(indicator_id);
    let current_date = '2023-01-09';
    let previos_date = '2022-02-01';
    $("#running_from_date").val(previos_date);
    $("#running_to_date").val(current_date);

    let indicator_user_category = '';
    indicator_user_category = 'received_call';

    different_charts(indicator_id, chart_type, previos_date, current_date, indicator_user_category);

    let geo_type = $('#indicator_list_drop').find(":selected").attr("data-val");
    if (geo_type == 0) {
        $("#divisions_data").val('').trigger('change');
        $("#districts_data").empty().append('<option>জেলা</option>');
        $("#upazilas_data").empty().append('<option>উপজেলা</option>');
        $('.geo_class').attr('disabled', 'disabled')
    }

    $('#divisions_data').on('change', function () {
        let geo_type = $('#indicator_list_drop').find(":selected").attr("data-val");
        let division_bbs_code = $('#divisions_data').val();
        let indicator_id = $('#indicator_list_drop').val();
        let running_graph = $("#running_graph").val();
        let indicator_user_category = $('.active input[name=user_section]').val();
        let dates = $('.active input[name=options]').val();
        dates = dates.toString();
        const date = dates.split(",", 2);
        if (division_bbs_code != '') {
            $.ajax({
                type: "get",
                url: "https://dashboard.a2i.gov.bd/ajax/get-districts-for-division",
                data: {
                    'bbs_code': division_bbs_code
                }
            }).done(function (resp) {
                if (geo_type == '2' || geo_type == '3') {
                    var option = '<option>জেলা</option>';
                    $.each(resp, function (key, row) {
                        option += '<option value="' + key + '">' + row + '</option>'
                    });
                    $("#districts_data").empty();
                    $("#upazilas_data").empty().append('<option>উপজেলা</option>');
                    $("#districts_data").append(option);
                } else {
                    $('#districts_data').select2("enable", false)
                    $('#upazilas_data').select2("enable", false)
                }
                different_charts(indicator_id, running_graph, date[0], date[1], indicator_user_category)
            })
        } else {
            different_charts(indicator_id, running_graph, date[0], date[1], indicator_user_category);
            $('#districts_data').empty().select2({
                'enable': false,
                'placeholder': "জেলা"
            });
            $("#upazilas_data").empty().select2({
                'enable': false,
                'placeholder': "উপজেলা"
            })
        }
    });

    $('#districts_data').on('change', function () {
        // let division_bbs_code = $('#divisions_data').val();
        let district_bbs_code = $('#districts_data').val();
        let indicator_id = $('#indicator_list_drop').val();
        let geo_type = $('#indicator_list_drop').find(":selected").attr("data-val");
        let running_graph = $("#running_graph").val();
        let indicator_user_category = $('.active input[name=user_section]').val();
        let dates = $('.active input[name=options]').val();
        dates = dates.toString();
        const date = dates.split(",", 2);

        if (district_bbs_code != 'জেলা') {
            $.ajax({
                type: "get",
                url: "https://dashboard.a2i.gov.bd/ajax/get-upazilas-for-district",
                data: {
                    'bbs_code': district_bbs_code
                }
            }).done(function (resp) {
                if (geo_type == '3') {
                    var option = '<option>উপজেলা</option>';
                    $.each(resp, function (key, row) {
                        option += '<option value="' + key + '">' + row + '</option>'
                    });
                    $("#upazilas_data").empty();
                    $("#upazilas_data").append(option);
                } else {
                    $('#upazilas_data').select2("enable", false)
                }
                different_charts(indicator_id, running_graph, date[0], date[1], indicator_user_category)
            })
        } else {
            $("#divisions_data").trigger('change');
            $('#districts_data').empty().select2({
                'enable': false,
                'placeholder': "জেলা"
            })
        }
    });

    $('#upazilas_data').on('change', function () {
        let upazila_bbs_code = $('#upazilas_data').val();
        let indicator_id = $('#indicator_list_drop').val();
        let running_graph = $("#running_graph").val();
        let indicator_user_category = $('.active input[name=user_section]').val();

        let dates = $('.active input[name=options]').val();
        dates = dates.toString();
        const date = dates.split(",", 2);

        if (upazila_bbs_code != 'উপজেলা') {
            different_charts(indicator_id, running_graph, date[0], date[1], indicator_user_category)
        } else {
            $("#districts_data").trigger('change');
            $("#upazilas_data").empty().select2({
                'enable': false,
                'placeholder': "উপজেলা"
            })
        }
    });

});


// <!-- important  5  done-->

function different_charts(indicator_id, chart_type, from_date = '', to_date = '', indicator_user_category = '', type = '') {
    if (from_date == '' && to_date == '') {
        let options = $('.active input[name=options]');
        type = options.attr('data-val');
        let dates = options.val();
        if (type == 'likeWise') {
            dates = $("#chart_date_val_on_click_calender").val();
        }
        dates = dates.toString();
        let date = dates.split(",", 2);
        from_date = date[0];
        to_date = date[1];
    }
    chart_change(indicator_id, chart_type, from_date, to_date, type);

    $(".indicator-name").removeClass('indi-hover clicked');
    get_line_chart_data(indicator_id, from_date, to_date, type);

}
