setTimeout(function () {
    $('#mainimg').vegas({
        slides: [
            { src: 'https://a-chaaa.github.io/rinakoteikoku/ひょーし.png' },	//1枚目の写真指定
            { src: 'https://a-chaaa.github.io/rinakoteikoku/36.png' },	//2枚目の写真指定
            { src: 'https://a-chaaa.github.io/rinakoteikoku/torekaaa.png' },	//3枚目の写真指定
	    { src: 'https://a-chaaa.github.io/rinakoteikoku/ななな.png' },
        ],
		/*overlay: true,*/			//写真上にドットを重ねる。不要ならこの１行を削除して下さい。
		transition: 'fade',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		/*animation: 'kenburns',*/	//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
		delay: 3000,			//次の画像を表示するまでの時間
		animationDuration: 20000,	//アニメーション間の引き継ぎタイミング。
    });
}, 3000);	//3秒遅れてスライドショーがスタート
