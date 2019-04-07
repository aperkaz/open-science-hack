Highcharts.chart('container', {
	credits: {
		enabled: false
	},
	exporting: { enabled: false },
	title: {
		text: 'Retweet Interactions (Dependency Wheel)'
	},
	subtitle: {
		text: 'Discover the main 20 actors in the conversation'
	},
	chart: {
		height: (9 / 16) * 70 + '%' // 16:9 ratio
	},
	series: [
		{
			keys: ['from', 'to', 'weight'],
			data: [
				['sofiabremsjo', 'calleekstrom', 1],
				['halle_ali', 'MSDSverige', 2],
				['HjartLung', 'ssdf12diabetes', 4],
				['TDJeanette', 'HjartLung', 1],
				['veronikapso', 'ssdf12diabetes', 16],
				['NiclasKammarbo', 'SEF_Elitfotboll', 1],
				['OliverHagblom', 'SEF_Elitfotboll', 1],
				['AllsvenskanSE', 'SEF_Elitfotboll', 1],
				['Vilhelmsson_12', 'SEF_Elitfotboll', 1],
				['martinpwi', 'SEF_Elitfotboll', 1],
				['oddset', 'SEF_Elitfotboll', 1],
				['ejvin1897', 'SEF_Elitfotboll', 1],
				['ultrish', 'SEF_Elitfotboll', 1],
				['HashtagBajen', 'Hammarbyfotboll', 10],
				['903Lew', 'SEF_Elitfotboll', 1],
				['antonmarten_1', 'SEF_Elitfotboll', 1],
				['jacobfalth', 'Hammarbyfotboll', 1],
				['ros_inger', 'HjartLung', 1],
				['RBTHAMAN', 'SEF_Elitfotboll', 1],
				['Svensson_Anton', 'SEF_Elitfotboll', 1]
			],
			type: 'dependencywheel',
			name: 'Amount of RT',
			dataLabels: {
				color: '#333',
				textPath: {
					enabled: true,
					attributes: {
						dy: 5
					}
				},
				distance: 10
			},
			size: '95%'
		}
	]
});

