let cocktail =[
  {
    id: 0,
    name: "쿠바리브레",
    ingredients:["럼","콜라", "라임 주스"],
    recipe:"럼 - 45 ml \n라임 주스 - 15 ml \n콜라 - full up",
    info:"1898년 스페인의 식민지였던 쿠바가 독립 전쟁 당시 'Viva, Cuba Libre'(자유 쿠바 만세)라는 구호를 사용했는데, 도와주러 왔던 미군이 럼(쿠바)에 콜라(미국)를 부어 마시며 구호를 외친 것에서 유래된 칵테일이라고 한다. 탄산음료에 의해 알콜이 희석되기 때문에 도수가 크게 낮아지며 알콜 특유의 향도 거의 사라진다. 따라서 술에 약한 사람도 쉽게 마실 수 있다."
  },
  {
    id: 1,
    name: "마이타이",
    ingredients:["럼","트리플 섹", "라임 주스", "오렌지 주스", "파인애플 주스", "그레나딘 시럽"],
    recipe:"화이트 럼 - 37.5 ml \n트리플 섹 - 22.5 ml \n라임 주스 - 30 ml \n오렌지 주스 - 30 ml  \n파인애플 주스 - 30 ml \n그레나딘 시럽 - 7.5 ml \n쉐이킹",
    info:"럼 베이스 칵테일로, 타히티어로 “최고”를 의미한다. 동시에 처음 맛본 사람은 누구나 “마이타이!”를 외칠 거라는 의미를 가지고 있기도 하며, 현재 IBA 공식 칵테일에 등록되어 있는 레시피 중 하나이다."
  },
  {
    id: 2,
    name: "블루 하와이",
    ingredients:["럼", "보드카", "블루 큐라소", "파인애플 주스", "스윗 앤 사워 믹스"],
    recipe:"화이트 럼 - 3/4oz (22ml) \n보드카 - 3/4oz (22ml) \n블루 큐라소 - 1/2oz (15ml) \n파인애플 주스 - 3oz (90ml) \n스윗 앤 사워 믹스 - 1oz (30ml) \n쉐이킹",
    info:"럼 베이스. 1957년 해리 K. 예(Harry K. Yee)라는 바텐더가 와이키키에 있는 하와이 마을에서 일하던 무렵에 볼스 영업사원이 회사 제품인 블루 큐라소로 만든 음료를 부탁하자 직접 만들어낸 칵테일이라고 한다."
  },
  {
    id: 3,
    name: "블루 하와이안",
    ingredients:["럼", "블루 큐라소", "말리부", "파인애플 주스"],
    recipe:"럼 - 1oz (30ml) \n 블루 큐라소 - 1oz (30ml) \n말리부 - 1oz (30ml) \n 파인애플 주스 - 2 1/2oz (75ml) \n쉐이킹",
    info:"블루하와이에서 변형된 칵테일. 코코넛향이 추가되었다. 블루 하와이가 뚜렷한 발생배경을 가지고 있는 것에 비해, 블루 하와이안은 기원이 명확하지가 않다. 국내의 조주기능사 공식 레시피에 포함되어 있는 칵테일이다."
  },
  {
    id: 4,
    name: "다이키리",
    ingredients:["럼","라임 주스","설탕 시럽"],
    recipe:"라이트 럼 - 52.5 ml (1 3/4 oz) \n라임 주스 - 22.5 ml (3/4 oz) \n설탕시럽 - 2 tsp \n쉐이킹",
    info:"럼 베이스 칵테일로, 현재 IBA 공식 칵테일에 등록되어 있는 레시피 중 하나이다. 모히토와 함께 세계적인 작가 어니스트 헤밍웨이가 사랑한 2가지의 칵테일 중 하나로 꼽힌다."
  },
  {
    id: 5,
    name: "모히토",
    ingredients:["럼","설탕 시럽", "라임 주스", "탄산수"],
    recipe:"화이트 럼 - 45 ml (1 1/2 oz) \n민트 - 6 leaves \n설탕시럽 - 3 tsp \n라임 주스 - 20 ml (2/3 oz) \n탄산수 - Full Up",
    info:"모히토는 다이키리와 함께 헤밍웨이가 사랑한 두 가지의 칵테일 중 하나로 꼽힌다. 주요 재료중 하나인 민트는 최근에는 대형마트에서도 어렵지 않게 천 원 정도 가격에 구할 수 있다. "
  },
  {
    id: 6,
    name: "잭콕",
    ingredients:["위스키","콜라"],
    recipe:"잭 다니엘 - 1 1/2oz (45ml) \n코카콜라 - full up",
    info:"위스키 베이스 칵테일. 그 유명한 잭 다니엘에 콜라를 섞어 마시는 매우 간단한 칵테일이다. 버번 위스키에 콜라를 섞어 마시는 '버번 콕'의 바리에이션이다. 스모키하고 씁스름한 향과 단맛이 섞여서 호불호 없는 맛을 낸다. "
  },
  {
    id: 7,
    name: "하이볼",
    ingredients:["위스키","탄산수","토닉워터"],
    recipe:"위스키 - 30 ml (1 oz)\n 탄산수나 토닉워터 120 ml (4 oz)",
    info:"얼음을 채운 글라스에 위스키를 넣고, 그 위에 탄산수, 토닉워터, 사이다, 진저에일 등의 탄산을 부어만드는 칵테일. 일본에서는 맥주, 사케 다음으로 대중적인 술이다. 술집에 하이볼이 없는 경우는 거의 존재하지 않는다고 봐도 될 정도다. "
  },
  {
    id: 8,
    name: "갓파더",
    ingredients:["위스키","디사론노"],
    recipe:"위스키 - 1 1/4oz (35ml) \n디사론노 - 1 1/4oz (35ml)",
    info:"스카치 위스키를 베이스로 아마레토를 섞어서 만든다. 아마레토는 아몬드 리큐르의 원조인 디사론노를 사용하는 것을 정통으로 친다. 믹싱 글라스에서 스터하고, 얼음을 넣은 올드패션드 글라스에 담아 내는 방식이 조화롭게 섞이면서 달콤하면서 스모키한 향과 맛을 즐길 수 있고, 올드패션드 글라스에 디사론노를 먼저 붓고, 얼음과 위스키를 넣은 뒤, 젓지 않고 내는 방식이 디사론노와 위스키의 맛이 따로 느껴지게 할 수 있다."
  },
  {
    id: 9,
    name: "진 토닉",
    ingredients:["진","토닉워터"],
    recipe:"진 - 1 1/2oz (45ml) \n토닉워터 - 4 1/2oz (135ml)",
    info:"집에서 만들기 쉬운 칵테일 베스트 1에 들어가는 칵테일이다. 하지만 어떤 의미에서는 프로와 아마추어의 차이가 극명히 드러나는 칵테일 중 하나이기도 하다. 재료가 간단하기 때문에 진의 품질이 중요하다. 간단한 예로, 하우스진으로 많이 쓰는 바톤 진으로 만든 것과 다른 프리미엄 진으로 만든 것을 비교해서 마셔보면 맛의 차이가 넘사벽 정도로 차이가 난다."
  },
  {
    id: 10,
    name: "핑크 레이디",
    ingredients:["진","그레나딘 시럽"],
    recipe:"드라이 진 - 1 1/2oz (45ml) \n그레나딘 시럽 - 1/3oz (10ml) \n크림 - 1/2oz (15ml) \n달걀 흰자 - 1개 \n쉐이킹",
    info:"진 베이스며, 이름 그대로 분홍색을 내는 칵테일이다.  맛 자체는 진의 맛과 별로 다를 것이 없다. 단맛을 내는 재료가 색깔을 내기 위한 그레나딘 시럽 뿐이기 때문이다. 다만 계란 흰자와 크림이 추가되기 때문에 입에 닿는 느낌은 비교적 부드러운 편."
  },
  {
    id: 11,
    name: "진 피즈",
    ingredients:["진","레몬 주스", "설탕 시럽", "탄산수"],
    recipe:"진 - 45 ml (1 1/2 oz) \n레몬 주스 - 30 ml (1 oz) \n설탕 시럽 - 10 ml (1/3 oz) \n탄산수 - 약간의 탄산을 가미할 정도의 약간 \n탄산수를 제외하고 쉐이킹 후 탄산수 추가",
    info:"피즈 스타일의 칵테일 중 하나이자 가장 유명한 칵테일. ‘피즈’ 란 미국의 유명 바텐더 제리 토마스(Jerry Thomas)가 정립한 스타일로, 스피리츠에 탄산과 레몬 주스, 설탕을 더해서 만든 것을 말한다. "
  },
  {
    id: 12,
    name: "A1",
    ingredients:["진","트리플 섹","레몬 주스", "그레나딘 시럽"],
    recipe:"진 - 1oz (30ml) \n트리플 섹 - 1/2oz (15ml) \n레몬 주스 - 1/2oz (15ml) \n그레나딘 시럽 - 1 dash (생략 가능) \n쉐이킹",
    info:"진 베이스로, 이 칵테일의 이름인 'A1'이란 어떤 것들 중 가장 최고의 것을 뜻하는 의미가 있다. 여담으로, 이름의 철자 덕분에 칵테일 사전 등에서 가장 처음에 나오는 칵테일으로 유명하기도 하다."
  },
  {
    id: 13,
    name: "블랙 러시안",
    ingredients:["보드카", "깔루아"],
    recipe:"보드카 - 30 ml (1 oz) \n깔루아 - 15 ml (1/2 oz) \n스터",
    info:"보드카 베이스 칵테일. 여기에 리큐르인 깔루아를 넣는다. 보드카 베이스인데다 우유, 토닉워터, 주스 등 음료는 안 들어가고 술과 리큐르만 들어가기 때문에 도수는 제법 높다.비율은 취향에 따라 조정해도 좋다. 단맛을 강하게 내려면 1:1에 가깝게 섞거나 반대로 5:1 정도로 단맛을 줄이는 레시피도 가능하다."
  },
  {
    id: 14,
    name: "섹스 온 더 비치",
    ingredients:["보드카","피치트리","크랜베리 주스", "오렌지 주스"],
    recipe:"보드카 - 40 ml (1 1/3 oz) \n피치트리 - 20 ml (2/3 oz) \n크랜베리 주스 - 40 ml (1 1/3 oz) \n오렌지 주스 - 40 ml (1 1/3 oz)",
    info:"보드카 베이스로, 무척이나 개성넘치는 이름 덕분에 현재까지도 인기가 많은 칵테일이다."
  },
  {
    id: 15,
    name: "블루 스카이",
    ingredients:["보드카","블루 큐라소","피치트리","베일리스"],
    recipe:"보드카 - 1/3oz (10ml) \n블루 큐라소 - 1/3oz (10ml) \n피치트리 - 1/3oz (10ml) \n우유, 혹은 베일리스 - 2 dashes \n피치트리를 부은 후, 보드카, 블루 큐라소 순으로 플로팅 \n우유, 혹은 베일리스 등을 한 두방울 떨어트려 구름형상 만들기",
    info:"보드카 베이스 칵테일로, 이런저런 변형이 존재하는 칵테일이기도 하지만 공통점은 큐라소 계열 리큐르인 '블루 큐라소'를 사용한다는 것이다. 한입에 마시면 피치시냅스와 블루 큐라소의 달콤한 맛 때문에 복숭아 주스 혹은 코튼캔디를 마시는 느낌이 나면서도 보드카 때문에 깔끔한 느낌이 든다."
  },
  {
    id: 16,
    name: "코스모폴리탄",
    ingredients:["보드카","트리플 섹","라임 주스","크랜베리 주스","그레나딘 시럽"],
    recipe:"보드카 - 1oz (30ml) \n트리플 섹 - 1/2oz (15ml) \n라임 주스 - 1/2oz (15ml) \n크랜베리 주스 - 1/2oz (15ml) \n(그레나딘 시럽 - 1 dashes)) \n쉐이킹",
    info:"보드카를 베이스로 한다. 대표적인 레이디 킬러 칵테일 중 하나로, 달콤한 맛에 비해 도수가 무려 20도를 넘어선다. 위의 레시피만으로는 진한 붉은 색이 나오지 않아 그레나딘 시럽을 1대시 정도 넣어 색을 내기도 한다. "
  },
  {
    id: 17,
    name: "카미카제",
    ingredients:["보드카","트리플 섹","블루 큐라소","라임 주스"],
    recipe:"보드카 - 1oz (30ml) \n트리플 섹 - 1/2oz (15ml) \n(블루 큐라소 - 1/2oz (15ml)) \n라임 주스 - 1/2oz (15ml) \n쉐이킹",
    info:"보드카 베이스로, 이름과는 달리 미국에서 만들어진 칵테일이다. 명칭의 유래는 맛이 마치 '카미카제처럼 강렬하다!'라서. 맛은 비슷한 종류의 칵테일들보다 술 맛이 강하고 라임 주스가 들어가 향이 독특하다. 트리플 섹을 블루 큐라소로 대체하여 블루 카미카제를 만들수도 있다."
  },
  {
    id: 18,
    name: "블루 라군",
    ingredients:["보드카","블루 큐라소","레몬 주스"],
    recipe:"보드카: 1 1/3oz (40ml) \n블루 큐라소: 1/2oz (15ml) \n레몬 주스: 1/2oz (15ml) \n쉐이킹",
    info:"보드카 베이스 칵테일로, 이름의 뜻은 푸른 산호초. 그래서인지 칵테일 색도 마찬가지로 푸른색이다. 이름이 비슷한 블루 하와이와는 꽤 가까운 관계로, 블루 하와이에서 술만 보드카로 바꿔도 블루 라군과 흡사한 맛이 난다."
  },
  {
    id: 19,
    name: "스크루드라이버",
    ingredients:["보드카", "오렌지 주스"],
    recipe:"보드카 - 1oz ~ 1 1/2oz (30 ~ 45ml) \n오렌지 주스 - full up",
    info:"보드카 베이스의 칵테일. 칵테일 하면 떠오르는 대표주자중 하나다. 술 맛이 전혀 느껴지지 않아 오렌지 주스 맛과 크게 다르지 않다. 때문에 오렌지 주스를 마시는 듯한 기분이 들 수도 있다. 하지만 도수가 절대로 약한 술은 아니라서 부담없이 마시고는 금세 취할 위험이 있기에 주량이 약하다면 주의."
  },
  {
    id: 20,
    name: "보드카 선라이즈",
    ingredients:["보드카","오렌지 주스", "그레나딘 시럽"],
    recipe:"보드카 - 45 ml (1 1/2 oz) \n오렌지 주스 - 90 ml (3 oz) \n그레나딘 시럽 - 15 ml (1/2 oz) \n마지막에 그레나딘 시럽을 천천히 부어 시럽이 바닥에 가라앉으면 완성.",
    info:"일출을 닮았다고 해서 붙여진 이름의 칵테일. 오렌지 주스와 그레나딘 시럽이 들어가 잘 넘어가는 편. 때문에 주의할 필요가 있다. 보드카를 데킬라로 바꾸면 데킬라 선라이즈."
  },
  {
    id: 21,
    name: "발랄라이카",
    ingredients:["보드카","레몬 주스","트리플 섹"],
    recipe:"보드카 - 1oz (30ml) \n레몬 주스 - 1oz (30ml) \n트리플 섹 - 1oz (30ml) \n쉐이킹",
    info:"이름의 유래는 러시아의 전통악기에서 가져온 것이라고 한다. 맛은 찌르는 듯한 과일 향과 신 맛. 레몬 주스와 오렌지 리큐르가 재료로 들어가 생겨난 맛이다. 레시피에서 레몬 주스를 라임 주스로 바꾸면 카미카제가 된다."
  },
  {
    id: 22,
    name: "카타르시스",
    ingredients:["럼","디사론노","라임 주스"],
    recipe:"럼 - 1 1/2oz (45ml) \n(론디아즈151을 사용할 것) \n아마레토 - 1/2oz (15ml) \n라임 주스 - 1/2oz (15ml)",
    info:"괜히 지어진 이름이 아닌 것처럼 상당히 독한 쪽에 속하는 칵테일이다. 맛은 아마레토와 라임즙이 들어가 단맛과 신맛이 약간 나며 도수는 50도 전후로 아주 독하다. 일단 오버프루프 럼이 들어가 도수가 높은데다 아마레토와 라임즙이 그리 많이 들어가지도 않기 때문에 무척 독하므로 주량이 약한 사람이라면 주의."
  },
  {
    id: 23,
    name: "말리부 콕",
    ingredients:["말리부","콜라"],
    recipe:"말리부와 콜라를 1:3 또는 1:4 비율로 섞어주면 완성",
    info:"말리부 베이스의 칵테일. 단 맛을 좋아한다면 콜라의 비중을 더 높이면 된다. "
  },
  {
    id: 24,
    name: "블루 사파이어",
    ingredients:["말리부", "블루 큐라소", "피치트리", "스윗 앤 사워 믹스"],
    recipe:"말리부 - 1/2oz (15ml) \n블루 큐라소 - 1/2oz (15ml) \n피치트리 - 1/2oz (15ml) \n스윗 앤 사워 믹스 - full up",
    info:"사파이어와 같은 푸른 보석같은 말리부 베이스의 칵테일."
  },
  {
    id: 25,
    name: "말리부 베이브리즈",
    ingredients:["말리부","크랜베리 주스","파인애플 주스"],
    recipe:"말리부 - 1 2/3oz (50ml) \n크랜베리 주스 - 1 2/3oz (50ml) \n파인애플 주스 - 1 2/3oz (50ml)",
    info:"말리부 베이브리즈는 여름 느낌을 물씬 내는 말리부 베이스의 칵테일이다. 크랜베리주스와 파인애플 주스로 만드는 아주 간단한 파티용 술이라고 생각하면 된다."
  },
  {
    id: 26,
    name: "말리부 선셋",
    ingredients:["말리부","파인애플 주스","그레나딘 시럽"],
    recipe:"말리부 - 2oz (60ml)\n파인애플 주스 - 4oz (120ml) \n그레나딘 시럽 - 1/2oz (15ml)",
    info:"말리부 베이스의 각기 다른 색의 음료들이 마치 석양처럼 보인다고 하는 말리부 선셋. 그레나딘 시럽은 마지막에 잔 가장자리를 따라 아주 천천히 부어주어야 색이 이쁘게 나타난다."
  },
  {
    id: 27,
    name: "더 말리부",
    ingredients:["말리부","레몬 주스","그레나딘 시럽"],
    recipe:"말리부 - 1oz (30ml) \n레몬 주스 full up \n원하는 비주얼이 나올때 정도의 그레나딘 시럽 dash",
    info:"단순한 맛이지만 파괴적인 비주얼을 가진 말리부 베이스의 칵테일."
  },
  {
    id: 28,
    name: "빅 이지 블루 펀치",
    ingredients:["말리부","블루 큐라소","레몬 주스","파인애플 주스"],
    recipe:"말리부 - 2oz (60ml) \n블루 큐라소 - 1oz (30ml) \n레몬 주스 - 1/2oz (15ml) \n쉐이킹하여 잔에 따라낸 후, 파인애플 주스 - 2oz (60ml)",
    info:"말리부와 블루큐라소로 만드는 칵테일. 생각보다 알콜이 많이 들어가 도수가 높다."
  },
  {
    id: 29,
    name: "퍼지 네이블",
    ingredients:["피치트리","오렌지 주스"],
    recipe:"피치트리 - 1 1/2oz (45ml)\n오렌지 주스 4oz (120ml)",
    info:"오렌지 주스와 피치트리만 있다면 만들 수 있는 피치트리 버전의 스크류 드라이버, 퍼지네이블."
  },
  {
    id: 30,
    name: "블루 먼데이",
    ingredients:["보드카","트리플 섹","블루 큐라소"],
    recipe:"피치트리 - 1 1/2oz (45ml)\n블루 큐라소 - 1/2oz (15ml)\n트리플 섹 - 1/2oz (15ml)\n쉐이킹",
    info:"보드카와 트리플 섹, 블루 큐라소로 만드는 칵테일. 오렌지맛이 나는 트리플 섹과 블루 큐라소로 오렌지의 단 맛이 도드라진다."
  },
  {
    id: 31,
    name: "우우",
    ingredients:["피치트리","보드카","크랜베리 주스"],
    recipe:"피치트리 - 1/2oz (15ml)\n보드카 - 1oz (30ml)\n크랜베리 주스 full up",
    info:"크랜베리 주스의 쌉싸름한 맛이 특징으로 나타나는 우우."
  },
  {
    id: 32,
    name: "피치 크러쉬",
    ingredients:["스윗 앤 사워 믹스","크랜베리 주스","피치트리"],
    recipe:"피치트리피치트리 - 1 1/2oz (45ml)\n스윗 앤 사워 믹스 - 2oz (60ml)\n크랜베리 주스 full up",
    info:"복숭아 향이 살짝 나며 맛은 약간 새콤한 느낌의 칵테일. 도수가 낮아 덕분에 여성들에게 인기가 많은 칵테일이다. 가끔 진짜 복숭아를 으깨서 넣는 경우도 있다고 한다."
  },
  {
    id: 33,
    name: "미도리 사워",
    ingredients:["미도리","스윗 앤 사워 믹스"],
    recipe:"미도리 - 1oz (30ml)\n스윗 앤 사워 믹스 - 2oz (60ml)\n쉐이킹",
    info:"미도리를 사용해 만드는 유명한 칵테일이다. 멜론맛인 미도리와 스윗&사워 믹스의 레몬향이 어우러져서 상큼한 색깔과 맛을 연출하는 것이 포인트. 개운한 느낌으로 즐기기 위해 탄산음료를 첨가하기도 한다."
  },
  {
    id: 34,
    name: "미도리 일루전",
    ingredients:["미도리","보드카","트리플 섹","파인애플 주스"],
    recipe:"미도리 - 1 1/2oz (45ml)\n보드카 - 1/2oz (15ml)\n트리플 섹 - 1/2oz (15ml)\n파인애플 주스 - 1 2/3oz (50ml)\n레몬즙 15ml\n쉐이킹",
    info:"칵테일인데 불량식품을 먹는 듯한 단맛을 느끼게 해주는 미도리 일루전. 해외에서는 인기가 많아서 미도리 일루전 칵테일을 공장에서 제조해서 병으로 판매하기도 한다. 미도리 사워와 유사하나 오렌지와 파인애플 향까지 들어가다보니 푸르츠믹스와도 같은 느낌이 난다."
  },
  // {
  //   id: 35,
  //   name: "",
  //   ingredients:["","","",""],
  //   recipe:"\n\n\n\n\n",
  //   info:""
  // },
]

export default cocktail