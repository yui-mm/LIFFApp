$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 参加人数分の氏名欄を生成
    $('#form-number').click(function () {
        $('#form-name').empty();
        var num = $('input[name="number"]:checked').val();
        for (i = 0; i < num; i++) {
            $('#form-name').append(
                `<input class="form-control w-100 mt-1" name="name" maxlength="10">`
            );
        }
    });

    // 送信
    $('form').submit(function () {
        var number = $('input[name="number"]:checked').val();
        var comment = '';
        $('#form-name').children().each(function (i, elm) {
            comment += $(elm).val() + '、';
        })
        comment = comment.slice(0, -1);

        var msg = `癒されたにゃ!!\nお気に入り度：${number}にゃ!\nコメント：${comment}`;
        sendText(msg);

        return false;
    });
});