var wordData = [
	{
		name: 'diabetesdebatt',
		weight: 5
	},
	// {
	// 	name: 'diabetes',
	// 	weight: 285
	// },
	{
		name: 'bajen',
		weight: 10
	},
	{
		name: 'Allsvenskan',
		weight: 1
	},
	{
		name: 'rinkeby',
		weight: 1
	},
	{
		name: 'Diabetesforskning',
		weight: 3
	},
	{
		name: '\u00f6vervikt',
		weight: 6
	},
	{
		name: 'fetma',
		weight: 5
	},
	{
		name: 'forskning',
		weight: 18
	},
	{
		name: 'O',
		weight: 1
	},
	{
		name: 'tacksam',
		weight: 2
	},
	{
		name: 'T1D',
		weight: 2
	},
	{
		name: 'Barndiabetes',
		weight: 1
	},
	{
		name: 'diabetestyp1',
		weight: 13
	},
	{
		name: 'Morelli',
		weight: 1
	},
	{
		name: 'Kamelcentret',
		weight: 1
	},
	{
		name: 'Angered',
		weight: 1
	},
	{
		name: 'integrationsfiaskot',
		weight: 1
	},
	{
		name: 'framtidsbranschen',
		weight: 26
	},
	{
		name: 'svmed',
		weight: 89
	},
	{
		name: 'vard',
		weight: 11
	},
	{
		name: 'vardpo',
		weight: 13
	},
	{
		name: 'framtidsbrans',
		weight: 17
	},
	{
		name: 'egenv\u00e5rd',
		weight: 1
	},
	{
		name: '39',
		weight: 2
	},
	{
		name: 'tapprabarn2018',
		weight: 2
	},
	{
		name: 'science',
		weight: 2
	},
	{
		name: 'scepticism',
		weight: 1
	},
	{
		name: 'LionsClub',
		weight: 1
	},
	{
		name: 'barndiabetesteamets',
		weight: 1
	},
	{
		name: 'Barnkliniken',
		weight: 1
	},
	{
		name: 'datadelning',
		weight: 2
	},
	{
		name: 'Almedalen',
		weight: 9
	},
	{
		name: 'DiabetesWeek',
		weight: 2
	},
	{
		name: 'tyngreartikelarkiv',
		weight: 7
	},
	{
		name: 'insulinpump',
		weight: 6
	},
	{
		name: 'FreeStyleLibre',
		weight: 1
	},
	{
		name: 'Frankenstein',
		weight: 1
	},
	{
		name: 'svpol',
		weight: 31
	},
	{
		name: 'vibrosense',
		weight: 1
	},
	{
		name: 'novonordisk',
		weight: 1
	},
	{
		name: 'almedalen2018',
		weight: 5
	},
	{
		name: 'eh\u00e4lsa',
		weight: 3
	},
	{
		name: 'almedalen',
		weight: 2
	},
	{
		name: 'Brighter',
		weight: 7
	},
	{
		name: 'dmagenda',
		weight: 25
	},
	{
		name: 'halsa',
		weight: 2
	},
	{
		name: 'nyheter',
		weight: 21
	},
	{
		name: 'uppsala',
		weight: 1
	},
	{
		name: 'swedishmedtech',
		weight: 1
	},
	{
		name: 'ungdiabetes',
		weight: 3
	},
	{
		name: 'screening',
		weight: 2
	},
	{
		name: 'hypoglykemi',
		weight: 1
	},
	{
		name: 'typ1',
		weight: 16
	},
	{
		name: 'kvinnofrid',
		weight: 1
	},
	{
		name: 'fuckdiabetes',
		weight: 6
	},
	{
		name: 'diabetessucks',
		weight: 1
	},
	{
		name: 'jidhesbarmyarmy',
		weight: 1
	},
	{
		name: 'systemkollaps',
		weight: 2
	},
	{
		name: 'YuvalNoahHarari',
		weight: 1
	},
	{
		name: 'diabetes1',
		weight: 35
	},
	{
		name: 'diabetestype1',
		weight: 1
	},
	{
		name: '\u00f6ppendiabetes',
		weight: 4
	},
	{
		name: 'attresameddiabetes',
		weight: 2
	},
	{
		name: 'resa',
		weight: 2
	},
	{
		name: 'travel',
		weight: 2
	},
	{
		name: 'Insulin',
		weight: 2
	},
	{
		name: 'svemed',
		weight: 1
	},
	{
		name: 'v\u00e5rdiabetes',
		weight: 3
	},
	{
		name: 'Mardr\u00f6m',
		weight: 1
	},
	{
		name: 'obegripligkoppling',
		weight: 1
	},
	{
		name: 'insulin',
		weight: 16
	},
	{
		name: 'enzymer',
		weight: 3
	},
	{
		name: 'vetenskap',
		weight: 2
	},
	{
		name: 'illvet',
		weight: 1
	},
	{
		name: 'illustreradvetenskap',
		weight: 1
	},
	{
		name: 'medicin',
		weight: 2
	},
	{
		name: 'pl\u00e5ster',
		weight: 1
	},
	{
		name: 'Actiste',
		weight: 3
	},
	{
		name: 'botadiabetes',
		weight: 9
	},
	{
		name: 'st\u00f6dforskningen',
		weight: 9
	},
	{
		name: 'gamlased',
		weight: 4
	},
	{
		name: 'diabetes2',
		weight: 25
	},
	{
		name: 'tecken',
		weight: 1
	},
	{
		name: 'h\u00e4lsa',
		weight: 13
	},
	{
		name: 'lokaltidningen',
		weight: 1
	},
	{
		name: 'lund',
		weight: 2
	},
	{
		name: 'F\u00f6rbrukningshj\u00e4lpmedel',
		weight: 1
	},
	{
		name: 'tr\u00e4ning',
		weight: 4
	},
	{
		name: 'jihdesdiabetes',
		weight: 1
	},
	{
		name: 'Blodsocker',
		weight: 3
	},
	{
		name: 'jogging',
		weight: 2
	},
	{
		name: 'uppv\u00e4rmning',
		weight: 1
	},
	{
		name: 'intervaller',
		weight: 1
	},
	{
		name: 'blekinge',
		weight: 2
	},
	{
		name: 'sweden',
		weight: 4
	},
	{
		name: 'v\u00e5ffla',
		weight: 2
	},
	{
		name: 'brobacka',
		weight: 2
	},
	{
		name: 'totype1diabetes',
		weight: 3
	},
	{
		name: 'insulinpumps',
		weight: 3
	},
	{
		name: 'insulinpumper',
		weight: 3
	},
	{
		name: 'type1diabetic',
		weight: 5
	},
	{
		name: 'type1',
		weight: 2
	},
	{
		name: 't1d',
		weight: 7
	},
	{
		name: 'Diabeteshanden',
		weight: 3
	},
	{
		name: 'typ1diabetiker',
		weight: 2
	},
	{
		name: 'diabetesforskning',
		weight: 15
	},
	{
		name: 'gesundheit',
		weight: 2
	},
	{
		name: 'antibiotika',
		weight: 2
	},
	{
		name: '\u7dd1\u8c37\u3068\u8f5f\u3067\u30bf\u30c3\u30b0\u70b9\u706f',
		weight: 1
	},
	{
		name: 'alm',
		weight: 1
	},
	{
		name: 'gravid',
		weight: 1
	},
	{
		name: 'sommar',
		weight: 1
	},
	{
		name: 'sommarspring',
		weight: 1
	},
	{
		name: 'tr\u00e4na',
		weight: 2
	},
	{
		name: 'tr\u00e4nahemma',
		weight: 1
	},
	{
		name: 'l\u00f6pning',
		weight: 1
	},
	{
		name: 'l\u00f6pning\u00e4rlivet',
		weight: 1
	},
	{
		name: 'l\u00e5ngth\u00e5r',
		weight: 1
	},
	{
		name: 'Testandtreat',
		weight: 2
	},
	{
		name: 'Noaddedsugar',
		weight: 2
	},
	{
		name: 'runtastic',
		weight: 1
	},
	{
		name: 'springmats',
		weight: 8
	},
	{
		name: 'springmatsochdiabetes',
		weight: 5
	},
	{
		name: 'fotbollstr\u00e4nare',
		weight: 1
	},
	{
		name: 'Stigmabase',
		weight: 1
	},
	{
		name: 'D\u00f6daMig',
		weight: 1
	},
	{
		name: 'Diabetes',
		weight: 24
	},
	{
		name: 'GP',
		weight: 1
	},
	{
		name: 'botadiab',
		weight: 3
	},
	{
		name: 'intealladiabetiker',
		weight: 2
	},
	{
		name: 'FuckDiabetes',
		weight: 2
	},
	{
		name: 'Diabetic',
		weight: 3
	},
	{
		name: 'Life',
		weight: 3
	},
	{
		name: 'Insights',
		weight: 2
	},
	{
		name: 'Rheumatology',
		weight: 2
	},
	{
		name: 'Neurology',
		weight: 2
	},
	{
		name: 'Recognition',
		weight: 2
	},
	{
		name: 'Therapy',
		weight: 2
	},
	{
		name: 'val2018',
		weight: 2
	},
	{
		name: 'sdriks',
		weight: 5
	},
	{
		name: 'HN',
		weight: 1
	},
	{
		name: 'DiabetesTyp1',
		weight: 4
	},
	{
		name: 'lchf',
		weight: 5
	},
	{
		name: '08pol',
		weight: 1
	},
	{
		name: 'karolinska',
		weight: 1
	},
	{
		name: '\u00f6gon',
		weight: 1
	},
	{
		name: 'livet',
		weight: 1
	},
	{
		name: 'ykk\u00f6styyppi',
		weight: 1
	},
	{
		name: 'ThingsIWouldChangeAboutMyself',
		weight: 1
	},
	{
		name: 'envist',
		weight: 1
	},
	{
		name: 'v\u00e4rmen',
		weight: 1
	},
	{
		name: 'jobbet',
		weight: 1
	},
	{
		name: 'nyttjobb',
		weight: 2
	},
	{
		name: 'tankesmedjan',
		weight: 1
	},
	{
		name: 'svtnyheter',
		weight: 8
	},
	{
		name: 'Diabetesepidemin',
		weight: 4
	},
	{
		name: 'fetmaepidemin',
		weight: 6
	},
	{
		name: 'jaghardiabetes',
		weight: 1
	},
	{
		name: 'SummerClassic2018',
		weight: 1
	},
	{
		name: 'pratapengar',
		weight: 4
	},
	{
		name: 'brigther',
		weight: 1
	},
	{
		name: 'fredag',
		weight: 4
	},
	{
		name: 'mys',
		weight: 1
	},
	{
		name: 'helg',
		weight: 3
	},
	{
		name: 'v\u00e4nner',
		weight: 1
	},
	{
		name: 'familj',
		weight: 2
	},
	{
		name: 'korv',
		weight: 1
	},
	{
		name: 'sugar',
		weight: 1
	},
	{
		name: 'sugartax',
		weight: 1
	},
	{
		name: 'sugarrush',
		weight: 1
	},
	{
		name: 'soda',
		weight: 1
	},
	{
		name: 'cooking',
		weight: 1
	},
	{
		name: 'gardening',
		weight: 1
	},
	{
		name: 'obesity',
		weight: 5
	},
	{
		name: 'who',
		weight: 1
	},
	{
		name: 'diet',
		weight: 1
	},
	{
		name: 'ja',
		weight: 1
	},
	{
		name: 'Korvbr\u00f6d',
		weight: 1
	},
	{
		name: 'Faktaresistens',
		weight: 1
	},
	{
		name: 'Fetma',
		weight: 1
	},
	{
		name: 'Valfilm',
		weight: 1
	},
	{
		name: 'Socialdemokrater',
		weight: 1
	},
	{
		name: 'Kostr\u00e5d',
		weight: 1
	},
	{
		name: 'beige',
		weight: 2
	},
	{
		name: 'Diamyd',
		weight: 20
	},
	{
		name: 'cancer',
		weight: 1
	},
	{
		name: 'sjukdomar',
		weight: 1
	},
	{
		name: 'histamin',
		weight: 1
	},
	{
		name: 'sote',
		weight: 1
	},
	{
		name: 'gamlasedlar',
		weight: 4
	},
	{
		name: 'nyforskning',
		weight: 4
	},
	{
		name: 'v\u00e4lg\u00f6renhet',
		weight: 4
	},
	{
		name: 'diabetestutkimus',
		weight: 2
	},
	{
		name: 's\u00f6mn',
		weight: 1
	},
	{
		name: 'Medeon',
		weight: 5
	},
	{
		name: 'diabetessamverkansverige',
		weight: 1
	},
	{
		name: 'fuckDiabetes',
		weight: 1
	},
	{
		name: 'MatejOresic',
		weight: 6
	},
	{
		name: 'NMetC2018',
		weight: 6
	},
	{
		name: 'midnattsloppet',
		weight: 2
	},
	{
		name: 'lopp',
		weight: 2
	},
	{
		name: 'immunf\u00f6rsvaret',
		weight: 1
	},
	{
		name: 'Forskning',
		weight: 1
	},
	{
		name: 'allergi',
		weight: 1
	},
	{
		name: 'boras',
		weight: 3
	},
	{
		name: 'bor\u00e5s',
		weight: 3
	},
	{
		name: 'springf\u00f6rdiabetes',
		weight: 1
	},
	{
		name: 'herewegoagain',
		weight: 1
	},
	{
		name: 'g\u00f6tt',
		weight: 1
	},
	{
		name: 'anotherone',
		weight: 1
	},
	{
		name: 'mmmchoklad',
		weight: 1
	},
	{
		name: 'D1',
		weight: 4
	},
	{
		name: 'mybad',
		weight: 1
	},
	{
		name: 'skiregion',
		weight: 1
	},
	{
		name: 'guide',
		weight: 1
	},
	{
		name: 'rullskidor',
		weight: 1
	},
	{
		name: 'podcast',
		weight: 1
	},
	{
		name: 'mindfulpodden',
		weight: 1
	},
	{
		name: 'dinr\u00f6st',
		weight: 1
	},
	{
		name: 'Follicum',
		weight: 6
	},
	{
		name: 'BioStockLive',
		weight: 1
	},
	{
		name: 'svme',
		weight: 1
	},
	{
		name: 'healthcare',
		weight: 9
	},
	{
		name: 'lifescience',
		weight: 5
	},
	{
		name: 'pharmaceuticals',
		weight: 3
	},
	{
		name: 'pha',
		weight: 1
	},
	{
		name: 'valet',
		weight: 2
	},
	{
		name: 'recept',
		weight: 2
	},
	{
		name: 'middag',
		weight: 2
	},
	{
		name: 'fisk',
		weight: 2
	},
	{
		name: 'arbetsmarknad',
		weight: 1
	},
	{
		name: 'tarmh\u00e4lsa',
		weight: 1
	},
	{
		name: 'IBS',
		weight: 1
	},
	{
		name: 'kroniskasjukdomar',
		weight: 1
	},
	{
		name: 'psoriasis',
		weight: 1
	},
	{
		name: 'valet2018',
		weight: 1
	},
	{
		name: 'alzheimer',
		weight: 1
	},
	{
		name: 'socker',
		weight: 2
	},
	{
		name: 'svt',
		weight: 2
	},
	{
		name: 'putospiratas',
		weight: 2
	},
	{
		name: 'insulin4all',
		weight: 1
	},
	{
		name: 'fullkorn',
		weight: 1
	},
	{
		name: 'svpt',
		weight: 2
	},
	{
		name: 'Fullkorn',
		weight: 1
	},
	{
		name: 'typ2diabetes',
		weight: 3
	},
	{
		name: 'IHEforum2018',
		weight: 2
	},
	{
		name: 'TV4val',
		weight: 2
	},
	{
		name: 'skitskaskitha',
		weight: 1
	},
	{
		name: 'vassleproteinpulver',
		weight: 2
	},
	{
		name: 'cancerpatienter',
		weight: 2
	},
	{
		name: 'aidspatienter',
		weight: 2
	},
	{
		name: 'diabetespatienter',
		weight: 2
	},
	{
		name: 'blodsockerfall',
		weight: 1
	},
	{
		name: 'Expressen',
		weight: 7
	},
	{
		name: 'matsm\u00e5land',
		weight: 1
	},
	{
		name: 'mat2018',
		weight: 1
	},
	{
		name: 'duellen',
		weight: 1
	},
	{
		name: 'VarbergsDiabetesf\u00f6rening',
		weight: 1
	},
	{
		name: 'Bouncecamp',
		weight: 1
	},
	{
		name: 'analys',
		weight: 1
	},
	{
		name: 'actiste',
		weight: 1
	},
	{
		name: 'medtech',
		weight: 5
	},
	{
		name: 'Diabetesmat',
		weight: 2
	},
	{
		name: 'Fyrv\u00e4pplingens',
		weight: 2
	},
	{
		name: '\u00e4ldreboende',
		weight: 3
	},
	{
		name: 'Hisingen',
		weight: 3
	},
	{
		name: 'risgrynspudding',
		weight: 3
	},
	{
		name: 'flatliner',
		weight: 1
	},
	{
		name: 'Remygen',
		weight: 1
	},
	{
		name: 'NextCell',
		weight: 2
	},
	{
		name: 'aktier',
		weight: 6
	},
	{
		name: 'placering',
		weight: 2
	},
	{
		name: 'TIL',
		weight: 1
	},
	{
		name: 'Aktiedagen',
		weight: 1
	},
	{
		name: 'hyrl\u00e4kare',
		weight: 1
	},
	{
		name: 'fruktos',
		weight: 5
	},
	{
		name: 'blodsocker',
		weight: 23
	},
	{
		name: 's\u00f6',
		weight: 4
	},
	{
		name: 'konstikampenmotdiabetes',
		weight: 1
	},
	{
		name: 'Sahlgrenska',
		weight: 1
	},
	{
		name: 'sjukv\u00e5rden',
		weight: 1
	},
	{
		name: 'Fyrv\u00e4pplingen',
		weight: 1
	},
	{
		name: 'MariaWern',
		weight: 1
	},
	{
		name: 'Sk\u00e5ne',
		weight: 6
	},
	{
		name: 'h\u00f6galidsfolkh\u00f6gskola',
		weight: 1
	},
	{
		name: 'diagnoser',
		weight: 1
	},
	{
		name: 'fetmanepidemin',
		weight: 1
	},
	{
		name: 'Fr\u00e5gaDoktorn',
		weight: 1
	},
	{
		name: 'Patsak2018',
		weight: 1
	},
	{
		name: 'H\u00e4lsoaktiv',
		weight: 1
	},
	{
		name: 'l\u00e4kemedel',
		weight: 15
	},
	{
		name: 'apotek',
		weight: 3
	},
	{
		name: 'reumatologi',
		weight: 1
	},
	{
		name: 'pt',
		weight: 2
	},
	{
		name: 'kost',
		weight: 4
	},
	{
		name: 'NCD',
		weight: 3
	},
	{
		name: 'lancet',
		weight: 3
	},
	{
		name: 'EnoughNCDs',
		weight: 3
	},
	{
		name: 'HL',
		weight: 2
	},
	{
		name: 'b\u00f6rsen',
		weight: 3
	},
	{
		name: 'sd2018',
		weight: 2
	},
	{
		name: 'tr\u00e4ning\u00e4rbraf\u00f6rsockret',
		weight: 1
	},
	{
		name: 'livetmeddiabetestyp1',
		weight: 2
	},
	{
		name: 'SweLifeScience',
		weight: 1
	},
	{
		name: 'h\u00e4lsosam',
		weight: 1
	},
	{
		name: 'antiken',
		weight: 1
	},
	{
		name: 'Wilhem',
		weight: 1
	},
	{
		name: 'mariawern',
		weight: 1
	},
	{
		name: 'tv4',
		weight: 2
	},
	{
		name: 'stroke',
		weight: 3
	},
	{
		name: 'hj\u00e4rta',
		weight: 2
	},
	{
		name: 'Metformin',
		weight: 1
	},
	{
		name: 'hurvetdudet',
		weight: 1
	},
	{
		name: 'Hemk\u00f6p',
		weight: 1
	},
	{
		name: 'Bajen',
		weight: 2
	},
	{
		name: 'warbergic',
		weight: 1
	},
	{
		name: 'EASD2018',
		weight: 5
	},
	{
		name: 'EASD',
		weight: 1
	},
	{
		name: 'EASD18',
		weight: 9
	},
	{
		name: 'n\u00e4rav\u00e5rd',
		weight: 3
	},
	{
		name: 'InventingforLife',
		weight: 2
	},
	{
		name: 'Type2',
		weight: 3
	},
	{
		name: 'TEDDY',
		weight: 2
	},
	{
		name: 'autoimmun',
		weight: 2
	},
	{
		name: 'Europa',
		weight: 2
	},
	{
		name: 'StockaNews',
		weight: 3
	},
	{
		name: 'Stroke',
		weight: 1
	},
	{
		name: 'B\u00e4stOfGlenn',
		weight: 1
	},
	{
		name: 'fots\u00e5r',
		weight: 3
	},
	{
		name: 'easd2018',
		weight: 2
	},
	{
		name: 'NovoNordisk',
		weight: 1
	},
	{
		name: 'Finwire',
		weight: 1
	},
	{
		name: 'swedishfika',
		weight: 1
	},
	{
		name: 'novo',
		weight: 1
	},
	{
		name: 'twincitiesinmotion',
		weight: 1
	},
	{
		name: 'minnstagram',
		weight: 1
	},
	{
		name: 'rivercentre',
		weight: 1
	},
	{
		name: 'hj\u00e4rntv\u00e4tt',
		weight: 2
	},
	{
		name: 'tarmflora',
		weight: 4
	},
	{
		name: 'dws',
		weight: 23
	},
	{
		name: 'tumba',
		weight: 2
	},
	{
		name: 'fotboll',
		weight: 1
	},
	{
		name: 'point',
		weight: 1
	},
	{
		name: 'astrid',
		weight: 1
	},
	{
		name: 'aww1',
		weight: 4
	},
	{
		name: 'diabeteswellness',
		weight: 5
	},
	{
		name: 'diabetiker',
		weight: 2
	},
	{
		name: 'lcjf',
		weight: 2
	},
	{
		name: 'keto',
		weight: 4
	},
	{
		name: 'lowcarb',
		weight: 3
	},
	{
		name: 'lowcarbfoo',
		weight: 1
	},
	{
		name: 'dinrost',
		weight: 3
	},
	{
		name: 'dajm',
		weight: 1
	},
	{
		name: 'viktminskningmedlchf',
		weight: 2
	},
	{
		name: '\u00e4tr\u00e4tt',
		weight: 1
	},
	{
		name: 'gluten',
		weight: 1
	},
	{
		name: 'detaljhandel',
		weight: 1
	},
	{
		name: 'sommarjob',
		weight: 1
	},
	{
		name: 'tumbakicken',
		weight: 1
	},
	{
		name: 'register',
		weight: 4
	},
	{
		name: 'kommunen',
		weight: 4
	},
	{
		name: 'Diabetesregistret',
		weight: 4
	},
	{
		name: 'Pa',
		weight: 3
	},
	{
		name: 'botacancer',
		weight: 1
	},
	{
		name: 'cancerv\u00e5rd',
		weight: 1
	},
	{
		name: 'diabetesv\u00e5rd',
		weight: 1
	},
	{
		name: 'chins',
		weight: 1
	},
	{
		name: 'armh\u00e4vningar',
		weight: 1
	},
	{
		name: 'staypositive',
		weight: 1
	},
	{
		name: 'autumn2018',
		weight: 1
	},
	{
		name: 'iw24h',
		weight: 1
	},
	{
		name: 'nalle',
		weight: 4
	},
	{
		name: 'iloveresearch',
		weight: 5
	},
	{
		name: 'sjuksk\u00f6terskestudent',
		weight: 1
	},
	{
		name: 'dm',
		weight: 1
	},
	{
		name: 'kontroll',
		weight: 1
	},
	{
		name: 'v\u00e5rdcentral',
		weight: 1
	},
	{
		name: 'hba1c',
		weight: 1
	},
	{
		name: 'livetmeddiabetes',
		weight: 15
	},
	{
		name: 'vddskane',
		weight: 2
	},
	{
		name: 'lada',
		weight: 2
	},
	{
		name: 'frosseri',
		weight: 1
	},
	{
		name: '\u00c4lskadeHusdjur',
		weight: 1
	},
	{
		name: 'crosstrainer',
		weight: 1
	},
	{
		name: 'diabetesgalan',
		weight: 22
	},
	{
		name: 'diabetesgalan2018',
		weight: 10
	},
	{
		name: '2die4',
		weight: 3
	},
	{
		name: 'teddy',
		weight: 5
	},
	{
		name: 'fo',
		weight: 6
	},
	{
		name: 'nallensdag',
		weight: 1
	},
	{
		name: '\u00e4ventyr',
		weight: 1
	},
	{
		name: 'sockertoppenif',
		weight: 1
	},
	{
		name: 'nalledagen',
		weight: 2
	},
	{
		name: 'nallar',
		weight: 2
	},
	{
		name: 'gossedjur',
		weight: 2
	},
	{
		name: 'barndiabetesfonden',
		weight: 10
	},
	{
		name: 'k\u00f6rmusik',
		weight: 1
	},
	{
		name: 'vintertid',
		weight: 2
	},
	{
		name: 'insulinsprutor',
		weight: 2
	},
	{
		name: 'mediciner',
		weight: 2
	},
	{
		name: 'timme',
		weight: 1
	},
	{
		name: 'sundmat',
		weight: 1
	},
	{
		name: 'viktminskning',
		weight: 1
	},
	{
		name: 'motmintoppform',
		weight: 1
	},
	{
		name: 'influencer',
		weight: 1
	},
	{
		name: 'blogger',
		weight: 2
	},
	{
		name: 'EMS',
		weight: 2
	},
	{
		name: 'insulinresistens',
		weight: 2
	},
	{
		name: 'sj',
		weight: 1
	},
	{
		name: 'alexStoraDag',
		weight: 1
	},
	{
		name: 'alltidh\u00f6gp\u00e5natten',
		weight: 1
	},
	{
		name: 'blodsockerkoll',
		weight: 4
	},
	{
		name: 'sverigesradio',
		weight: 1
	},
	{
		name: 'goldenhits',
		weight: 1
	},
	{
		name: 'depression',
		weight: 1
	},
	{
		name: 'tr\u00f6tthet',
		weight: 2
	},
	{
		name: 'hampaolja',
		weight: 1
	},
	{
		name: 'nedst\u00e4mdhet',
		weight: 1
	},
	{
		name: 'ghostmusikalen',
		weight: 2
	},
	{
		name: 'LCHF',
		weight: 2
	},
	{
		name: 'Diet',
		weight: 1
	},
	{
		name: 'svenskadagen',
		weight: 1
	},
	{
		name: 'vdd',
		weight: 2
	},
	{
		name: 'wdd',
		weight: 4
	},
	{
		name: 'f\u00f6rel\u00e4sning',
		weight: 1
	},
	{
		name: 'FridaBoisen',
		weight: 1
	},
	{
		name: 'Diabetesgalan',
		weight: 19
	},
	{
		name: 'IamOff',
		weight: 1
	},
	{
		name: 'water',
		weight: 3
	},
	{
		name: 'hj\u00e4rtak\u00e4rl',
		weight: 2
	},
	{
		name: 'minska',
		weight: 1
	},
	{
		name: 'risken',
		weight: 1
	},
	{
		name: 'typ2',
		weight: 1
	},
	{
		name: 'diabets',
		weight: 1
	},
	{
		name: 'V\u00e4rldsdiabetesdagen',
		weight: 31
	},
	{
		name: 'twittpuck',
		weight: 43
	},
	{
		name: 'funkpol',
		weight: 3
	},
	{
		name: 'syntolkning',
		weight: 5
	},
	{
		name: 'diabetsgalan',
		weight: 1
	},
	{
		name: 'mj\u00f6lkprodukter',
		weight: 1
	},
	{
		name: 'tsos',
		weight: 5
	},
	{
		name: 't',
		weight: 5
	},
	{
		name: 'twittp',
		weight: 1
	},
	{
		name: 'sockerintag',
		weight: 2
	},
	{
		name: 'kostr\u00e5d',
		weight: 2
	},
	{
		name: 'bs',
		weight: 2
	},
	{
		name: 'ketodiet',
		weight: 1
	},
	{
		name: 'diabetesfonden',
		weight: 2
	},
	{
		name: 'DIF',
		weight: 1
	},
	{
		name: 'DIFhockey',
		weight: 1
	},
	{
		name: 'hockey',
		weight: 1
	},
	{
		name: 'sport',
		weight: 1
	},
	{
		name: 't\u00e4vling',
		weight: 1
	},
	{
		name: 'idrott',
		weight: 1
	},
	{
		name: 'matchtr\u00f6ja',
		weight: 1
	},
	{
		name: 'fuckcancer',
		weight: 2
	},
	{
		name: 'dj18',
		weight: 1
	},
	{
		name: 'Diabetesgalan2018',
		weight: 1
	},
	{
		name: 'maloueftertio',
		weight: 1
	},
	{
		name: 'volont\u00e4r',
		weight: 1
	},
	{
		name: 'healthca',
		weight: 1
	},
	{
		name: 'NewProfilePic',
		weight: 1
	},
	{
		name: 'dietist',
		weight: 11
	},
	{
		name: 'kunskap',
		weight: 1
	},
	{
		name: 'BUS',
		weight: 1
	},
	{
		name: 'V\u00e4stervik',
		weight: 3
	},
	{
		name: 'svm',
		weight: 1
	},
	{
		name: 'epigenetik',
		weight: 5
	},
	{
		name: 'levnadsvanor',
		weight: 4
	},
	{
		name: 'v\u00e4rldsdiabetesdagen',
		weight: 11
	},
	{
		name: 'vadg\u00f6rendieti',
		weight: 1
	},
	{
		name: 'SjukhusetiArvika',
		weight: 1
	},
	{
		name: 'detlillasjukhuset',
		weight: 1
	},
	{
		name: 'Diabetesstudie',
		weight: 1
	},
	{
		name: 'WDD2018',
		weight: 8
	},
	{
		name: 'Vasaloppet',
		weight: 4
	},
	{
		name: 'diabetesdagen',
		weight: 2
	},
	{
		name: 'DiabetesDay',
		weight: 1
	},
	{
		name: 'matvanor',
		weight: 3
	},
	{
		name: 'Apoteket',
		weight: 1
	},
	{
		name: 'diabet',
		weight: 1
	},
	{
		name: 'diabetessyn',
		weight: 2
	},
	{
		name: 'folkh\u00e4lsa',
		weight: 4
	},
	{
		name: 'M\u00e5Bra',
		weight: 1
	},
	{
		name: 'WorldDiabetesDay',
		weight: 2
	},
	{
		name: 'Tarmfloran',
		weight: 2
	},
	{
		name: 'h\u00f6stbosune',
		weight: 1
	},
	{
		name: 'Bergs\u00e5ker',
		weight: 1
	},
	{
		name: 'teamaberg',
		weight: 1
	},
	{
		name: 'dagensmedicin',
		weight: 1
	},
	{
		name: 'WorldDiabe',
		weight: 3
	},
	{
		name: 'hallbarhalsa',
		weight: 1
	},
	{
		name: 'varberg',
		weight: 2
	},
	{
		name: 'gala',
		weight: 1
	},
	{
		name: 'preven',
		weight: 2
	},
	{
		name: 'worlddiabetesday',
		weight: 1
	},
	{
		name: 'TV3',
		weight: 1
	},
	{
		name: 'Iloveresearch',
		weight: 11
	},
	{
		name: 'tv3',
		weight: 4
	},
	{
		name: 'Annexet',
		weight: 2
	},
	{
		name: 'ruedefemme',
		weight: 1
	},
	{
		name: 'viasat',
		weight: 1
	},
	{
		name: 'viaplay',
		weight: 1
	},
	{
		name: 'Jonna',
		weight: 1
	},
	{
		name: 'konditor',
		weight: 1
	},
	{
		name: 'disbetesgalan2018',
		weight: 1
	},
	{
		name: 'Link\u00f6ping',
		weight: 1
	},
	{
		name: 'Tv3',
		weight: 1
	},
	{
		name: 'levermeddiabetestyp1',
		weight: 1
	},
	{
		name: 'ENDOMETRIOS',
		weight: 1
	},
	{
		name: 'Vimmerby',
		weight: 1
	},
	{
		name: 'blue',
		weight: 1
	},
	{
		name: 'bl\u00e5',
		weight: 1
	},
	{
		name: 'v\u00e4rldsh\u00e4lsodagen',
		weight: 1
	},
	{
		name: 'nextcell',
		weight: 1
	},
	{
		name: 'Di',
		weight: 2
	},
	{
		name: 'botadiabetesnu',
		weight: 1
	},
	{
		name: 'PeterJidhe',
		weight: 1
	},
	{
		name: 'inflation',
		weight: 1
	},
	{
		name: 'ostkakansdag',
		weight: 1
	},
	{
		name: 'Kort',
		weight: 1
	},
	{
		name: 'Lyckohalsband',
		weight: 1
	},
	{
		name: 'diabetesteamet',
		weight: 2
	},
	{
		name: 'sjukv\u00e5rd',
		weight: 2
	},
	{
		name: 'Iloversearch',
		weight: 1
	},
	{
		name: 'bajengalan',
		weight: 3
	},
	{
		name: 'typ1diabetes',
		weight: 2
	},
	{
		name: 'mj\u00f6lk',
		weight: 1
	},
	{
		name: 'Klarin',
		weight: 1
	},
	{
		name: 'Samsung',
		weight: 1
	},
	{
		name: 'dihealthcare',
		weight: 2
	},
	{
		name: 'kondition',
		weight: 3
	},
	{
		name: 'Pl\u00f6tsligtH\u00e4nderDet',
		weight: 1
	},
	{
		name: 'Diabeteshj\u00e4ltar',
		weight: 2
	},
	{
		name: 'torsdag',
		weight: 2
	},
	{
		name: 'guldmj\u00f6lk',
		weight: 1
	},
	{
		name: 'eH\u00e4lsa',
		weight: 2
	},
	{
		name: 'innovation',
		weight: 2
	},
	{
		name: 'Fatalism',
		weight: 1
	},
	{
		name: 'Clapping',
		weight: 1
	},
	{
		name: 'SleepDeprivation',
		weight: 1
	},
	{
		name: 'Jedi',
		weight: 1
	},
	{
		name: 'LifeLessons',
		weight: 1
	},
	{
		name: 'Healthcare',
		weight: 1
	},
	{
		name: 'BlackFriday',
		weight: 1
	},
	{
		name: 'demens',
		weight: 1
	},
	{
		name: 'diabetesfi',
		weight: 2
	},
	{
		name: 'sydsvenskan',
		weight: 1
	},
	{
		name: 'Alzheimer',
		weight: 2
	},
	{
		name: 'S',
		weight: 2
	},
	{
		name: 'noccoskumtomte',
		weight: 1
	},
	{
		name: 'CAM4',
		weight: 5
	},
	{
		name: 'diabetesawareness',
		weight: 2
	},
	{
		name: 'typ',
		weight: 4
	},
	{
		name: 'pyssel',
		weight: 1
	},
	{
		name: 't1dlookslikeme',
		weight: 2
	},
	{
		name: 't1diabetes',
		weight: 2
	},
	{
		name: 'juldikt',
		weight: 1
	},
	{
		name: 'doktordahlqvist',
		weight: 1
	},
	{
		name: 'Doktor',
		weight: 1
	},
	{
		name: 'Hj\u00e4rtattack',
		weight: 1
	},
	{
		name: 'alzheimers',
		weight: 1
	},
	{
		name: 'h\u00f6gtblodtryck',
		weight: 1
	},
	{
		name: 'njursvikt',
		weight: 2
	},
	{
		name: 'BREAKING',
		weight: 1
	},
	{
		name: 'l\u00e4kem',
		weight: 3
	},
	{
		name: 'tr\u00e4navarjedag',
		weight: 1
	},
	{
		name: 'NYHETER',
		weight: 1
	},
	{
		name: 'prostatacancer',
		weight: 1
	},
	{
		name: 'KTHuniversity',
		weight: 2
	},
	{
		name: 'braatthakoll',
		weight: 1
	},
	{
		name: 'kolhydrater',
		weight: 1
	},
	{
		name: 'carbs',
		weight: 1
	},
	{
		name: 'countingcarbs',
		weight: 1
	},
	{
		name: 'r\u00e4knakolhydrater',
		weight: 1
	},
	{
		name: 'finanstwitter',
		weight: 1
	},
	{
		name: 'NordiskaMedicinpriset',
		weight: 7
	},
	{
		name: '\u00e5landspringer',
		weight: 1
	},
	{
		name: 'tomtom',
		weight: 1
	},
	{
		name: 'tomtomrunner',
		weight: 1
	},
	{
		name: 'adventurer',
		weight: 1
	},
	{
		name: 'nofilter',
		weight: 1
	},
	{
		name: 'framtidsb',
		weight: 4
	},
	{
		name: 'lucia',
		weight: 1
	},
	{
		name: 'jul',
		weight: 1
	},
	{
		name: 'december',
		weight: 1
	},
	{
		name: 'julmys',
		weight: 1
	},
	{
		name: 'jultider',
		weight: 1
	},
	{
		name: 'axlar',
		weight: 1
	},
	{
		name: 'mage',
		weight: 1
	},
	{
		name: 'halmstad',
		weight: 2
	},
	{
		name: 'medtronic670g',
		weight: 1
	},
	{
		name: 'medtronic',
		weight: 1
	},
	{
		name: 'trialnet',
		weight: 1
	},
	{
		name: 'chipsfredag',
		weight: 1
	},
	{
		name: 'operation',
		weight: 1
	},
	{
		name: 'kardm\u00f6tet',
		weight: 1
	},
	{
		name: 'RoyFares',
		weight: 1
	},
	{
		name: 'malm\u00f6',
		weight: 1
	},
	{
		name: 'stress',
		weight: 2
	},
	{
		name: 'swgreen',
		weight: 1
	},
	{
		name: 'socialmedia',
		weight: 1
	},
	{
		name: 'research',
		weight: 1
	},
	{
		name: 'digitalhealth',
		weight: 1
	},
	{
		name: 'andersfrihamn',
		weight: 2
	},
	{
		name: 'blogg',
		weight: 2
	},
	{
		name: 'tomorrowspaperstoday',
		weight: 3
	},
	{
		name: 'myckettabletternu',
		weight: 1
	},
	{
		name: 'amykress',
		weight: 1
	},
	{
		name: 'j\u00e4rnbrist',
		weight: 1
	},
	{
		name: 'folsyrabrist',
		weight: 1
	},
	{
		name: 'thursday',
		weight: 1
	},
	{
		name: 'diaverum',
		weight: 1
	},
	{
		name: 'vegan',
		weight: 2
	},
	{
		name: 'laktosintolerant',
		weight: 1
	},
	{
		name: 'barn',
		weight: 1
	},
	{
		name: 'Repost',
		weight: 2
	},
	{
		name: 'skidome',
		weight: 1
	},
	{
		name: 'media',
		weight: 1
	},
	{
		name: 'ksla',
		weight: 2
	},
	{
		name: 'v\u00e4lling',
		weight: 1
	},
	{
		name: 'politik',
		weight: 2
	},
	{
		name: 'bblat',
		weight: 1
	},
	{
		name: 'retinameeting',
		weight: 1
	},
	{
		name: 'diabeteshund',
		weight: 1
	},
	{
		name: 'se',
		weight: 1
	},
	{
		name: 'BlanchissageDiab\u00e8te',
		weight: 1
	},
	{
		name: 'ShutoutDiabetes',
		weight: 1
	},
	{
		name: 'primarycare',
		weight: 2
	},
	{
		name: 'influensatider',
		weight: 1
	},
	{
		name: 'Diabetiker',
		weight: 1
	},
	{
		name: 'j\u00e4vligtmycket',
		weight: 1
	},
	{
		name: 'Follicums',
		weight: 1
	},
	{
		name: 'akutneurologiisverige',
		weight: 2
	},
	{
		name: 'ans',
		weight: 1
	},
	{
		name: 'abbottfreestylelibre',
		weight: 1
	},
	{
		name: 'RingUPSA',
		weight: 1
	},
	{
		name: 'insulink\u00e4nning',
		weight: 1
	},
	{
		name: 'F\u00f6rJenny',
		weight: 1
	},
	{
		name: 'diabetestyp2',
		weight: 1
	},
	{
		name: 'BergOchDalbana',
		weight: 1
	},
	{
		name: 'diabetesf\u00f6r\u00e4lder',
		weight: 1
	},
	{
		name: 'Omnipod',
		weight: 1
	},
	{
		name: 'V\u00e4rldsklass',
		weight: 1
	},
	{
		name: 'sk\u00f6terskor',
		weight: 1
	},
	{
		name: 'icamaxi',
		weight: 1
	},
	{
		name: 'myndigheter',
		weight: 1
	},
	{
		name: 'djur',
		weight: 1
	},
	{
		name: 'katt',
		weight: 1
	},
	{
		name: 'hund',
		weight: 1
	},
	{
		name: 'technology',
		weight: 1
	},
	{
		name: 'UngMedMS',
		weight: 1
	},
	{
		name: 'blodsockerkurva',
		weight: 1
	},
	{
		name: 'dexcomg6',
		weight: 2
	},
	{
		name: 'vasaloppet',
		weight: 1
	},
	{
		name: 'springvasaloppet',
		weight: 1
	},
	{
		name: 'KidneyMonth',
		weight: 1
	},
	{
		name: 'Solna',
		weight: 1
	},
	{
		name: 'leifgroopaward',
		weight: 4
	},
	{
		name: 'tobak',
		weight: 1
	},
	{
		name: 'sd',
		weight: 1
	},
	{
		name: 'inkludering',
		weight: 1
	},
	{
		name: 'Yle',
		weight: 1
	},
	{
		name: 'lifesolnacentrum',
		weight: 1
	},
	{
		name: 'solna',
		weight: 1
	},
	{
		name: 'solnacentrum',
		weight: 1
	},
	{
		name: 'life',
		weight: 1
	},
	{
		name: 'hj\u00e4rt',
		weight: 1
	},
	{
		name: '1',
		weight: 1
	},
	{
		name: 'oscarsteatern',
		weight: 1
	},
	{
		name: 'Link\u00f6pinguniversitet',
		weight: 1
	},
	{
		name: 'medicinteknik',
		weight: 3
	},
	{
		name: 'Diabetologisktv\u00e5rm\u00f6te',
		weight: 1
	},
	{
		name: 'sockerbiten',
		weight: 2
	},
	{
		name: 'diabetesappar',
		weight: 1
	},
	{
		name: 'alltomdiabetes',
		weight: 1
	},
	{
		name: 'V\u00e4rldsh\u00e4lsodagen',
		weight: 1
	},
	{
		name: 'svantep\u00e4\u00e4bo',
		weight: 1
	},
	{
		name: 'svantepaabo',
		weight: 1
	},
	{
		name: 'sockerbitenontour',
		weight: 1
	},
	{
		name: 'l\u00f6parstyrka',
		weight: 1
	},
	{
		name: 't1strong',
		weight: 1
	},
	{
		name: 'vardpol',
		weight: 1
	},
	{
		name: 'omv\u00e5rdnad',
		weight: 1
	},
	{
		name: 'personcentreradv\u00e5rd',
		weight: 1
	},
	{
		name: 'diabetesmammorna',
		weight: 1
	},
	{
		name: 'liberalerna',
		weight: 1
	},
	{
		name: 'skeaik',
		weight: 1
	},
	{
		name: 'smslutspel',
		weight: 1
	},
	{
		name: 'J\u00e4vlaSkitsjukdom',
		weight: 1
	},
	{
		name: 'biotech',
		weight: 2
	},
	{
		name: 'plantbased',
		weight: 1
	},
	{
		name: 'type2diabetes',
		weight: 1
	},
	{
		name: 'mat',
		weight: 1
	},
	{
		name: 'digitalisering',
		weight: 1
	},
	{
		name: 'SwecareRisingStarAward19',
		weight: 1
	},
	{
		name: 'prevent',
		weight: 1
	},
	{
		name: 'Spriten',
		weight: 1
	},
	{
		name: 'mdtglobalchamps18',
		weight: 1
	},
	{
		name: 'dexcom',
		weight: 1
	},
	{
		name: 'g6',
		weight: 1
	},
	{
		name: 'sensor',
		weight: 1
	},
	{
		name: 'blodglukos',
		weight: 1
	},
	{
		name: 'tidsomst\u00e4llningen',
		weight: 1
	},
	{
		name: 'uppfuckat',
		weight: 1
	},
	{
		name: 'l\u00e5tsastid',
		weight: 1
	},
	{
		name: 'G\u00f6teborg',
		weight: 1
	}
];

