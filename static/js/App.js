(function(angular) {
    var THEMES = [
        'red',
        'pink',
        'purple',
        'deep-purple',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'deep-orange',
        'brown',
        'grey',
        'blue-grey'
    ];
    
    var shortExamples = [
	'w9[X', '7[Tb', '[LQp', 'xMYG', 'Ig-}', '[_!U', '@G0$',
	'vTU0', '$z!e', 'kwA1', 'ZiSw', '2QtB', 'fvRZ', '8iIV',
	'wIxt', 'Tm9{', '5YVM', 'wdzr', 'q((v', 'lZ,!', 'zIss',
	'1TXs', 'Qmk@', 'Hhaj', 'MJ_P', '1Oqh', '4P4h', '-Rys',
	'Jdjh', 'rfe-', 'C)A2', 'BPD7', '[w{(', ')P)f', '6WA9',
	'tDrd', 'DCEj', 'qJyS', '2ylp', 'ZZgW'
    ];
    
    var regularExamples = [
        'w]GmucuT(Z', 'MeCJoN9T]b', '{jRB1H)Uj{', 'O$iaRIe[SW', 
        'O!R7x3H@0!', 'L.U3C6yh-P', 'xSPU6v,OKM', 'OwGvjP,K$6',
        'iz.vYbHTVj', 'n(6sQV9o}2', 'l-B4Re!X(G', 'tC,bmp}4X6', 
        '7JtS.Ec.ce', 'ME(31F(r3O', '2VJlJvHa7f', 'MudLE,fk$W',
        'ow]nAvWv(o', 'qx]jqCwVe_', 'dfY8xbLM9A', 'S69lmB!Na6',
        '!9cPta372[', 'TUvpHiS-T!', 'smz_Kn]5bx', 'Z06-fMV-oO',
        '{43}.$mbka', 'w5DPj_2jxe', 'KoIiF]E{{I', '5eyta5qoAx',
        ']KC4ZZo)t(', '}QG3e3F1W1', 'Uij,w0COAd', 'WDaeUlP}u8',
        'NWTGenk6bW', 'NE5AxnB4ui', 'z}OIICYbMg', 'f}XoQ}Y8R5',
        'nca5a7s,Lq', 'GQE5j8MU[v', 'qr(P(LWfPI', '}D9OZ.5,}t'
    ];
    
    var veryLongExamples = [
        '5,xvmMyJfne!hv@lmpcw04FKOBPNbcio1XXUE37zFL5DMRUEtsMbyJ]irTR9FEL7}EZWFOOKVZRCyW[N',
        'eJ(YK_p]u63XL0Y[MZZhxVcg-y2rW0WmB9-Up8ULWDN(zRgVFXEyIzVH}f8HTBvWN02Dlb]T.EoZV}$@',
        'b!_,tiAG4$au}rZmqZ}eVgiXC7L6utk)L2POh.8uUg0CqXBdNAuKp8T}uvEJnANiwKb)!h{wxu0k{1A8',
        '-DcE(uy[xU7rf_23hPhVe[kQCJ{r4byojM)m45Vq3Irh_Unhr[a-jSN0w-uu3RCHqk7he9gU12yOnpXq',
        '8m]UmAW]R0GC-R7}SI$,Z}{z]9dX8[ol-]1Wf-HXdyHkksV0Id2DTFNO)1SiYcXZQ_oH3WW@o0DHodBv',
        'vlWKcabN4vtz4r1(_n8p6JM-[t56g3k4-[YIAnC34ebMfgb00p{F.!YG]yU1exRbMbsZq1bG_U@{SeKb',
        'DEk6yzJO.VBtPHHurk2PG7SfZCW8sdDO)hwAGV6j2Uo5.aBKy_HSMVTw_mE4{$.qH-X0Mm{5G4W0M](Z'
    ];
    
    var sentenceExamples = [
        "the-attending-thumb-indulges-across-the-exposed-purge",
        "a-recipe-suits-a-floppy-variance",
        "the-damp-errs-across-a-heat",
        "a-wound-hesitates-within-the-foreigner",
        "when-will-an-everyday-bubble-boggle",
        "an-impressive-pit-connects-with-the-imposing-pace",
        "whatever-packet-lusts-against-the-instrumental-fork",
        "the-ready-algebra-pronounces-the-cramped-alphabet",
        "does-an-economics-revert-below-the-jealous-censorship",
        "the-arch-controller-works-outside-any-lying-poet",
        "a-wasteful-apple-neglects-his-stone",
        "the-modest-gospel-finishes-into-a-prior-rot",
        "the-cook-adds-the-jail-under-the-honored-communist",
        "an-uncle-loves-this-musician",
        "the-trash-flips-beneath-an-animal-cigarette",
        "why-cant-the-choral-decide-next-to-the-obliging-resolve",
        "your-available-converter-chains-the-largest-noun",
        "the-exhaustive-sacrifice-comforts-a-commissioned-blackmail",
        "inside-a-correspondence-moans-the-idea",
        "an-analyzed-bird-stumbles",
        "every-vote-boils-into-any-individual-bonus",
        "the-mountain-strokes-a-northern-with-an-arrogant-disease",
        "can-the-concert-behave-against-the-willed-temple",
        "the-lemon-scandalizes-a-jack",
        "the-curriculum-touches-its-textbook-quantum-before-the-guide",
        "the-elect-nun-degenerates-inside-the-forecast",
        "the-drawback-chews",
        "the-cartoon-exits",
        "can-a-tear-fly-under-the-huge-wren",
        "the-slot-accepts-after-the-luck",
        "a-pat-regret-celebrates-the-courage",
        "does-a-skin-wed",
        "an-astronomer-supervises-the-overcome-track-within-another-discipline",
        "the-sock-spins-the-sky-on-top-of-the-rotating-script",
        "should-a-verdict-spell-the-chocolate-soul",
        "the-customer-outweighs-the-above-duplicate"
    ];
    
    var app = angular.module('uurl', ['ngMaterial']);
    
    app.config(function($mdThemingProvider) {
	$mdThemingProvider.alwaysWatchTheme(true);
          var p = THEMES[Math.floor(Math.random()*THEMES.length)];
          var a = null;
          do {
              a = THEMES[Math.floor(Math.random()*THEMES.length)];
          } while(a == p);
          
	  $mdThemingProvider.theme('default')
	    .primaryPalette(p).accentPalette(a);
          document.body.style.background = $mdThemingProvider._PALETTES[p]['50'];
          
          $mdThemingProvider.theme('scaryTheme')
	    .primaryPalette('red', { 'default': '900'}).accentPalette('grey');
	});
    
    app.config(function($interpolateProvider){
	    $interpolateProvider.startSymbol('{[').endSymbol(']}');
	});
    
    app.service('URLDAO', ['$http', function($http) {
	var URLDAO = {
		createUrl: function(target, type) {
			return $http({
			    method: 'POST',
			    url: '/api/urls',
			    data: {
				target: target,
				type: type
			    }
			})
		},
		
		list: function() {
		    return $http({
			method: 'GET',
			url: '/api/urls',
		    });
		},
		
		get: function(id) {
		    return $http({
			method: 'GET',
			url: '/api/urls/' + id
		    });
		}
	}
	
	return URLDAO;
    }]);
    
    app.controller('NoCtrl', ['$scope', function($scope) {
	$scope.theme = 'default';
    }]);
    
    
    app.controller('LastURLsCtrl', ['$scope', 'URLDAO', function($scope, URLDAO) {
	$scope.urls = [];
	var hues = ['md-hue-1', 'md-hue-2', 'md-hue-3', 'md-hue-4', 'md-hue-5']
	
	URLDAO.list().success(function(data) {
	    
	    data.forEach(function(entry) {
		URLDAO.get(entry.fields.identifier).success(function(data) {
		    data.hue = hues[Math.floor(Math.random()*hues.length)];
		    
		    $scope.urls.push(data);
		});
	    })
	});
	
    }]);
    
    app.controller('RedirCtrl', ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {
	$scope.url = null;
	$scope.countdown = 20;
	$scope.adblock = false;
	$scope.theme = 'default';
	
	var adblock_action = function() {
	    document.body.style.backgroundImage = 'url("/static/images/scarybg.jpg")';
		$scope.adblock = true;
	    
        	var audio = new Audio('https://www.youtube.com/audiolibrary_download?vid=26499c6a4000c77c');
        	audio.play();
        	
        	var ghoul = document.getElementById('ghoul');
        	
        	var scare = function() {
        	    $timeout(function() {
        		ghoul.style.display = 'initial';
        		$timeout(function() {
        		    ghoul.style.display = 'none';
        		    $timeout(function() {
        			ghoul.style.display = 'initial';
        			$timeout(function() {
        			    ghoul.style.display = 'none';
        			    scare();
        			}, 20, false);
        		    }, 500, false);
        		}, 20, false);
        		$scope.scared = true;
        	    }, 10000, true);
        	}
        	scare();
        	$scope.theme = 'scaryTheme';
	};
	
	/* AdBlock detector */
	var img = new Image(10, 10);
	img.onerror = function() { adblock_action(); };
	img.src = 'http://ads.trafficjunky.net/favicon.ico';
	
	try {
	    __abc123; 
	} catch(e) {
	    adblock_action();
	}
	
	$http({
	    method: 'GET',
	    url: '/api/urls/' + identifier
	}).success(function(data) {
	    $scope.url = data;
	    $scope.url.createDate = (new Date($scope.url.createDate)).toLocaleDateString();
	    
	    var counter = function() {
		    if ($scope.countdown > 0) {
			$scope.countdown--;
			$timeout(function() { counter() }, 1000);
		    } else {
			if (!$scope.adblock && window.location.host == 'tauc.link') {
			    window.location.href = $scope.target;
			}
		    }
	    };
	    
	    counter();
	    $scope.target = data.target;
	}).error(function() {
	    window.location.href = '/error/404';
	});
    }]);
    
    app.controller('AppCtrl', ['$scope', '$timeout', 'URLDAO', function($scope, $timeout, URLDAO){
	$scope.baseUrl = 'http://tauc.link';
	$scope.step = 0;
	$scope.url = {
	    target: '',
	    type: 0
	};
	$scope.theme = 'default';
	
	$scope.created = null
	$scope.feedback = false;
	
	$scope.generateExamples = function() {
	    $scope.examples = {
			sentence: sentenceExamples[Math.floor(Math.random()*sentenceExamples.length)],
			short: shortExamples[Math.floor(Math.random()*shortExamples.length)],
			regular: regularExamples[Math.floor(Math.random()*regularExamples.length)],
			veryLong: veryLongExamples[Math.floor(Math.random()*veryLongExamples.length)],
		};
	};
	$scope.generateExamples();
	
	$scope.createUrl = function() {
	    $scope.feedback = true;
	    URLDAO.createUrl($scope.url.target, $scope.url.type).success(function(data) {
		$scope.step = 1;
		    $scope.created = {
			target: $scope.baseUrl + '/' + data.identifier
			}
		    
		$timeout(function() {
		    document.getElementById('generated').select()
		    var shareplace = document.getElementById('shareplace');
		    
		    var fb = document.createElement('div');
		    fb.setAttribute('class', 'fb-share-button');
		    fb.setAttribute('data-href', $scope.created.target);
		    fb.setAttribute('data-layout', 'button');
		    
		    var gplus = document.createElement('div');
		    gplus.setAttribute('class', 'g-plus');
		    gplus.setAttribute('data-action', 'share');
		    gplus.setAttribute('data-annotation', 'none');
		    gplus.setAttribute('data-href', $scope.created.target);
		    
		    var t = document.createElement('a');
		    t.setAttribute('href', 'https://twitter.com/share');
		    t.setAttribute('class','twitter-share-button');
		    t.setAttribute('data-url', $scope.created.target);
		    t.setAttribute('data-count', 'none');
		    
		    shareplace.appendChild(fb);
		    shareplace.appendChild(gplus);
		    shareplace.appendChild(t);
		    
		    // re-parse all the social media tags
		    FB.XFBML.parse();
		    (function() {
			    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
			    po.src = 'https://apis.google.com/js/platform.js';
			    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
			  })();
		    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
		    
		}, 0, false);
	    }).error(function(data, status) {
		$scope.step = 2;
		$scope.error = data.error + '. Status code is ' + status + '.';
	    })
	}
    }]);
})(angular);