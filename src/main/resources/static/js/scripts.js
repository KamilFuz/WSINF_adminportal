$(document).ready(function() {
    $('.delete-product').on('click', function (){
        /*<![CDATA[*/
        var path = /*[[@{/}]]*/'remove';
        /*]]>*/

        var id=$(this).attr('id');

        bootbox.confirm({
            message: "Czy jesteś pewny, że chcesz usunąć ten product",
            buttons: {
                cancel: {
                    label:'<i class="fa fa-times"></i> Anuluj'
                },
                confirm: {
                    label:'<i class="fa fa-check"></i> Potwierdź'
                }
            },
            callback: function(confirmed) {
                if(confirmed) {
                    $.post(path, {'id':id}, function(res) {
                        location.reload();
                    });
                }
            }
        });
    });

    var productIdList=[];

#('.checkboxProduct').click(function() {
        var id=$(this).attr('id');
        if(this.checked){
            productIdList.push(id);
        } else {
            productIdList.splice(productIdList.indexOf(id), 1);
        }
    })

    $('#deleteSelected').click(function() {
        /*<![CDATA[*/
        var path = /*[[@{/}]]*/'removeList';
        /*]]>*/

        bootbox.confirm({
            message: "Czy jesteś pewnyy, że chcesz usunąć zaznaczone produkty?",
            buttons: {
                cancel: {
                    label:'<i class="fa fa-times"></i> Anuluj'
                },
                confirm: {
                    label:'<i class="fa fa-check"></i> Potwierdź'
                }
            },
            callback: function(confirmed) {
                if(confirmed) {
                    $.ajax({
                        type: 'POST',
                        url: path,
                        data: JSON.stringify(productIdList),
                        contentType: "application/json",
                        success: function(res) {console.log(res); location.reload()},
                        error: function(res){console.log(res); location.reload();}
                    });
                }
            }
        });
    });

    $("selectAllProducts").click(function() {
        if($(this).prop("checked")==true) {
            $(".checkBox").click();
        } else if ($(this).prop("checked")==false) {
            $(".checkBox").click();
        }
    })
});