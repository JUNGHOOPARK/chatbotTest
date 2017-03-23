
	module.exports.style = ['?', '모던', '북유럽', '클래식', '프로방스&로맨틱', '빈티지', '한국&아시아', '미니멀리즘', '인더스트리얼', '기타', '앤틱', '내추럴'];
    module.exports.siteContract  = [' ', '임대\u00b7매매 계약 완료', '임대 매매 계약 진행중', '장소 찾는 중'];
    module.exports.siteStatus  = [' ', '철거 완료(공사진행 가능)', '철거 필요', '확인 안됨'];
    module.exports.jobScope = [' ', '전체', '부분공사(작업)', '신축', '리노베이션'];
    module.exports.mConstruction = [' ', '목', '벽돌', '시멘트블록', '철근콘크리트', '철골', '철골철근콘크리트'];
    module.exports.structureType = [' ', '라멘', '벽식', '트러스', '아치', '플랫슬라이브', '셀', '스페이스 프레임', '현수식', '막'];
	module.exports.division = {
		100: '상업',
		101: '의류/잡화',
		102: '뷰티',
		103: '프렌차이즈',
		104: '주점/호프',
		105: 'Bar',
		106: '레스토랑',
		107: '일반 음식점',
		108: '카페',
		109: '기타',

		200: '업무',
		201: '업무실',
		202: '회의실',
		203: '휴게실',
		204: '홀,로비',
		205: '기타',

		300: '주거',
		301: '거실',
		302: '주방/씽크대',
		303: '화장실/욕실',
		304: '현관/베란다',
		305: '침실',

		400: '교육',
		401: '학교',
		402: '학원',
		403: '유치원/어린이집',
		404: '독서실',
		405: '기타',

		500: '의료',
		501: '병원/의원',
		502: '동물병원',
		503: '요양원',
		504: '약국',
		505: '기타',

		600: '건축',
		601: '리모뎅링',
		602: '신축/증축',
		603: '조경',

		700: '운동',
		701: '스포츠 센터',
		702: '휘트니스/요가',
		703: '체육도장',
		704: '골프 연습장',
		705: '볼링장',
		706: '기타',

		800: '기타',
		801: '교회/성당',
		802: '절/사원',
		803: '전시/미술',
		804: '영화/공연',
		805: '찜질방/사우나',
		806: '호텔/모텔',
		807: '웨딩홀',
		808: '그 외 공간'

	};	//form_four
	module.exports.sizeType = ['평', '제곱미터'];


	module.exports.career = ['1년 미만', '1년 이상 3년 미만', '3년 이상 5년 미만', '5년 이상 10년 미만', '10년 이상 20년 미만', '20년 이상'];
	//포트폴리오 예산범위 수정
	module.exports.budgetPre = ['10만원 이하', '10 ~ 100만원 사이', '100 ~ 1,000만원 사이', '1,000 ~ 1억원 사이', '1억 ~ 10억원 사이', '10억 ~ 20억원 사이', '20억 이상'];
	module.exports.budget = {
		999: '예산범위 선택',

		//10만원 이하
		100: '10만원 이하',
		101: '10만원 이하',

		200: '10 ~ 100만원 사이',

		201: '10 ~ 20만원 사이',
		202: '20 ~ 30만원 사이',
		203: '30 ~ 40만원 사이',
		204: '40 ~ 50만원 사이',
		205: '50 ~ 60만원 사이',
		206: '60 ~ 70만원 사이',
		207: '70 ~ 80만원 사이',
		208: '80 ~ 90만원 사이',
		209: '90 ~ 100만원 사이',

		300: '100 ~ 1,000만원 사이',

		301: '100 ~ 200만원 사이',
		302: '200 ~ 300만원 사이',
		303: '300 ~ 400만원 사이',
		304: '400 ~ 500만원 사이',
		305: '500 ~ 600만원 사이',
		306: '600 ~ 700만원 사이',
		307: '700 ~ 800만원 사이',
		308: '800 ~ 900만원 사이',
		309: '900 ~ 1,000만원 사이',

		400: '1,000 ~ 1억원 사이',

		401: '1,000 ~ 2,000만원 사이',
		402: '2,000 ~ 3,000만원 사이',
		403: '3,000 ~ 4,000만원 사이',
		404: '4,000 ~ 5,000만원 사이',
		405: '5,000 ~ 6,000만원 사이',
		406: '6,000 ~ 7,000만원 사이',
		407: '7,000 ~ 8,000만원 사이',
		408: '8,000 ~ 9,000만원 사이',
		409: '9,000 ~ 1억원 사이',

		500: '1억 ~ 10억원 사이',

		501: '1억 ~ 1억 5천만원 사이',
		502: '1억 5천 ~ 2억원 사이',
		503: '2억 ~ 2억 5천만원 사이',
		504: '2억 5천 ~ 3억원 사이',
		505: '3억 ~ 3억 5천만원 사이',
		506: '3억 5천 ~ 4억원 사이',
		507: '4억 ~ 4억 5천만원 사이',
		508: '4억 5천 ~ 5억원 사이',
		509: '5억 ~ 6억원 사이',
		510: '6억 ~ 7억원 사이',
		511: '7억 ~ 8억원 사이',
		512: '8억 ~ 9억원 사이',
		513: '9억 ~ 10억원 사이',

		600: '10억 ~ 20억원 사이',

		601: '10억 ~ 11억원 사이',
		602: '11억 ~ 12억원 사이',
		603: '12억 ~ 13억원 사이',
		604: '13억 ~ 14억원 사이',
		605: '14억 ~ 15억원 사이',
		606: '15억 ~ 16억원 사이',
		607: '16억 ~ 17억원 사이',
		608: '17억 ~ 18억원 사이',
		609: '18억 ~ 19억원 사이',
		610: '19억 ~ 20억원 사이',

		700: '20억원 이상',
		701: '20억원 이상'
	};
	module.exports.skill = ['관심', '초급', '중급', '고급', '특급'];
	module.exports.eduStatus = ['재학', '휴학', '졸업', '자퇴'];


	module.exports.locationMap = {
		0: '전세계',
		82000000: '전국',


		82001000: '서울',

		82001001: '강남구',
		82001002: '강동구',
		82001003: '강북구',
		82001004: '강서구',
		82001005: '관악구',
		82001006: '광진구',
		82001007: '구로구',
		82001008: '금천구',
		82001009: '노원구',
		82001010: '도봉구',
		82001011: '동대문구',
		82001012: '동작구',
		82001013: '마포구',
		82001014: '서대문구',
		82001015: '서초구',
		82001016: '성동구',
		82001017: '성북구',
		82001018: '송파구',
		82001019: '양천구',
		82001020: '영등포구',
		82001021: '용산구',
		82001022: '은평구',
		82001023: '종로구',
		82001024: '중구',
		82001025: '중랑구',

		82002000: '경기',

		82002001: '가평군',
		82002002: '고양시 덕양구',
		82002003: '고양시 일산동구',
		82002004: '고양시 일산서구',
		82002005: '과천시',
		82002006: '광명시',
		82002007: '광주시',
		82002008: '구리시',
		82002009: '군포시',
		82002010: '김포시',
		82002011: '남양주시',
		82002012: '동두천시',
		82002013: '부천시 소사구',
		82002014: '부천시 오정구',
		82002015: '부천시 원미구',
		82002016: '성남시 분당구',
		82002017: '성남시 수정구',

		82002018: '안산시 단원구',
		82002019: '안산시 상록구',
		82002020: '안성시',
		82002021: '안양시 동안구',
		82002022: '안양시 만안구',
		82002023: '양주시',
		82002024: '용인시 처인구',
		82002025: '의왕시',
		82002026: '의정부시',
		82002027: '이천시',
		82002028: '파주시',
		82002029: '평택시',
		82002030: '포천시',
		82002031: '하남시',
		82002032: '화성시',

        82002033: '성남시 중원구',
        82002034: '수원시 장안구',
        82002035: '수원시 권선구',
        82002036: '수원시 팔달구',
        82002037: '수원시 영통구',
        82002038: '시흥시',
        82002039: '양평군',
        82002040: '여주시',
        82002041: '연천군',
        82002042: '오산시',
        82002043: '용인시 기흥구',
        82002044: '용인시 수지구',


		82003000: '인천',

		82003001: '강화구',
		82003002: '계양구',
		82003003: '남구',
		82003004: '남동구',
		82003005: '동구',
		82003006: '부평구',
		82003007: '서구',
		82003008: '연수구',
		82003009: '옹진군',
		82003010: '중구',


		82004000: '강원',

		82004001: '강릉시',
		82004002: '고성군',
		82004003: '동해시',
		82004004: '삼척시',
		82004005: '속초시',
		82004006: '양구군',
		82004007: '양양군',
		82004008: '영월군',
		82004009: '원주시',
		82004010: '인제군',
		82004011: '정선군',
		82004012: '철원군',
		82004013: '춘천시',
		82004014: '태백시',
		82004015: '평창군',
		82004016: '홍천군',
		82004017: '화천군',
		82004018: '횡성군',


		82005000: '대전',

		82005001: '대덕구',
		82005002: '동구',
		82005003: '서구',
		82005004: '유성구',
		82005005: '중구',


		82006000: '세종',

		82006001: '세종시',


		82007000: '충남',

		82007001: '계룡시',
		82007002: '공주시',
		82007003: '금산군',
		82007004: '논산시',
		82007005: '당진시',
		82007006: '보령시',
		82007007: '부여군',
		82007008: '서산시',
		82007009: '서천군',
		82007010: '아산시',
		82007011: '예산군',
		82007012: '천안시 동남구',
		82007013: '천안시 서북구',
		82007014: '청양군',
		82007015: '태양군',
		82007016: '홍성군',


		82008000: '충북',
		82008001: '괸산군',
		82008002: '단양군',
		82008003: '보은군',
		82008004: '영동군',
		82008005: '옥천군',
		82008006: '음성군',
		82008007: '제천시',
		82008008: '증평군',
		82008009: '진천군',
		82008010: '청주시 상당구',
		82008011: '청주시 서원구',
		82008012: '청주시 청원구',
		82008013: '청주시 흥덕구',
		82008014: '충주시',


		82009000: '부산',
		82009001: '강서구',
		82009002: '금정구',
		82009003: '기장군',
		82009004: '남구',
		82009005: '동구',
		82009006: '동래구',
		82009007: '부산 진구',
		82009008: '북구',
		82009009: '사상구',
		82009010: '사하구',
		82009011: '서구',
		82009012: '수영구',
		82009013: '연제구',
		82009014: '영도구',
		82009015: '중구',
		82009016: '해운대구',


		82010000: '울산',

		82010001: '남구',
		82010002: '동구',
		82010003: '북구',
		82010004: '울주군',
		82010005: '중구',


		82011000: '경남',

		82011001: '거제시',
		82011002: '거창군',
		82011003: '고성군',
		82011004: '김해시',
		82011005: '남해군',
		82011006: '밀양시',
		82011007: '사천시',
		82011008: '산청군',
		82011009: '양산시',
		82011010: '의령군',
		82011011: '진주시',
		82011012: '창녕군',
		82011013: '창원시 마산합포구',
		82011014: '창원시 마사회원구',
		82011015: '창원시 성산구',
		82011016: '창원시 의창구',
		82011017: '창원시 진해구',
		82011018: '통영시',
		82011019: '하동군',
		82011020: '함안군',
		82011021: '함양군',
		82011022: '합천군',


		82012000: '경북',

		82012001: '경산시',
		82012002: '경주시',
		82012003: '고령군',
		82012004: '구미시',
		82012005: '군위군',
		82012006: '김천시',
		82012007: '문경시',
		82012008: '봉화군',
		82012009: '상주시',
		82012010: '성주군',
		82012011: '안동시',
		82012012: '영덕군',
		82012013: '영양군',
		82012014: '영주시',
		82012015: '영천시',
		82012016: '에천군',
		82012017: '울릉군',
		82012018: '울진군',
		82012019: '의성군',
		82012020: '청도군',
		82012021: '청송군',
		82012022: '칠곡군',
		82012023: '포항시 남구',
		82012024: '포항시 북구',


		82013000: '대구',

		82013001: '남구',
		82013002: '달서구',
		82013003: '달성군',
		82013004: '동구',
		82013005: '북구',
		82013006: '서구',
		82013007: '수성수',
		82013008: '중구',


		82014000: '광주',

		82014001: '광산구',
		82014002: '남구',
		82014003: '동구',
		82014004: '북구',
		82014005: '서구',


		82015000: '전남',

		82015001: '강진군',
		82015002: '고흥군',
		82015003: '곡성군',
		82015004: '광양시',
		82015005: '구례군',
		82015006: '나주시',
		82015007: '담양군',
		82015008: '목포시',
		82015009: '무안군',
		82015010: '보성군',
		82015011: '순천시',
		82015012: '신안군',
		82015013: '여수시',
		82015014: '영광군',
		82015015: '영암군',
		82015016: '완도군',
		82015017: '장성군',
		82015018: '장흥군',
		82015019: '진도군',
		82015020: '함평군',
		82015021: '해남군',
		82015022: '화순군',


		82016000: '전북',

		82016001: '고창군',
		82016002: '군산시',
		82016003: '김제시',
		82016004: '남원시',
		82016005: '무주군',
		82016006: '부안군',
		82016007: '순창군',
		82016008: '완주군',
		82016009: '익산시',
		82016010: '임실군',
		82016011: '장수군',
		82016012: '전주시 덕진구',
		82016013: '전주시 완산구',
		82016014: '정읍시',
		82016015: '진안군',


		82017000: '제주',

		82017001: '서귀포시',
		82017002: '제주시'
	};
	module.exports.specialty = {
		/*
		total: {
			name: '종합',
			interior: '디자인 + 시공',
			interiorConsulting: '디자인',
			interior2: '시공',
			styling: '스타일링',


			construct: '건축 설계',
			contractors: '건축 시공',
			supervision: '건축 (감리)',

			landscapeDesign: '조경 설계',
			landscapeContractor: '조경 시공',
			gardening: '가드닝'
		},
		*/
		interior: {
			name: '인테리어',
			interiorFull: '디자인 + 시공',
			interiorDesign: '디자인',
			interiorContractor: '시공',
			interiorStyling: '스타일링'
		},
		construction: {
			name: '건축',
			constructionDesign: '건축 설계',
			constructionContractor: '건축 시공',
			constructionSupervision: '건축 감리'
		},
		landscape: {
			name: '조경',
			landscapeDesign: '조경 설계',
			landscapeContractor: '조경 시공',
			landscapeGardening: '가드닝'
		},
		electricComm: {
			name: '전기/통신',
			electric: '전기공사',
			light: '조명공사',
			broadcast: '음향/방송',
			internet: '통신/인터넷',
			cctv: 'CCTV',
			keyPhone: '키폰'
		},
		equipment: {
			name: '설비',
			heatingCooling: '냉·난방(에어컨)',
			pipe: '배관·하수',
			ventilator: '환풍기·덕트',
			toilet: '세면·변기',
			boiler: '보일러',
			fireFighting: '소화·스프링쿨러',
			gas: '가스'
		},
		masonry: {
			name: '조적 타일',
			brick: '벽돌',
			tile: '타일/줄눈',
			stone: '돌공사(대리석, 화강석)'
		},
		frame: {
			name: '창호/금속',
			sash: '샷시',
			glass: '유리',
			gate: '도어(스틸, 폴딩 등)',
			steelFrame: '경량철골',
			indoorSculpture: '실내 조형물'
		},
		wood: {
			name: '목수',
			door: '도어(문틀, 중문 등)',
			woodCeil: '목재천정',
			moulding: '몰딩, 걸레받이',
			bulkheadArtwall: '칸막이, 아트월',
			terrace: '테라스, 목재물'
		},
		coating: {
			name: '도장/수장/방수',
			floorCoating: '도장(에폭시 등)',
			waterproofPaint: '방수/페인트',
			ceiling: '천정마감',
			papering: '도배/장판',
			film: '필름, 시트지',
			floor: '마루'
		},
		furniture: {
			name: '가구',
			furnitureDesign: '가구 디자이너',
			customFurniture: '맞춤가구',
			kitchenFurnitureSink: '주방가구/씽크대',
			livingDresser: '거실장, 붙박이',
			officeFurniture: '오피스가구'
		},
		steelEtc: {
			name: '잡철물',
			handrail: '핸드레일',
			fireDoor: '방화문',
			securityWindow: '방범창',
			shutter: '샷타'
		},
		etc: {
			name: '기타영역',
			photographer: '사진작가',
			sign: '간판',
			cleaning: '청소',
			demolition: '철거',
			wasteTreatment: '폐기물처리',
			blindsCurtains: '블라인드/커튼',
			waterPurifier: '정수기'
		},
		inputEtc: {
			name: '기타',
			msg: '직접입력'
		}
	};
	module.exports.specialtyExplain = {
		'interior:interiorFull': '디자인 + 시공은 공간의 가치 창조를 강점으로 갖고 있는 전문 영역 이에요.<br><br>디자인과 시공 모두 할 수 있지만, 디자인에 더욱 강점이 있어요. 디자인 비용을 포함할 수 있어요. <br><span>(현재 \'디자인 전문 인테리어\'는 추천을 통해서만 가입할 수 있습니다.<br>디자인 전문 인테리어로 가입을 원하시는분은 먼저 \'종합 인테리어\'로 가입 후 페이지 하단 이메일로 문의해 주세요)</span>',
		'interior:interiorDesign': '디자인은 인테리어를 시작하기 전, 조언이 필요한 경우 전문적 상담을 해주는 전문 영역 이에요.',
		'interior:interiorContractor': '시공은 쾌적한 실내 환경을 만들어내기 위해 마무리까지 책임지고 공사하는 전문 영역 이에요.<br><br>디자인 역시 포함될 수 있지만, 시공에 더욱 강점이 있어요.',
		'interior:interiorStyling': '스타일링은 가구와 소품 등을 활용해 잡지에 나오는 듯한 공간을 연출 하는 전문 영역 이에요.',
		'construction:constructionDesign': '건축설계는 건축물을 구축하기 위한 기능과 형태(美), 구조를 계획하여 구체화 하는 전문 영역 이에요.<br><br>건축물을 구상하여 도면 등에 표현하는 작업을 하고 있어요. 설계 비용을 포함할 수 있어요.',
		'construction:constructionContractor': '건축시공은 건축계획, 설계도면에 따라 실제로 공사를 시작하여 마무리까지 책임지고 공사하는 전문 영역 이에요.',
		'construction:constructionSupervision': '건축감리는 시공자 가 설계도에 따라 해당 공사를 진행하고 있는지 확인하는 전문 영역 이에요.',
		'landscape:landscapeDesign': '조경설계는 사람들이 주로 이용하는 공원, 광장 등의 공간을 아름답고 편리하게 계획, 설계하는 전문 영역 이에요.',
		'landscape:landscapeContractor': '조경시공은 조경설계, 도면에 따라 실제로 공사를 시작하여 마무리까지 책임지고 공사하는 전문 영역이에요.',
		'landscape:landscapeGardening': '가드닝은 해당시설의 실 내부, 외부의 조경을 관리하고 컨설팅 해주는 전문 영역이에요.',

		'electricComm': '전기 공사- 전기를 건물에 안전하게 공급분배하기 위해 배선 공사를 하는 전문 영역 이에요.<br><br>통신 공사- 전화선이나 인터넷 같은 네트워크를 설치하는 공사입니다. <br><span>(영역내 복수 항목 선택 가능)</span>',
		'equipment': '쾌적한 실내공간을 유지하기 위해 공기조화, 위생 및  소화, 가스, 공통배관설비 등의 공사를 하는 전문 영역 이에요. <br><span>(영역내 복수 항목 선택 가능)</span>',
		'masonry': '조적공사- 담장을 쌓듯 벽돌이나 블록을 쌓는 공사를 하는 전문 영역 이에요.<br><br>돌 공사- 건물 내부, 외부에 돌 을 붙이는 공사를 하는 전문 영역 이에요. <br><span>(영역내 복수 항목 선택 가능)</span>',
		'frame': '창호공사- 건물 내부를 외부와 차단시키기 위해 설치되는 각종 창이나 문 공사 등을 하는 전문 영역 이에요.<br><br>금속공사- 금속류를 다루는 공사 중 철골, 철근, 판금, 창호, 설비 공사를 제외한 공사를 하는 전문 영역 이에요. <br><span>(영역내 복수 항목 선택 가능)</span>',
		'wood': '목창호(도어), 가벽, 목재천장 등의 설치 공사를 하는 전문 영역 이에요.<br><br>목수 를 찾으시는 분들에게 적합한 전문 영역 이에요. <br><span>(영역내 복수 항목 선택 가능)</span>',
		'coating': '도장 공사- 건물 내부, 외부를 보호하고 기능을 부여하기 위해 최종 마감 공사를 하는 전문 영역이에요.<br>수장 공사- 건물 내부, 외부에 타일, 벽지 등을 사용하여 바닥, 벽, 천장을 아름답게 꾸미는 전문 영역 이에요.<br>방수 공사- 옥상, 욕실, 지하실, 외벽 등, 건물내부에 누수가 없도록 공사하는 전문 영역 이에요. <br><span>(영역내 복수 항목 선택 가능)</span>',
		'furniture': '현장에서 제작되어지는 가구는 목공사에 포함 됩니다. 공장에서 제작되는 씽크대, 쇼파, 테이블, 의자 등이 가구를 말합니다. <br><span>(영역내 복수 항목 선택 가능)</span>',
		'steelEtc': '철제 또는 금속의 재료로 사용되어 용접이나 부착되는 공사를 하는 전문 영역 이에요. <br><span>(영역내 복수 항목 선택 가능)</span>',
		'etc': '개별 전문가 분류에 포함되지 않은 영역이 나열 됩니다. <br><span>(영역내 복수 항목 선택 가능)</span>',
		'inputEtc': '자신의 전문 영역이 어디에도 속하지 않을 경우 직접 입력을 하시면 <br> 전문영역은 "기타"로 표기되고 해당 영역은 추후 검토하여 정규 영역으로 추가됩니다.'
	};
	module.exports.specialtyIcon = {
		interiorFull: '/img/main/de-interior-pro.png',
		interiorDesign: '/img/main/co-interior-pro.png',
		interiorStyling: '/img/main/co-interior-pro.png',
		constructionDesign: '/img/main/con-drawing-pro.png',
		constructionContractor: '/img/main/con-contractor-pro.png',
		constructionSupervision: '/images/bad.png',
		landscapeDesign: '/images/bad.png',
		landscapeContractor: '/images/bad.png',
		landscapeGardening: '/images/bad.png',

		electricComm: '/img/main/electricity-proelec.png',
		equipment: '/images/bad.png',
		masonry: '/img/main/tiling-pro.png',
		frame: '/img/main/sash-pro.png',
		wood: '/img/main/wood-carpnter-pro.png',
		coating: '/img/main/papering-pro.png',
		furniture: '/img/main/custom-furniture-pro.png',
		steelEtc: '/images/bad.png',
		etc: '/images/bad.png',
		inputEtc: '/images/bad.png'
	};
	module.exports.spaceBranding = ['설정 안됨', '가능', '불가능'];
	module.exports.mainSpecialty = ['', '상업공간', '주거공간', '업무공간', '기타공간'];
	module.exports.businessType = ['법인사업자', '개인/팀', '개인사업자'];
	module.exports.awardType = ['자격증', '수상경력'];


		// ### 주의  ###
		// ### 편집중 순서가 밀리거나 깊이가 틀리면 성질나서 사망 할 수 있습니다. ###
		// default 0이 선택 안함으로 되어 있어 1 부터 시작
	module.exports.portfolioDivision = {
		1: {
			name: '상업',
			1: {
				name: '요식/식당',
				1: '카페',
				2: '프렌차이즈',
				3: '레스토랑',
				4: '일반음식점',
				5: 'Bar/Club',
				6: '주점/호프/펍',
				7: '기타 (요식/식당)'
			},
			2: {
				name: '상업공간',
				1: '패션',
				2: '뷰티',
				3: '일반매장',
				4: '백화점/쇼핑몰',
				5: '전시회 부스',
				6: '팝업스토어',
				7: '기타 (상업공간)'
			},
			3: {
				name: '교육공간',
				1: '학원',
				2: '독서실',
				3: '유치원/어린이집',
				4: '연수/수련원',
				5: '학교/대학',
				6: '기타 (교육공간)'
			},
			4: {
				name: '의료공간',
				1: '일반병원/의원',
				2: '한방병원/한의원',
				3: '성형외과',
				4: '소아/내과',
				5: '치과',
				6: '동물병원',
				7: '약국',
				8: '기타 (의료공간)'
			},
			5: {
				name: '운동공간',
				1: '휘트니스/요가',
				2: '놀이형 공간',
				3: '골프연습장',
				4: '체육도장',
				5: '탁구/당구/볼링장',
				6: '기타 (운동공간)'
			},
			6: {
				name: '숙박공간',
				1: '호텔/모텔/레지던스',
				2: '게스트하우스',
				3: '펜션',
				4: '기타 (숙박공간)'
			},
			7: {
				name: '금융/중개',
				1: '금융(은행, 증권)',
				2: '중개사무소(부동산 등)',
				3: '기타 (금융/중개)'
			}
		},


		2: {
			name: '업무',
			1: {
				name: '사무공간',
				1: '사옥',
				2: '일반 사무실',
				3: '기타 (사무공간)'
			},
			2: {
				name: '특수업무공간',
				1: '방송/사진 스튜디오',
				2: '음향/레코딩 스튜디오',
				3: '컨트롤룸/서버룸',
				4: '기타 (특수업무공간)'
			}
		},


		3: {
			name: '주거',
			1: {
				name: '공동주택',
				1: '아파트/주상복합',
				2: '빌라/연립주택',
				3: '오피스텔/원룸',
				4: '기타 (공동주택)'
			},
			2: {
				name: '단독주택',
				1: '일반 단독주택',
				2: '협소주택',
				3: '별장/전원주택',
				4: '타운하우스',
				5: '한옥',
				6: '기타 (단독주택)'
			}
			/*
			 주거공간에 한해서 세부공간 정보를 제공?할수도
			 1: {
			 name: '세부공간',
			 1: '거실',
			 2: '주방/다이닝',
			 3: '아이방',
			 4: '욕실',
			 5: '침실',
			 6: '테라스/베란다',
			 7: '드레스룸',
			 8: '서제&작업실',
			 9: '현관/복도',
			 10: '기타'
			 }
			 */
		},


		4: {
			name: '문화/종교',
			1: {
				name: '문화공간',
				1: '전시/미술',
				2: '웨딩/예식',
				3: '영화관/공연장',
				4: '동·식물원/수족관',
				5: '테마파크',
				6: '기타 (문화공간)'
			},
			2: {
				name: '종교공간',
				1: '교회/성당',
				2: '사찰',
				3: '기타 (종교공간)'
			}
		},


		5: {
			name: '기타',
			1: {
				name: '기타 공간',
				1: '기타 공간'
			}
		},


		6: {
			name: '가구/생활용품',
			1: {
				name: '맞춤가구',
				1: '책상/의자',
				2: '서랍장',
				3: '거실가구(TV장 등)',
				4: '식탁',
				5: '붙박이장',
				6: '책꽂이',
				7: '옷장/수납가구',
				8: '사무/업소용 가구',
				9: '유아/어린이 가구',
				10: '화장대/거울',
				11: '소파',
				12: '침대',
				13: '주방가구',
				14: '엔틱가구/고가구',
				15: '기타 (맞춤가구)'
			},


			2: {
				name: '일반가구',
				1: '책상/의자',
				2: '서랍장',
				3: '거실가구(TV장 등)',
				4: '식탁',
				5: '붙박이장',
				6: '책꽂이',
				7: '옷장/수납가구',
				8: '사무/업소용 가구',
				9: '유아/어린이 가구',
				10: '화장대/거울',
				11: '소파',
				12: '침대',
				13: '주방가구',
				14: '엔틱가구/고가구',
				15: '기타 (일반가구)'
			},


			3: {
				name: '커튼',
				1: '창문/작은창 커튼',
				2: '거실/큰창 커튼',
				3: '암막 커튼',
				4: '극세사 커튼'
			},


			4: {
				name: '블라인드',
				1: '콤비 롤스크린',
				2: '실사/일러스트 롤스크린',
				3: '무지/암막 롤스크린'
			},


			5: {
				name: '조명',
				1: '테이블 램프',
				2: '천장등',
				3: '기타 (조명)'
			},


			6: {
				name: '욕실용품',
				1: '커튼',
				2: '거치대',
				3: '기타 (용품)'
			},


			7: {
				name: '주방가구',
				1: '렌지대/웨건',
				2: '그릇장/주방 수납장',
				3: '주방틈새 수납장',
				4: '기타 (주방가구)'
			}
		},

		//2017.01.25 박정후 건축 포트폴리오 추가..
        7: {
            name: '주거시설군',
            1: {
                name: '단독주택',
                1: '단독주택',
                2: '다중주택',
                3: '다가구주택',
                4: '공관'
            },
            2: {
                name: '공동주택',
                1: '아파트',
                2: '연립주택',
                3: '다세대주택',
                4: '기숙사'
            },
            3: {
                name: '업무시설',
                1: '공공업무시설',
                2: '일반업무시설'
            }
        },

        8: {
            name: '근린생활시설군',
            1: {
                name: '제1종 근린생활시설',
                1: '제1종 근린생활시설'
            },
            2: {
                name: '제2종 근린생활시설',
                1: '제2종 근린생활시설'
            }
        },
        9: {
            name: '문화 및 집회시설군',
            1: {
                name: '문화 및 집회시설',
                1: '공연장',
                2: '집회장',
                3: '관람장',
                4: '전시장',
                5: '동\u00b7식물원'
            },
            2: {
                name: '죵교시설',
                1: '종교집회장',
                2: '납골당'
            },
            3: {
                name: '위락시설',
                1: '단란주점',
                2: '유흥주점',
                3: '유원시설업의 시설',
                4: '무도장,무도학원',
                5: '카지노영업장'
            },
            4: {
                name: '관광 휴게시설',
                1: '야외음악당',
                2: '야외극장',
                3: '어린이회관',
                4: '휴게소'
            }
        },
        10: {
            name: '영업시설군',
            1: {
                name: '판매시설',
                1: '도\u00b7소매시장',
                2: '상점'
            },
            2: {
                name: '운동시설',
                1: '탁구장',
                2: '골프장',
                3: '체력단련장',
                4: '볼링장',
                5: '골프연습장',
                6: '놀이형시설',
                7: '기타'
            },
            3: {
                name: '숙박시설',
                1: '일반\u00b7생활 숙박시설',
                2: '관광숙박시설',
                3: '고시원'
            }
        },
        11: {
            name: '교육 및 복지시설군',
            1: {
                name: '의료시설',
                1: '병원',
                2: '격리병원'
            },
            2: {
                name: '교육연구시설',
                1: '학교',
                2: '교육원',
                3: '직업훈련소',
                4: '학원',
                5: '연구소',
                6: '도서관'
            },
            3: {
                name: '노유자시설',
                1: '아동관련시설',
                2: '노인복지시설'
            },
            4: {
                name: '수련시설',
                1: '생활권 수련시설',
                2: '자연권 수련시설',
                3: '유스호스텔'
            },
            5: {
                name: '야영장시설',
                1: '야영장시설'
            }
        },
        12: {
            name: '산업 등의 시설군',
            1: {
                name: '운수시설',
                1: '여객자동차터미널',
                2: '철도시설',
                3: '공항시설',
                4: '항만시설'
            },
            2: {
                name: '창고시설',
                1: '창고',
                2: '하역장',
                3: '물류터미널',
                4: '집배송시설'
            },
            3: {
                name: '공장',
                1: '공장'
            },
            4: {
                name: '위험물 저장 및 처리시설',
                1: '주유소',
                2: '액화석유가스충전소',
                3: '위험물제조소',
                4: '위험물저장소',
                5: '위험물취급소',
                6: '액화가스취급소'
            },
            5: {
                name: '자원순환 관련 시설',
                1: '자원순환 관련 시설'
            },
            6: {
                name: '묘지관련 시설',
                1: '묘지관련 시설'
            },
            7: {
                name: '장례식장',
                1: '장례식장'
            }

        },
        13: {
            name: '전기통신시설군',
            1: {
                name: '방송통신 시설',
                1: '방송국',
                2: '전신전화국',
                3: '촬영소',
                4: '통신용시설'
            },
            2: {
                name: '발전시설',
                1: '발전소'
            }
        },
        14: {
            name: '자동차관련시설군',
            1: {
                name: '자동차관련시설',
                1: '주차장',
                2: '세차장',
                3: '폐차장',
                4: '검사장',
                5: '매매장',
                6: '정비공장',
                7: '운전학원 및 정비시설',
                8: '차고 및 주기장'
            }
        },
    };
	module.exports.reportType = ['사진', '댓글', '리플', '리뷰', '포트 폴리오', '프로필', '공지 댓글'];
	module.exports.reportKind = ['광고/음란물', '욕설/부적절한 언어', '내용 오류', '회원 비방/분란 유도', '도배성 게시물', '부적절한 내용', '불법 정보', '저작권 침해', '기타'];
	module.exports.processItem = ['', '전화상담', '상담', '방문 실측', '컨셉 회의', '디자인 미팅', '견적문의', '공사여부 결정', '피드백', '착공', '공사완료', 'A/S', '기타'];
	module.exports.processCost = ['', '무료', '계약금', '착수금', '중도금', '잔금', '디자인 비용', '설계 비용', '상담 비용', '방문실측 비용', '기타'];

	module.exports.projectCost = '프로젝트 금액 범위';
	module.exports.estimateCost = '견적가 범위';
	module.exports.designEstimate = '디자인 비용';
	module.exports.businessTripCost = '출장비 청구 비용';
	module.exports.siteMeasureCost = '현장실측 비용';
	module.exports.designingEstimate = '설계비용';
	module.exports.compensationCost = '급여(일)';
	module.exports.adviceCost = '상담비용';



	//2017.01.25 건축포트폴리오 설계비용/시공비용 부분 추가
    module.exports.budgetPreA1 = ['10만원 이하', '10 ~ 100만원 사이', '100 ~ 1,000만원 사이', '1,000 ~ 1억원 사이', '1억 ~ 10억원 사이', '10억 ~ 20억원 사이', '20억 이상'];
    module.exports.budgetPreA2 = ['100 ~ 1,000만원 사이', '1,000 ~ 1억원 사이', '1억 ~ 10억원 사이', '10억 ~ 20억원 사이', '20억 ~ 30억원 사이', '30억 ~ 40억원 사이', '40억 ~ 50억원 사이', '50억 ~ 100억원 사이', '100억 ~ 200억원 사이', '200억원 이상'];
    module.exports.budgetA1 = {
        999: '예산범위 선택',

        //10만원 이하
        100: '10만원 이하',
        101: '10만원 이하',

        200: '10 ~ 100만원 사이',

        201: '10 ~ 20만원 사이',
        202: '20 ~ 30만원 사이',
        203: '30 ~ 40만원 사이',
        204: '40 ~ 50만원 사이',
        205: '50 ~ 60만원 사이',
        206: '60 ~ 70만원 사이',
        207: '70 ~ 80만원 사이',
        208: '80 ~ 90만원 사이',
        209: '90 ~ 100만원 사이',

        300: '100 ~ 1,000만원 사이',

        301: '100 ~ 200만원 사이',
        302: '200 ~ 300만원 사이',
        303: '300 ~ 400만원 사이',
        304: '400 ~ 500만원 사이',
        305: '500 ~ 600만원 사이',
        306: '600 ~ 700만원 사이',
        307: '700 ~ 800만원 사이',
        308: '800 ~ 900만원 사이',
        309: '900 ~ 1,000만원 사이',

        400: '1,000 ~ 1억원 사이',

        401: '1,000 ~ 2,000만원 사이',
        402: '2,000 ~ 3,000만원 사이',
        403: '3,000 ~ 4,000만원 사이',
        404: '4,000 ~ 5,000만원 사이',
        405: '5,000 ~ 6,000만원 사이',
        406: '6,000 ~ 7,000만원 사이',
        407: '7,000 ~ 8,000만원 사이',
        408: '8,000 ~ 9,000만원 사이',
        409: '9,000 ~ 1억원 사이',

        500: '1억 ~ 10억원 사이',

        501: '1억 ~ 1억 5천만원 사이',
        502: '1억 5천 ~ 2억원 사이',
        503: '2억 ~ 2억 5천만원 사이',
        504: '2억 5천 ~ 3억원 사이',
        505: '3억 ~ 3억 5천만원 사이',
        506: '3억 5천 ~ 4억원 사이',
        507: '4억 ~ 4억 5천만원 사이',
        508: '4억 5천 ~ 5억원 사이',
        509: '5억 ~ 5억 5천만원 사이',
        510: '5억 5천 ~ 6억 사이',
        511: '6억 ~ 6억 5천만원 사이',
        512: '6억 5천 ~7억 사이',
        513: '7억 ~7억 5천만원 사이',
        514: '7억 5천 ~ 8억 사이',
        515: '8억 ~ 8억 5천만원 사이',
        516: '8억 5천 ~ 9억 사이',
        517: '9억 ~ 9억 5천만원 사이',
        518: '9억5천 ~ 10억원 사이',

        600: '10억 ~ 20억원 사이',

        601: '10억 ~ 10억 5천만원 사이',
        602: '10억 5천 ~ 11억원 사이',
        603: '11억 ~ 11억 5천만원 사이',
        604: '11억 5천 ~ 12억원 사이',
        605: '12억 ~ 12억 5천만원 사이',
        606: '12억 5천 ~ 13억원 사이',
        607: '13억 ~ 13억 5천만원 사이',
        608: '13억 5천 ~ 14억원 사이',
        609: '14억 ~ 14억 5천만원 사이',
        610: '14억 5천 ~ 15억원 사이',
        611: '15억 ~ 15억 5천만원 사이',
        612: '15억 5천 ~ 16억원 사이',
        613: '16억 ~ 16억 5천만원 사이',
        614: '16억 5천 ~ 17억원 사이',
        615: '17억 ~ 17억 5천만원 사이',
        616: '17억 5천 ~ 18억원 사이',
        617: '18억 ~ 18억 5천만원 사이',
        618: '18억 5천 ~ 19억원 사이',
        619: '19억 ~ 19억 5천만원 사이',
        620: '19억 5천 ~ 20억원 사이',

        700: '20억원 이상',
        701: '20억원 이상'
    };

    module.exports.budgetA2 = {
        9999: '예산범위 선택',


        300: '100 ~ 1,000만원 사이',

        301: '100 ~ 200만원 사이',
        302: '200 ~ 300만원 사이',
        303: '300 ~ 400만원 사이',
        304: '400 ~ 500만원 사이',
        305: '500 ~ 600만원 사이',
        306: '600 ~ 700만원 사이',
        307: '700 ~ 800만원 사이',
        308: '800 ~ 900만원 사이',
        309: '900 ~ 1,000만원 사이',

        400: '1,000 ~ 1억원 사이',

        401: '1,000 ~ 2,000만원 사이',
        402: '2,000 ~ 3,000만원 사이',
        403: '3,000 ~ 4,000만원 사이',
        404: '4,000 ~ 5,000만원 사이',
        405: '5,000 ~ 6,000만원 사이',
        406: '6,000 ~ 7,000만원 사이',
        407: '7,000 ~ 8,000만원 사이',
        408: '8,000 ~ 9,000만원 사이',
        409: '9,000 ~ 1억원 사이',

        500: '1억 ~ 10억원 사이',

        501: '1억 ~ 1억 5천만원 사이',
        502: '1억 5천 ~ 2억원 사이',
        503: '2억 ~ 2억 5천만원 사이',
        504: '2억 5천 ~ 3억원 사이',
        505: '3억 ~ 3억 5천만원 사이',
        506: '3억 5천 ~ 4억원 사이',
        507: '4억 ~ 4억 5천만원 사이',
        508: '4억 5천 ~ 5억원 사이',
        509: '5억 ~ 5억 5천만원 사이',
        510: '5억 5천 ~ 6억 사이',
        511: '6억 ~ 6억 5천만원 사이',
        512: '6억 5천 ~7억 사이',
        513: '7억 ~7억 5천만원 사이',
        514: '7억 5천 ~ 8억 사이',
        515: '8억 ~ 8억 5천만원 사이',
        516: '8억 5천 ~ 9억 사이',
        517: '9억 ~ 9억 5천만원 사이',
        518: '9억5천 ~ 10억원 사이',

        600: '10억 ~ 20억원 사이',

        601: '10억 ~ 10억 5천만원 사이',
        602: '10억 5천 ~ 11억원 사이',
        603: '11억 ~ 11억 5천만원 사이',
        604: '11억 5천 ~ 12억원 사이',
        605: '12억 ~ 12억 5천만원 사이',
        606: '12억 5천 ~ 13억원 사이',
        607: '13억 ~ 13억 5천만원 사이',
        608: '13억 5천 ~ 14억원 사이',
        609: '14억 ~ 14억 5천만원 사이',
        610: '14억 5천 ~ 15억원 사이',
        611: '15억 ~ 15억 5천만원 사이',
        612: '15억 5천 ~ 16억원 사이',
        613: '16억 ~ 16억 5천만원 사이',
        614: '16억 5천 ~ 17억원 사이',
        615: '17억 ~ 17억 5천만원 사이',
        616: '17억 5천 ~ 18억원 사이',
        617: '18억 ~ 18억 5천만원 사이',
        618: '18억 5천 ~ 19억원 사이',
        619: '19억 ~ 19억 5천만원 사이',
        620: '19억 5천 ~ 20억원 사이',

        800: '20억 ~ 30억원 사이',

        801: '20억 ~ 21억 사이',
        802: '21억 ~ 22억 사이',
        803: '22억 ~ 23억 사이',
        804: '23억 ~ 24억 사이',
        805: '24억 ~ 25억 사이',
        806: '25억 ~ 26억 사이',
        807: '26억 ~ 27억 사이',
        808: '27억 ~ 28억 사이',
        809: '28억 ~ 29억 사이',
        810: '29억 ~ 30억 사이',

        900: '30억 ~ 40억원 사이',

        901: '30억 ~ 31억 사이',
        902: '31억 ~ 32억 사이',
        903: '32억 ~ 33억 사이',
        904: '33억 ~ 34억 사이',
        905: '34억 ~ 35억 사이',
        906: '35억 ~ 36억 사이',
        907: '36억 ~ 37억 사이',
        908: '37억 ~ 38억 사이',
        909: '38억 ~ 39억 사이',
        910: '39억 ~ 40억 사이',

        1000: '40억 ~ 50억원 사이',

        1001: '40억 ~ 41억 사이',
        1002: '41억 ~ 42억 사이',
        1003: '42억 ~ 43억 사이',
        1004: '43억 ~ 44억 사이',
        1005: '44억 ~ 45억 사이',
        1006: '45억 ~ 46억 사이',
        1007: '46억 ~ 47억 사이',
        1008: '47억 ~ 48억 사이',
        1009: '48억 ~ 49억 사이',
        1010: '49억 ~ 50억 사이',

        1100: '50억 ~ 100억원 사이',

        1101: '50억 ~ 55억 사이',
        1102: '55억 ~ 60억 사이',
        1103: '60억 ~ 65억 사이',
        1104: '65억 ~ 70억 사이',
        1105: '70억 ~ 75억 사이',
        1106: '75억 ~ 80억 사이',
        1107: '80억 ~ 85억 사이',
        1108: '85억 ~ 90억 사이',
        1109: '90억 ~ 95억 사이',
        1110: '95억 ~ 100억 사이',

        1200: '100억 ~ 200억원 사이',

        1201: '100억 ~ 110억 사이',
        1202: '110억 ~ 120억 사이',
        1203: '120억 ~ 130억 사이',
        1204: '130억 ~ 140억 사이',
        1205: '140억 ~ 150억 사이',
        1206: '150억 ~ 160억 사이',
        1207: '160억 ~ 170억 사이',
        1208: '170억 ~ 180억 사이',
        1209: '180억 ~ 190억 사이',
        1210: '190억 ~ 200억 사이',

        1300: '200억원 이상',

        1301: '200억원 이상'

    };