var wordDataSmall = Highcharts.reduce(
	wordData,
	function(arr, word) {
		if (word.weight > 4) {
			arr.push(word);
		}
		return arr;
	},
	[]
);

Highcharts.chart('container-words', {
	chart: {
		height: (9 / 16) * 100 + '%' // 16:9 ratio
	},
	credits: {
		enabled: false
	},
	exporting: { enabled: false },
	series: [
		{
			type: 'wordcloud',
			data: wordDataSmall,
			name: 'Times mentioned',
			threshold: 1
		}
	],
	title: {
		text: 'Hashtag Usage (Word Cloud)'
	},
	subtitle: {
		text: 'Main tags and frequency'
	}
});

// Bubble graph
const options = {
	exporting: { enabled: false },
	credits: {
		enabled: false
	},
	chart: {
		type: 'packedbubble',
		height: (9 / 16) * 100 + '%' // 16:9 ratio
	},
	title: {
		text: 'Topic Modelling (Bubble Graph)'
	},
	subtitle: {
		text: 'Latent Dirichlet allocation'
	},
	tooltip: {
		useHTML: true,
		pointFormat: '<b>{point.name}:</b> {point.y} occurrences'
	},
	plotOptions: {
		packedbubble: {
			minSize: '40',
			maxSize: '200',
			zMin: 0,
			zMax: 1000,
			layoutAlgorithm: {
				splitSeries: false,
				gravitationalConstant: 0.02
			},
			dataLabels: {
				enabled: true,
				format: '{point.name}',
				filter: {
					property: 'y',
					operator: '>',
					value: 85
				},
				style: {
					color: 'black',
					textOutline: 'none',
					fontWeight: 'normal',
					fontSize: '18px'
				}
			}
		}
	},
	series: [
		{
			name: 'Topic 0',
			data: [
				{
					name: 'blodsocker',
					value: 214
				},
				{
					name: 'finns',
					value: 128
				},
				{
					name: 'm\u00e5nga',
					value: 79
				},
				{
					name: 'm\u00e4nniskor',
					value: 71
				},
				{
					name: 'sjukdom',
					value: 68
				},
				{
					name: 'bland',
					value: 67
				},
				{
					name: 'borde',
					value: 62
				}
			]
		},
		{
			name: 'Topic 1',
			data: [
				{
					name: '2-diabetes',
					value: 231
				},
				{
					name: 'dagens',
					value: 91
				},
				{
					name: 'v\u00e4rldsdiabetesdagen',
					value: 81
				},
				{
					name: 'sverige',
					value: 78
				},
				{
					name: 'socker',
					value: 72
				},
				{
					name: 'diabetesgalan',
					value: 70
				},
				{
					name: '\u00e4ldreboende',
					value: 70
				}
			]
		},
		{
			name: 'Topic 2',
			data: [
				{
					name: 'kommer',
					value: 656
				},
				{
					name: 'swisha',
					value: 575
				},
				{
					name: 'diabetesfonden',
					value: 571
				},
				{
					name: 'tweet',
					value: 524
				},
				{
					name: 'insulin',
					value: 385
				},
				{
					name: 'jobbar',
					value: 105
				},
				{
					name: 'morgon',
					value: 102
				}
			]
		},
		{
			name: 'Topic 3',
			data: [
				{
					name: 'ligger',
					value: 101
				},
				{
					name: 'insulin',
					value: 84
				},
				{
					name: 'd\u00e5ligt',
					value: 83
				},
				{
					name: 'behandling',
					value: 80
				},
				{
					name: 'barndiabetesfonden',
					value: 72
				},
				{
					name: 'patienter',
					value: 71
				},
				{
					name: 'b\u00e4ttre',
					value: 60
				}
			]
		},
		{
			name: 'Topic 4',
			data: [
				{
					name: 'insulinpump',
					value: 433
				},
				{
					name: 'dotter',
					value: 432
				},
				{
					name: 'sn\u00e4lla',
					value: 425
				},
				{
					name: 'twitter',
					value: 420
				},
				{
					name: 'troligen',
					value: 418
				},
				{
					name: 'tappat',
					value: 414
				},
				{
					name: 'fj\u00e4ll',
					value: 412
				}
			]
		}
	]
};

Highcharts.chart('topic-bubble-graph', options);
