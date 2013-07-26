$(function(){

var searchGelande = {
        setDefaultTodofuken: '<option value="">--都道府県--</option>',
        setDefaultGelande: '<option value="">選択しない</option>',
        init: function(){
                var $init_chiho_id = $('#set_chiho_id').val();
                var $init_todofuken_id = $('#set_todofuken_id').val();
                var $init_gelande_id = $('#set_gelande_id').val();
                if($init_chiho_id){
                        searchGelande.setArea('chiho',$init_chiho_id);
                        searchGelande.setGelande('todofuken',$init_todofuken_id);
                        setTimeout(function(){
                                $('#chihoForm').val($init_chiho_id);
                                $('#todofukenForm').val($init_todofuken_id);
                                $('#gelandeForm').val($init_gelande_id);
                        },100);
                }
        },
        setArea: function(t,c){
                $.ajax({
                        url : 'http://snoway.jp/api/search_area.php',
                        type : 'GET',
                        data: {
                                t: t,
                                c: c
                        },
                        dataType: "json",
                        success : function(data){
                                data = eval(data);
                                var source = searchGelande.setDefaultTodofuken;
                                for(i=0;i<data.item.length;i++){
                                        source += '<option value="' + data.item[i].todofuken_id + '">' + data.item[i].todofuken_name + '</option>';
                                }
                                $('#todofukenForm').html(source);
                        }
                });
        },
        setGelande: function(t,c){
                $.ajax({
                        url: 'http://snoway.jp/api/search_gelande.php',
                        type: 'GET',
                        data: {
                                t: t,
                                c: c
                        },
                        dataType: 'json',
                        success: function(data){
                                data = eval(data);
                                var source = searchGelande.setDefaultGelande;
                                for(i=0;i<data.item.length;i++){
                                        source += '<option value="' + data.item[i].gelande_id + '">' + data.item[i].name + '</option>';
                                }
                                $('#gelandeForm').html(source);
                                $('#count').html(data.item.length + '件のゲレンデが見つかりました');
                        }
                });
        },
        resetTodofuken: function(){
                $('#todofukenForm').html(searchGelande.setDefaultTodofuken);
        },
        resetGelande: function(){
                $('#gelandeForm').html(searchGelande.setDefaultGelande);
                $('#count').empty();
        }
}

	searchGelande.init();

        $('#chihoForm').change(function(){
                $chiho_id = $(this).val();
                if($chiho_id){
                        searchGelande.setArea('chiho',$chiho_id);
                        searchGelande.setGelande('chiho',$chiho_id);
                }else{
                        searchGelande.resetTodofuken();
                        searchGelande.resetGelande();
                }
        });
        $('#todofukenForm').change(function(){
                $chiho_id = $('#chihoForm').val();
                $todofuken_id = $(this).val();
                if($todofuken_id){
                        searchGelande.setGelande('todofuken',$todofuken_id);
                }else if($chiho_id){
                        searchGelande.setGelande('chiho',$chiho_id);
                }else{
                        searchGelande.resetGelande();
                }
        });

});