module.exports.a_style = {
	1: {
		name: '주거시설',
		1: '단독주택',
		2: '협소주택',
		3: '별장/전원주택',
		4: '한옥',
		5: '다가구주택',
		6: '오피스텔',
		7: '빌라/연립주택',
        8: '상가주택',
        9: '조립주택'
	},
	2: {
		name: '상가시설(근린생활시설)',
		1: '상가시설(근린생활시설)'
    },
    3: {
        name: '병원',
        1: '종합병원',
        2: '일반병원',
        3: '치과병원',
        4: '성형외과',
        5: '요양병원'
    },
    4: {
        name: '숙박시설',
        1: '호텔\u00b7레지던스\u00b7모텔',
        2: '게스트하우스',
        3: '펜션'
    },
    5: {
        name: '업무시설',
        1: '사옥',
        2: '공공업무시설'
    },
    6: {
        name: '교육시설',
        1: '유치원\u00b7어린이집',
        2: '초\u00b7중\u00b7고등학교',
        3: '대학교',
        4: '연수원',
        5: '학원',
        6: '연구소',
        7: '도서관'
    },
    7: {
        name: '종교시설',
        1: '교회/성당',
        2: '사찰'
    },
    8: {
        name: '공장\u00b7창고시설',
        1: '공장',
        2: '창고'
    },
    9: {
        name: '기타',
        1: '직접입력'
    }

};

    module.exports.budgetMobile = {
        999: '예산범위 선택',

        //10만원 이하
        100: '10만원 이하',
        101: '10만원 이하',

        200: '10 ~ 100만원 ',

        201: '10 ~ 20만원 ',
        202: '20 ~ 30만원 ',
        203: '30 ~ 40만원 ',
        204: '40 ~ 50만원 ',
        205: '50 ~ 60만원 ',
        206: '60 ~ 70만원 ',
        207: '70 ~ 80만원 ',
        208: '80 ~ 90만원 ',
        209: '90 ~ 100만원 ',

        300: '100 ~ 1,000만원 ',

        301: '100 ~ 200만원 ',
        302: '200 ~ 300만원 ',
        303: '300 ~ 400만원 ',
        304: '400 ~ 500만원 ',
        305: '500 ~ 600만원 ',
        306: '600 ~ 700만원 ',
        307: '700 ~ 800만원 ',
        308: '800 ~ 900만원 ',
        309: '900 ~ 1,000만원 ',

        400: '1,000 ~ 1억원 ',

        401: '1,000 ~ 2,000만원 ',
        402: '2,000 ~ 3,000만원 ',
        403: '3,000 ~ 4,000만원 ',
        404: '4,000 ~ 5,000만원 ',
        405: '5,000 ~ 6,000만원 ',
        406: '6,000 ~ 7,000만원 ',
        407: '7,000 ~ 8,000만원 ',
        408: '8,000 ~ 9,000만원 ',
        409: '9,000 ~ 1억원 ',

        500: '1억 ~ 10억원 ',

        501: '1억 ~ 1억 5천만원 ',
        502: '1억 5천 ~ 2억원 ',
        503: '2억 ~ 2억 5천만원 ',
        504: '2억 5천 ~ 3억원 ',
        505: '3억 ~ 3억 5천만원 ',
        506: '3억 5천 ~ 4억원 ',
        507: '4억 ~ 4억 5천만원 ',
        508: '4억 5천 ~ 5억원 ',
        509: '5억 ~ 6억원 ',
        510: '6억 ~ 7억원 ',
        511: '7억 ~ 8억원 ',
        512: '8억 ~ 9억원 ',
        513: '9억 ~ 10억원 ',

        600: '10억 ~ 20억원 ',

        601: '10억 ~ 11억원 ',
        602: '11억 ~ 12억원 ',
        603: '12억 ~ 13억원 ',
        604: '13억 ~ 14억원 ',
        605: '14억 ~ 15억원 ',
        606: '15억 ~ 16억원 ',
        607: '16억 ~ 17억원 ',
        608: '17억 ~ 18억원 ',
        609: '18억 ~ 19억원 ',
        610: '19억 ~ 20억원 ',

        700: '20억원 이상',
        701: '20억원 이상'
    };
