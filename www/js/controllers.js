angular.module('app.controllers', [])

	.controller('chronicleCtrl', function ($scope, $state) {


		window.scope = $scope;

		$scope.goToDetails = function (id) {
			$state.go('tabsController.chronicleDetails', {id: id});
		};

		// FAKE CONTENT FOR THE DEMO
		$scope.timeline = [
			{
				id: 1,
				date: '5 снежня',
				title: "Лозунг БНР",
				author: "",
				text: "Лозунг БНР упершыню прагучаў у 1917, у прыватнасці на Усебеларускім з'ездзе (кангрэсе) у Мінску. Незалежніцкія настроі ў беларускім руху ў значнай ступені былі выкліканы палітыкай Часовага ўрада Расіі, які не хацеў лічыцца з патрабаваннямі беларускіх арганізацый аб наданні Беларусі статуса аўтаноміі ў складзе Расійскай дэмакратычнай федэратыўнай рэспублікі, а таксама палітыкай Савета Народных Камісараў Расіі, які вёў перагаворы з Германіяй аб лёсе Беларусі без удзелу ў іх прадстаўнікоў беларускага народу. Незалежніцкія тэндэнцыі ўзмацніліся пасля разгону Усебеларускага з'езду.",
				type: "text",
				year: 1917
			},
			{
				id: 2,
				date: '19 лютага',
				title: "Першая Устаўная Грамата",
				author: "",
				text: "Выканаўчы камітэт Рады Усебеларускага з'езда скончыў сваё апошняе нелегальнае пасяджэнне, апрацаваўшы Першую Устаўную грамату да народаў Беларусі. Крыху раней адбылося надзвычайнае пасяджэнне Выканкома ЦБВР, на якім было прынята рашэнне: “Па-прычыне абсалютна выразнага памкнення Народнага Камісарыяту Заходняй вобласці ўцякчы на ўсход і па-прычыне набліжэння немцаў і верагоднасці анархіі ў горадзе — узяць на сябе ахову парадку і бяспекі ў Мінску, а калі спатрэбіцца, то і ва ўсёй Беларусі, выканаць волю з'езда і ўзяць уладу ў свае рукі.",
				type: "text",
				year: 1918

			},
			{
				id: 3,
				date: '9 сакавіка',
				title: "Першае пасяджэнне Рады кангрэса",
				author: "",
				text: "Адбылося першае ўрачыстае пасяджэнне Выканаўчага камітэта Рады кангрэса. У яго склад былі запрошаны прадстаўнікі сацыялістаў -рэвалюцыянераў, меншавікоў, ЕС і СС. Агульная колькасць членаў Выканкама была даведзена да 71 чалавека. Пасяджэнне прыняло Другую Устаўную грамату, у якой Беларусь была аб'яўлена народнай рэспублікай. Выканаўчы камітэт быў перай- менаваны ў Раду БНР, абраны Прэзідыум Рады на чале з I. Серадой. У межах Беларусі былі абвешчаны свабоды: слова, друку, сходаў, забастовак, сумлення, недатыкальнасць асобы і жылля, права на аўтаномію, раўнапраўе моў.",
				type: "text",
				year: 1918
			},
			{
				id: 4,
				date: '25 сакавіка',
				title: "Трэцяя Устаўная грамата",
				author: "",
				text: "Пасля дзесяцігадзінных спрэчак нязначнай большасцю галасоў прыняла пастанову Трэцюю Устаўную грамату, у якой абвясціла незалежнасці Беларусі. У пратаколе адзначалася, што атмасфера ў час пасяджэння была «наэлектрызавана». Супраць аддзялення Беларусі ад Савецкай Расіі галасавалі дэпутаты гарадской, земскай і бундаўскай фракцый. Ад галасавання ўстрымаліся прадстаўнікі Аб'яднанай яўрэйскай сацыялістыч- най партыі, Земская фракцыя выйшла з Рады БНР і адазвала сваіх прадстаўнікоў з Народнага сакратарыята. Трэцяй Устаўнай граматай БНР абвяшчалася «незалежнай і вольнай дзяржавай».",
				type: "text",
				year: 1918
			},
			{
				id: 5,
				date: '6 студзеня',
				title: "Трэцяя Устаўная грамата",
				author: "",
				text: "Рада і ўрад БНР пераехалі ў Вільню, а затым у выніку наступленьня Чырвонай Арміі і дзейнасьці польскіх ваенізаваныхфарміраваньняў у Горадню. Гэты горад лічыўся сталіцай БНР да верасьня 1919. Пад эгідай ураду БНР знаходзіліся некаторыя мясцовыя арганізацыі, быў наладжаны выпуск 5 беларускіх газэт. Урад БНР у гэты час вёў барацьбу супраць прэтэнзіяў польскай дзяржавы на беларускія тэрыторыі, дамагаўся права на ўдзел у Парыскай мірнай канфэрэнцыі, пасьпяхова прайшлі перагаворы з урадам УНР пра пазыцыю для ўраду А. Луцкевіча.",
				type: "text",
				year: 1918
			}
		];

		$scope.items = [
			{number: 1900},
			{number: 1901},
			{number: 1902},
			{number: 1903},
			{number: 1904},
			{number: 1905},
			{number: 1906},
			{number: 1907},
			{number: 1908},
			{number: 1909},
			{number: 1910},
			{number: 1911},
			{number: 1912},
			{number: 1913},
			{number: 1914},
			{number: 1915},
			{number: 1916},
			{number: 1917},
			{number: 1918},
			{number: 1919},
			{number: 1920},
			{number: 1921},
			{number: 1922},
			{number: 1923},
			{number: 1924},
			{number: 1925}
		];

		$scope.selectedItem = $scope.items[18];

	})

	.controller('chronicleDetailsCtrl', function ($scope) {

		$scope.items = [
			{
				src:'../css/img/1.jpg',
				sub: ''
			},
			{
				src:'../css/img/2.jpg',
				sub: ''
			},
			{
				src:'../css/img/3.jpeg',
				sub: ''
			},
			{
				src:'../css/img/4.jpg',
				sub: ''
			},
			{
				src:'../css/img/5.jpg',
				sub: ''
			},
			{
				src:'../css/img/6.jpg',
				sub: ''
			},
			{
				src:'../css/img/7.jpg',
				sub: ''
			}
		]

	})

	.controller('settingsCtrl', function ($scope) {

	})

	.controller('loginCtrl', function ($scope) {

	})

	.controller('signupCtrl', function ($scope) {

	});