<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>화물 접수 | 기능 복구 최종본</title>
<style>
:root{
  --bg:#f5f7fb;
  --card:#ffffff;
  --line:#dbe4f0;
  --text:#0f172a;
  --sub:#64748b;
  --blue:#2554d8;
  --blue2:#3b82f6;
  --navy:#0f172a;
  --yellow:#fee500;
  --radius-xl:22px;
  --radius-lg:16px;
  --radius-md:12px;
  --shadow:0 14px 34px rgba(15,23,42,.08);
}
*{box-sizing:border-box}
body{
  margin:0;
  font-family:Arial,"Noto Sans KR",sans-serif;
  background:linear-gradient(180deg,#f8fbff 0%,#f2f6fb 100%);
  color:var(--text);
}
.wrapper{
  max-width:1280px;
  margin:0 auto;
  padding:20px 16px 28px;
}
html{
  scroll-behavior:smooth;
}
.topbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  margin-bottom:14px;
  padding:0 4px;
  flex-wrap:wrap;
}
.back-link{
  text-decoration:none;
  color:var(--navy);
  font-size:14px;
  font-weight:800;
}
.top-phone{
  font-size:14px;
  color:var(--sub);
  font-weight:700;
}
.top-phone strong{
  color:var(--navy);
  font-size:18px;
  margin-left:6px;
}
.main-grid{
  display:grid;
  grid-template-columns:minmax(0,1.5fr) minmax(320px,.95fr);
  gap:14px;
  align-items:stretch;
}
.card{
  background:var(--card);
  border:1px solid var(--line);
  border-radius:26px;
  box-shadow:var(--shadow);
}
.left-card{
  padding:22px 20px 18px;
}
@media (min-width:821px){
.right-card{
  position:sticky;
  top:20px;
  align-self:start;
}
}
.right-card{
  padding:18px;
  color:#fff;
  background:linear-gradient(160deg,#1f3b95 0%,#2c58ca 52%,#4b8af0 100%);
}
.title{
  margin:0;
  font-size:26px;
  line-height:1.15;
  font-weight:900;
  letter-spacing:-.03em;
  display:flex;
  align-items:center;
  gap:10px;
}
.live-dot{
  display:inline-flex;
  align-items:center;
  gap:7px;
  font-size:12px;
  font-weight:900;
  color:#dc2626;
}
.live-dot::before{
  content:'';
  width:10px;
  height:10px;
  border-radius:50%;
  background:#ef4444;
  box-shadow:0 0 0 rgba(239,68,68,.55);
  animation:nardaBlink 1.2s infinite;
}
@keyframes nardaBlink{
  0%{opacity:1;transform:scale(1);box-shadow:0 0 0 0 rgba(239,68,68,.55)}
  70%{opacity:.55;transform:scale(1.08);box-shadow:0 0 0 10px rgba(239,68,68,0)}
  100%{opacity:1;transform:scale(1);box-shadow:0 0 0 0 rgba(239,68,68,0)}
}
.desc{
  margin:8px 0 18px;
  font-size:14px;
  line-height:1.6;
  color:var(--sub);
  font-weight:600;
}
.grid-2{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
}
.selection-status{
  margin-top:10px;
  padding:12px 14px;
  border-radius:14px;
  background:#eef5ff;
  border:1px solid #cfe0fb;
  color:#1e40af;
  font-size:13px;
  font-weight:900;
}
.label{
  display:block;
  margin-bottom:7px;
  font-size:13px;
  font-weight:900;
  color:var(--text);
}
.help{
  margin:6px 0 0;
  font-size:12px;
  color:var(--sub);
  font-weight:600;
}
.input,
.toggle-btn,
.primary-btn,
.dark-btn,
.mini-btn,
.order-btn,
.quick-chip,
.chip{
  border-radius:14px;
  font-weight:900;
}
.input{
  width:100%;
  height:50px;
  padding:0 14px;
  border:1.5px solid #c8d3e2;
  background:#fff;
  color:var(--text);
  font-size:15px;
}
.toggle-btn,
.primary-btn,
.dark-btn,
.order-btn{
  height:50px;
  border:0;
  cursor:pointer;
}
.toggle-btn{
  width:100%;
  background:#f7faff;
  border:1.5px solid #b8c6d8;
  color:var(--navy);
  font-size:14px;
}
.block{
  margin-top:16px;
  padding:16px;
  border:1px solid var(--line);
  border-radius:18px;
  background:#fbfdff;
}
.block-head{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
  margin-bottom:12px;
  flex-wrap:wrap;
}
.block-title{
  margin:0;
  font-size:14px;
  font-weight:900;
}
.block-note{
  font-size:12px;
  color:var(--sub);
  font-weight:700;
}
.chips{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}
.chip,
.quick-chip{
  min-height:42px;
  padding:0 14px;
  border:1.5px solid #b8c6d8;
  background:#fff;
  color:var(--text);
  font-size:13px;
  cursor:pointer;
}
.chip.active,
.quick-chip.active,
.primary-btn{
  color:#fff;
  border-color:var(--blue);
  background:linear-gradient(135deg,var(--blue) 0%,var(--blue2) 100%);
  box-shadow:0 8px 18px rgba(37,84,216,.18);
}
.chip.disabled{
  opacity:.45;
  pointer-events:none;
  cursor:not-allowed;
  background:#eef2f7;
  color:#94a3b8;
}
.selector-summary{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:10px;
  margin-top:16px;
}
.summary-box{
  padding:12px;
  border-radius:16px;
  background:#f7faff;
  border:1px solid var(--line);
}
.summary-box strong{
  display:block;
  font-size:12px;
  color:var(--sub);
  margin-bottom:6px;
}
.summary-box span{
  font-size:15px;
  font-weight:900;
}
.expand-area{
  display:none;
  margin-top:12px;
}
.expand-area.open{display:block}
.actions{
  display:grid;
  grid-template-columns:1fr 1fr auto;
  gap:10px;
  align-items:center;
  margin-top:18px;
}
.primary-btn,
.dark-btn{
  font-size:15px;
}
.dark-btn{
  background:var(--navy);
  color:#fff;
}
.phone-box{
  display:flex;
  align-items:center;
  gap:8px;
  flex-wrap:wrap;
}
.phone-box small{
  font-size:12px;
  color:var(--sub);
  font-weight:700;
}
.phone-box a{
  text-decoration:none;
  color:var(--navy);
  font-size:18px;
  font-weight:900;
}
.preview-kicker{
  font-size:12px;
  font-weight:900;
  letter-spacing:.1em;
  color:#dbeafe;
}
.preview-title{
  margin:6px 0 8px;
  font-size:20px;
  line-height:1.25;
  font-weight:900;
}
.preview-desc{
  margin:0 0 14px;
  font-size:13px;
  line-height:1.55;
  color:rgba(255,255,255,.92);
  font-weight:600;
}
.preview-panel{
  padding:14px;
  border-radius:20px;
  background:rgba(255,255,255,.12);
}
.preview-box{
  background:#fff;
  color:var(--text);
  border-radius:18px;
  padding:16px;
}
.preview-row{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:10px;
}
.preview-route{
  font-size:16px;
  font-weight:800;
  color:#475569;
}
.badge{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:6px 10px;
  border-radius:999px;
  background:#ecfdf5;
  color:#059669;
  font-size:11px;
  font-weight:900;
  white-space:nowrap;
}
.price-label{
  margin-top:12px;
  font-size:13px;
  color:#64748b;
  font-weight:800;
}
.price{
  font-size:40px;
  line-height:1;
  font-weight:900;
  letter-spacing:-.04em;
  margin:6px 0 0;
}
.condition{
  margin:6px 0 0;
  font-size:15px;
  font-weight:800;
}
.info-box{
  margin-top:14px;
  padding-top:12px;
  border-top:1px solid #e2e8f0;
}
.info-line{
  display:flex;
  justify-content:space-between;
  gap:10px;
  padding:6px 0;
  font-size:13px;
  color:#475569;
}
.info-line strong{
  color:var(--text);
  text-align:right;
}
.bottom-bar{
  margin-top:14px;
  padding:12px;
  background:#111827;
  border-radius:20px;
  box-shadow:var(--shadow);
}
.order-grid{
  display:grid;
  grid-template-columns:minmax(200px,240px) minmax(0,1fr) repeat(3,90px);
  gap:10px;
  align-items:end;
}
.field label{
  display:block;
  margin-bottom:7px;
  font-size:12px;
  font-weight:900;
  color:#fff;
}
.field input,
.field textarea{
  width:100%;
  border:0;
  border-radius:12px;
  background:#fff;
  color:var(--text);
  font-size:14px;
  font-weight:700;
}
.field input{height:46px;padding:0 12px}
.field textarea{height:46px;padding:12px;resize:none}
.order-btn{
  width:100%;
  height:46px;
  font-size:14px;
  text-decoration:none;
  display:flex;
  align-items:center;
  justify-content:center;
}
.sms-btn{background:#3b82f6;color:#fff}
.kakao-btn{background:var(--yellow);color:#111827}
.call-btn{background:#fff;color:#111827}
.small-top{
  display:block;
  font-size:11px;
  font-weight:800;
  color:rgba(255,255,255,.72);
  margin-bottom:7px;
}
.hidden{display:none !important}
@media (max-width:1100px){
  .main-grid{grid-template-columns:1fr}
  .order-grid{grid-template-columns:1fr 1fr 1fr}
  .field:first-child,.field:nth-child(2){grid-column:1/-1}
}
@media (max-width:820px){
  .grid-2,.selector-summary,.actions,.order-grid{grid-template-columns:1fr}
  .main-grid{gap:12px}
  .left-card,.right-card{padding:16px}
  .price{font-size:32px}
  .info-line{flex-direction:column}
  .info-line strong{text-align:left}
  .field:first-child,.field:nth-child(2){grid-column:auto}
}
</style>
</head>
<body>
<div class="wrapper">
  <div class="main-grid">
    <div class="card left-card">
      <h1 class="title">화물 접수 <span class="live-dot">영업중</span></h1>
      <p class="desc">현재 디자인은 유지하고, 지역 선택 · 옵션 선택 · 요금조회 기능을 다시 모두 살린 최종 복구 버전입니다.</p>

      <div class="grid-2">
        <div>
          <label class="label" for="startCity">출발지역</label>
          <div style="display:grid;grid-template-columns:minmax(0,1fr) 140px;gap:10px;">
            <input class="input" id="startCity" type="text" value="광주" readonly>
            <button type="button" class="toggle-btn" id="pickStartBtn" onclick="setActiveTarget('start')">출발지 선택</button>
          </div>
          <p class="help">출발지 버튼을 누른 뒤 아래 공통 선택영역에서 직접 선택합니다.</p>
        </div>

        

        <div>
          <label class="label" for="endCity">도착지역</label>
          <div style="display:grid;grid-template-columns:minmax(0,1fr) 140px;gap:10px;">
            <input class="input" id="endCity" type="text" value="목포" readonly>
            <button type="button" class="toggle-btn" id="pickEndBtn" onclick="setActiveTarget('end')">도착지 선택</button>
          </div>
          <p class="help">도착지 버튼을 누른 뒤 아래 공통 선택영역에서 직접 선택합니다.</p>
        </div>
      </div>

      <div class="selection-status" id="targetGuide">현재 출발지 선택중이십니다.</div>

      <div class="block" id="selectionSummaryBlock">
        <div class="block-head">
          <p class="block-title">빠른 선택</p>
          <span class="block-note">핵심 선택 후 아래에서 전체 확장 가능</span>
        </div>
        <div class="selector-summary">
          <div class="summary-box"><strong>운송 방식</strong><span id="summaryService">독차</span></div>
          <div class="summary-box"><strong>톤수</strong><span id="summaryTon">1톤</span></div>
          <div class="summary-box"><strong>차종</strong><span id="summaryVehicle">카고</span></div>
          <div class="summary-box"><strong>옵션</strong><span id="summaryOption">일반</span></div>
        </div>
        <div class="actions" style="margin-top:12px;">
          <div style="display:flex;align-items:center;padding:0 8px;font-size:13px;font-weight:800;color:#334155;">광역권 / 지역 선택은 항상 고정 표시됩니다</div>
          <button type="button" class="toggle-btn" onclick="toggleExpand('optionExpand')">옵션 전체 선택 열기</button>
          <div class="phone-box"><small>대표번호</small><a href="tel:1522-8281">1522-8281</a></div>
        </div>
      </div>

      <div class="expand-area open" id="routeExpand">
        <div class="block" id="regionBlock">
          <div class="block-head">
            <p class="block-title" id="commonRegionTitle">광역권 선택 · 출발지</p>
            <span class="block-note" id="commonRegionNote">선택한 값이 출발지역에 반영됩니다</span>
          </div>
          <div class="chips" id="commonRegionButtons"></div>
        </div>

        <div class="block" id="areaBlock">
          <div class="block-head">
            <p class="block-title" id="commonAreaTitle">지역 선택 · 출발지</p>
            <span class="block-note">광역권 선택 후 시/군 단위 선택</span>
          </div>
          <div class="chips" id="commonAreaButtons"></div>
        </div>
      </div>

      <div class="expand-area open" id="optionExpand">
        <div class="block">
          <div class="block-head">
            <p class="block-title">운송 방식 선택</p>
            <span class="block-note">혼적은 1톤만 선택 가능</span>
          </div>
          <div class="chips">
            <button type="button" class="chip service-chip active" data-value="독차">독차</button>
            <button type="button" class="chip service-chip" data-value="혼적">혼적</button>
          </div>
        </div>

        <div class="block">
          <div class="block-head">
            <p class="block-title">톤수 선택</p>
            <span class="block-note">전체 톤수 복구</span>
          </div>
          <div class="chips">
            <button type="button" class="chip ton-chip active" data-value="1톤">1톤</button>
            <button type="button" class="chip ton-chip" data-value="1.4톤">1.4톤</button>
            <button type="button" class="chip ton-chip" data-value="2.5톤">2.5톤</button>
            <button type="button" class="chip ton-chip" data-value="3.5톤">3.5톤</button>
            <button type="button" class="chip ton-chip" data-value="5톤">5톤</button>
            <button type="button" class="chip ton-chip" data-value="8톤">8톤</button>
            <button type="button" class="chip ton-chip" data-value="11톤">11톤</button>
            <button type="button" class="chip ton-chip" data-value="18톤">18톤</button>
            <button type="button" class="chip ton-chip" data-value="25톤">25톤</button>
          </div>
        </div>

        <div class="block">
          <div class="block-head">
            <p class="block-title">차종 선택</p>
            <span class="block-note">차종별 추가요금 반영</span>
          </div>
          <div class="chips">
            <button type="button" class="chip vehicle-chip active" data-value="카고">카고</button>
            <button type="button" class="chip vehicle-chip" data-value="윙바디">윙바디</button>
            <button type="button" class="chip vehicle-chip" data-value="탑차">탑차</button>
            <button type="button" class="chip vehicle-chip" data-value="리프트">리프트</button>
            <button type="button" class="chip vehicle-chip" data-value="호루">호루</button>
          </div>
        </div>

        <div class="block">
          <div class="block-head">
            <p class="block-title">적재 옵션</p>
            <span class="block-note">초장축 추가요금 반영</span>
          </div>
          <div class="chips">
            <button type="button" class="chip option-chip active" data-value="일반">일반</button>
            <button type="button" class="chip option-chip" data-value="초장축">초장축</button>
          </div>
        </div>
      </div>

      <div class="actions">
        <button type="button" class="primary-btn" onclick="nardaUpdatePreview()">참고 운임 보기</button>
        <button type="button" class="dark-btn" onclick="focusOrderPhone()">바로 접수하기</button>
        <div class="phone-box"><small>급한 건은</small><a href="tel:1522-8281">전화 접수</a></div>
      </div>
    </div>

    <div class="card right-card">
      <div class="preview-kicker">FREIGHT PREVIEW</div>
      <h2 class="preview-title">운임 결과</h2>
      <p class="preview-desc">지역, 톤수, 차량, 옵션 선택값을 기준으로 참고 운임을 바로 확인합니다.</p>

      <div class="preview-panel">
        <div class="preview-box">
          <div class="preview-row">
            <div>
              <div class="preview-route" id="previewRoute">광주 → 목포</div>
              <div class="condition" id="previewCondition">독차 · 1톤 · 카고 · 일반</div>
            </div>
            <span class="badge" id="previewBadge">고정요금 적용</span>
          </div>

          <div class="price-label">예상 운임</div>
          <div class="price" id="previewPrice">100,000원</div>

          <div class="info-box">
            <div class="info-line"><span>행정기관 기준</span><strong id="previewOffice">광주광역시청 ↔ 목포시청</strong></div>
            <div class="info-line"><span>예상 직선거리</span><strong id="previewStraightDistance">약 57.0km</strong></div>
            <div class="info-line"><span>적용 거리</span><strong id="previewDistance">약 71km</strong></div>
            <div class="info-line"><span>차량 타입</span><strong id="previewVehicleType">1톤 카고</strong></div>
            <div class="info-line"><span>1톤 기준요금</span><strong id="previewBasePrice">100,000원</strong></div>
            <div class="info-line"><span>운송방식 조정</span><strong id="previewServicePrice">0원</strong></div>
            <div class="info-line"><span>톤수 추가요금</span><strong id="previewTonPrice">0원</strong></div>
            <div class="info-line"><span>차종 추가요금</span><strong id="previewVehiclePrice">0원</strong></div>
            <div class="info-line"><span>옵션 추가요금</span><strong id="previewOptionPrice">0원</strong></div>
            <div class="info-line"><span>적용 기준</span><strong id="previewRule">노선별 고정요금 적용</strong></div>
            <div class="info-line"><span>추가 안내</span><strong id="previewOption">실배차 시 상·하차 조건에 따라 변동될 수 있습니다.</strong></div>
            <div class="info-line"><span>마일리지 혜택</span><strong id="previewMileage">건당 3,000원 적립</strong></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bottom-bar">
    <form id="nardaOrderForm">
      <div class="order-grid">
        <div class="field">
          <label for="customerPhoneSingle">연락처</label>
          <input type="text" id="customerPhoneSingle" placeholder="연락처 입력">
          <input type="hidden" id="customerPhone">
        </div>
        <div class="field">
          <label for="memo">추가 메모</label>
          <textarea id="memo" placeholder="상차지, 하차지, 요청사항 입력"></textarea>
        </div>
        <div>
          <span class="small-top">SMS</span>
          <button type="button" class="order-btn sms-btn" onclick="submitNardaOrderByType('sms')">문자</button>
        </div>
        <div>
          <span class="small-top">KAKAO</span>
          <a href="http://pf.kakao.com/_xjrhSs/chat" target="_blank" class="order-btn kakao-btn">카톡</a>
        </div>
        <div>
          <span class="small-top">CALL</span>
          <a href="tel:1522-8281" class="order-btn call-btn">전화</a>
        </div>
      </div>

      <input type="hidden" id="orderService">
      <input type="hidden" id="orderTon">
      <input type="hidden" id="orderVehicle">
      <input type="hidden" id="orderOption">
      <input type="hidden" id="startRegion">
      <input type="hidden" id="endRegion">
      <input type="hidden" id="previewPriceField">
      <input type="hidden" id="previewPriceRaw">
      <input type="hidden" id="routeText">
      <input type="hidden" id="orderChannel">
    </form>
  </div>
</div>

<script>
(function () {
  var API_BASE =  'https://cargo-server-x061.onrender.com';
  var selectedStartRegion = '광주';
  var selectedStartArea = '광주';
  var selectedEndRegion = '전남';
  var selectedEndArea = '목포';
  var activeTarget = 'start';
  var selectedCommonRegion = '광주';

  var areaMap = {
    '전남': ['광양','나주','목포','순천','여수','여천','강진','고흥','곡성','구례','담양','무안','보성','신안','영광','영암','완도','장성','장흥','진도','함평','해남','화순'],
    '전북': ['전주','익산','군산','정읍','남원','김제','완주','고창','부안','임실','순창','진안','무주','장수'],
    '서울': ['서울'],
    '경기': ['수원','화성','평택','용인','성남','안산','시흥','광명','이천','안성','인천','부천','안양','고양','김포','의정부','남양주','하남','파주'],
    '충청': ['대전','천안','아산','청주','세종','공주','논산','서산','당진'],
    '영남': ['대구','부산','울산','창원','김해','양산','진주','경주','포항'],
    '광주': ['광주']
  };

  var officeMap = {
    '광주': { office: '광주광역시청', lat: 35.1595, lng: 126.8526 },
    '서울': { office: '서울특별시청', lat: 37.5663, lng: 126.9779 },
    '수원': { office: '수원시청', lat: 37.2636, lng: 127.0286 },
    '화성': { office: '화성시청', lat: 37.1995, lng: 126.8310 },
    '평택': { office: '평택시청', lat: 36.9921, lng: 127.1127 },
    '용인': { office: '용인시청', lat: 37.2411, lng: 127.1776 },
    '성남': { office: '성남시청', lat: 37.4201, lng: 127.1262 },
    '안산': { office: '안산시청', lat: 37.3219, lng: 126.8309 },
    '시흥': { office: '시흥시청', lat: 37.3802, lng: 126.8029 },
    '광명': { office: '광명시청', lat: 37.4786, lng: 126.8647 },
    '이천': { office: '이천시청', lat: 37.2722, lng: 127.4350 },
    '안성': { office: '안성시청', lat: 37.0080, lng: 127.2798 },
    '인천': { office: '인천광역시청', lat: 37.4563, lng: 126.7052 },
    '부천': { office: '부천시청', lat: 37.5034, lng: 126.7660 },
    '안양': { office: '안양시청', lat: 37.3943, lng: 126.9568 },
    '고양': { office: '고양시청', lat: 37.6584, lng: 126.8320 },
    '김포': { office: '김포시청', lat: 37.6150, lng: 126.7158 },
    '의정부': { office: '의정부시청', lat: 37.7381, lng: 127.0337 },
    '남양주': { office: '남양주시청', lat: 37.6360, lng: 127.2165 },
    '하남': { office: '하남시청', lat: 37.5392, lng: 127.2149 },
    '파주': { office: '파주시청', lat: 37.7601, lng: 126.7800 },
    '목포': { office: '목포시청', lat: 34.8118, lng: 126.3922 },
    '순천': { office: '순천시청', lat: 34.9507, lng: 127.4873 },
    '여수': { office: '여수시청', lat: 34.7604, lng: 127.6622 },
    '광양': { office: '광양시청', lat: 34.9407, lng: 127.6959 },
    '나주': { office: '나주시청', lat: 35.0161, lng: 126.7108 },
    '담양': { office: '담양군청', lat: 35.3212, lng: 126.9882 },
    '곡성': { office: '곡성군청', lat: 35.2820, lng: 127.2910 },
    '구례': { office: '구례군청', lat: 35.2024, lng: 127.4625 },
    '고흥': { office: '고흥군청', lat: 34.6111, lng: 127.2847 },
    '보성': { office: '보성군청', lat: 34.7714, lng: 127.0801 },
    '화순': { office: '화순군청', lat: 35.0645, lng: 126.9870 },
    '장흥': { office: '장흥군청', lat: 34.6816, lng: 126.9070 },
    '강진': { office: '강진군청', lat: 34.6421, lng: 126.7672 },
    '해남': { office: '해남군청', lat: 34.5732, lng: 126.5989 },
    '영암': { office: '영암군청', lat: 34.8001, lng: 126.6967 },
    '무안': { office: '무안군청', lat: 34.9904, lng: 126.4817 },
    '함평': { office: '함평군청', lat: 35.0659, lng: 126.5164 },
    '영광': { office: '영광군청', lat: 35.2771, lng: 126.5122 },
    '장성': { office: '장성군청', lat: 35.3017, lng: 126.7840 },
    '완도': { office: '완도군청', lat: 34.3110, lng: 126.7550 },
    '진도': { office: '진도군청', lat: 34.4868, lng: 126.2630 },
    '여천': { office: '여천동 행정복지센터', lat: 34.7604, lng: 127.6622 },
    '신안': { office: '신안군청', lat: 34.8262, lng: 126.1010 },
    '전주': { office: '전주시청', lat: 35.8242, lng: 127.1480 },
    '익산': { office: '익산시청', lat: 35.9403, lng: 126.9545 },
    '군산': { office: '군산시청', lat: 35.9676, lng: 126.7368 },
    '정읍': { office: '정읍시청', lat: 35.5699, lng: 126.8559 },
    '남원': { office: '남원시청', lat: 35.4164, lng: 127.3904 },
    '김제': { office: '김제시청', lat: 35.8036, lng: 126.8808 },
    '완주': { office: '완주군청', lat: 35.9048, lng: 127.1620 },
    '고창': { office: '고창군청', lat: 35.4354, lng: 126.7021 },
    '부안': { office: '부안군청', lat: 35.7318, lng: 126.7330 },
    '임실': { office: '임실군청', lat: 35.6179, lng: 127.2890 },
    '순창': { office: '순창군청', lat: 35.3744, lng: 127.1378 },
    '진안': { office: '진안군청', lat: 35.7917, lng: 127.4250 },
    '무주': { office: '무주군청', lat: 36.0072, lng: 127.6608 },
    '장수': { office: '장수군청', lat: 35.6473, lng: 127.5219 },
    '대전': { office: '대전광역시청', lat: 36.3504, lng: 127.3845 },
    '천안': { office: '천안시청', lat: 36.8151, lng: 127.1139 },
    '아산': { office: '아산시청', lat: 36.7898, lng: 127.0018 },
    '청주': { office: '청주시청', lat: 36.6424, lng: 127.4890 },
    '세종': { office: '세종특별자치시청', lat: 36.4800, lng: 127.2890 },
    '공주': { office: '공주시청', lat: 36.4466, lng: 127.1190 },
    '논산': { office: '논산시청', lat: 36.1872, lng: 127.0988 },
    '서산': { office: '서산시청', lat: 36.7848, lng: 126.4503 },
    '당진': { office: '당진시청', lat: 36.8937, lng: 126.6299 },
    '대구': { office: '대구광역시청', lat: 35.8714, lng: 128.6014 },
    '부산': { office: '부산광역시청', lat: 35.1796, lng: 129.0756 },
    '울산': { office: '울산광역시청', lat: 35.5384, lng: 129.3114 },
    '창원': { office: '창원시청', lat: 35.2281, lng: 128.6811 },
    '김해': { office: '김해시청', lat: 35.2285, lng: 128.8894 },
    '양산': { office: '양산시청', lat: 35.3350, lng: 129.0370 },
    '진주': { office: '진주시청', lat: 35.1802, lng: 128.1076 },
    '경주': { office: '경주시청', lat: 35.8562, lng: 129.2247 },
    '포항': { office: '포항시청', lat: 36.0190, lng: 129.3435 }
  };

  var fixedRouteRateTable1Ton = {
    '광주|목포': 100000,
    '목포|광주': 100000,
    '광주|순천': 110000,
    '순천|광주': 110000,
    '광주|여수': 130000,
    '여수|광주': 130000,
    '광주|전주': 120000,
    '전주|광주': 120000,
    '광주|서울': 190000,
    '서울|광주': 190000
  };

  var distanceRateTable1Ton = [
    { max: 10, price: 40000 },
    { max: 20, price: 50000 },
    { max: 30, price: 60000 },
    { max: 50, price: 70000 },
    { max: 70, price: 80000 },
    { max: 100, price: 90000 },
    { max: 150, price: 120000 },
    { max: 200, price: 150000 },
    { max: 250, price: 170000 },
    { max: 300, price: 190000 }
  ];

  var serviceRate = { '독차': 1, '혼적': 0.9 };
  var tonExtra = { '1톤': 0, '1.4톤': 10000, '2.5톤': 30000, '3.5톤': 40000, '5톤': 60000, '8톤': 90000, '11톤': 110000, '18톤': 140000, '25톤': 160000 };
  var vehicleExtra = { '카고': 0, '윙바디': 20000, '탑차': 20000, '리프트': 30000, '호루': 10000 };
  var optionExtra = { '일반': 0, '초장축': 10000 };
  var regionList = ['전남', '전북', '서울', '경기', '충청', '영남', '광주'];

  function qs(selector) { return document.querySelector(selector); }
  function qsa(selector) { return document.querySelectorAll(selector); }

  function setActive(selector, button) {
    var buttons = qsa(selector);
    for (var i = 0; i < buttons.length; i++) buttons[i].classList.remove('active');
    button.classList.add('active');
  }

  function bindSelectButtons(selector, callback) {
    var buttons = qsa(selector);
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        if (this.disabled) return;
        setActive(selector, this);
        if (callback) callback(this.getAttribute('data-value'));
        nardaUpdatePreview();
      });
    }
  }

  window.toggleExpand = function (id) {
    if (id === 'routeExpand') return;
    var el = document.getElementById(id);
    if (el) el.classList.toggle('open');
  };

  window.setActiveTarget = function (target) {
    activeTarget = target;

    var startBtn = document.getElementById('pickStartBtn');
    var endBtn = document.getElementById('pickEndBtn');
    var targetGuide = document.getElementById('targetGuide');
    var commonRegionTitle = document.getElementById('commonRegionTitle');
    var commonAreaTitle = document.getElementById('commonAreaTitle');
    var commonRegionNote = document.getElementById('commonRegionNote');

    startBtn.classList.remove('active');
    endBtn.classList.remove('active');

    if (target === 'start') {
      startBtn.classList.add('active');
      selectedCommonRegion = selectedStartRegion;
      targetGuide.innerText = '현재 출발지 선택중이십니다.';
      commonRegionTitle.innerText = '광역권 선택 · 출발지';
      commonAreaTitle.innerText = '지역 선택 · 출발지';
      commonRegionNote.innerText = '선택한 값이 출발지역에 반영됩니다';
    } else {
      endBtn.classList.add('active');
      selectedCommonRegion = selectedEndRegion;
      targetGuide.innerText = '현재 도착지 선택중이십니다.';
      commonRegionTitle.innerText = '광역권 선택 · 도착지';
      commonAreaTitle.innerText = '지역 선택 · 도착지';
      commonRegionNote.innerText = '선택한 값이 도착지역에 반영됩니다';
    }

    renderCommonRegionButtons();
    renderCommonAreaButtons();

    var regionBlock = document.getElementById('regionBlock');
    if (regionBlock) regionBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  function renderCommonRegionButtons() {
    var html = '';
    for (var i = 0; i < regionList.length; i++) {
      var active = regionList[i] === selectedCommonRegion ? ' active' : '';
      html += '<button type="button" class="chip common-region-chip' + active + '" data-value="' + regionList[i] + '">' + regionList[i] + '</button>';
    }
    document.getElementById('commonRegionButtons').innerHTML = html;
    var buttons = qsa('.common-region-chip');
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].addEventListener('click', function () {
        var all = qsa('.common-region-chip');
        for (var k = 0; k < all.length; k++) all[k].classList.remove('active');
        this.classList.add('active');
        selectedCommonRegion = this.getAttribute('data-value');
        renderCommonAreaButtons();
        var areaBlock = document.getElementById('areaBlock');
        if (areaBlock) areaBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  function renderCommonAreaButtons() {
    var areas = areaMap[selectedCommonRegion] || [];
    var currentValue = activeTarget === 'start' ? selectedStartArea : selectedEndArea;
    if (areas.indexOf(currentValue) === -1) currentValue = '';
    var html = '';
    for (var i = 0; i < areas.length; i++) {
      var active = areas[i] === currentValue ? ' active' : '';
      html += '<button type="button" class="chip common-area-chip' + active + '" data-value="' + areas[i] + '">' + areas[i] + '</button>';
    }
    document.getElementById('commonAreaButtons').innerHTML = html;
    var buttons = qsa('.common-area-chip');
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        var all = qsa('.common-area-chip');
        for (var k = 0; k < all.length; k++) all[k].classList.remove('active');
        this.classList.add('active');
        if (activeTarget === 'start') {
          selectedStartRegion = selectedCommonRegion;
          selectedStartArea = value;
          nardaUpdatePreview();
          setTimeout(function () {
            setActiveTarget('end');
          }, 180);
        } else {
          selectedEndRegion = selectedCommonRegion;
          selectedEndArea = value;
          nardaUpdatePreview();
          setTimeout(function () {
            var optionExpand = document.getElementById('optionExpand');
            if (optionExpand && !optionExpand.classList.contains('open')) {
              optionExpand.classList.add('open');
              var btn = document.querySelector('button[onclick="toggleExpand(\'optionExpand\')"]');
              if (btn) btn.innerText = '옵션 전체 선택 닫기';
            }
            if (optionExpand) optionExpand.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 180);
        }
      });
    }
  }

  function getActiveValue(selector, fallback) {
    var activeButton = document.querySelector(selector + '.active');
    return activeButton ? activeButton.getAttribute('data-value') : fallback;
  }

  function updateServiceAvailability() {
    var selectedTon = getActiveValue('.ton-chip', '1톤');
    var mixedButton = document.querySelector('.service-chip[data-value="혼적"]');
    var soloButton = document.querySelector('.service-chip[data-value="독차"]');
    var serviceButtons = qsa('.service-chip');
    for (var i = 0; i < serviceButtons.length; i++) {
      serviceButtons[i].classList.remove('disabled');
      serviceButtons[i].disabled = false;
    }
    if (selectedTon !== '1톤') {
      if (mixedButton) {
        mixedButton.classList.remove('active');
        mixedButton.classList.add('disabled');
        mixedButton.disabled = true;
      }
      if (soloButton) setActive('.service-chip', soloButton);
    }
  }

  function toRad(value) { return value * Math.PI / 180; }
  function getDistanceKm(lat1, lng1, lat2, lng2) {
    var R = 6371;
    var dLat = toRad(lat2 - lat1);
    var dLng = toRad(lng2 - lng1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  function get1TonBasePriceByDistance(distanceKm) {
    for (var i = 0; i < distanceRateTable1Ton.length; i++) {
      if (distanceKm <= distanceRateTable1Ton[i].max) return distanceRateTable1Ton[i].price;
    }
    var lastBasePrice = distanceRateTable1Ton[distanceRateTable1Ton.length - 1].price;
    var extraDistance = distanceKm - 300;
    var extraSteps = Math.ceil(extraDistance / 50);
    return lastBasePrice + (extraSteps * 20000);
  }

  function getFixedRouteRate1Ton(start, end) {
    var key = start + '|' + end;
    return Object.prototype.hasOwnProperty.call(fixedRouteRateTable1Ton, key) ? fixedRouteRateTable1Ton[key] : null;
  }

  function formatPrice(num) {
    var absNum = Math.abs(Number(num));
    var formatted = absNum.toLocaleString('ko-KR') + '원';
    return Number(num) < 0 ? '-' + formatted : formatted;
  }

  function roundToNearestThousand(num) { return Math.round(num / 1000) * 1000; }
  function getCurrentRoute() { return { start: selectedStartArea, end: selectedEndArea }; }

  function syncSummary() {
    document.getElementById('summaryService').innerText = getActiveValue('.service-chip', '독차');
    document.getElementById('summaryTon').innerText = getActiveValue('.ton-chip', '1톤');
    document.getElementById('summaryVehicle').innerText = getActiveValue('.vehicle-chip', '카고');
    document.getElementById('summaryOption').innerText = getActiveValue('.option-chip', '일반');
  }

  function syncOrderForm() {
    var route = getCurrentRoute();
    var service = getActiveValue('.service-chip', '독차');
    var ton = getActiveValue('.ton-chip', '1톤');
    var vehicle = getActiveValue('.vehicle-chip', '카고');
    var loadOption = getActiveValue('.option-chip', '일반');
    var priceText = document.getElementById('previewPrice').innerText || '';
    if (ton !== '1톤' && service === '혼적') service = '독차';
    document.getElementById('orderService').value = service;
    document.getElementById('orderTon').value = ton;
    document.getElementById('orderVehicle').value = vehicle;
    document.getElementById('orderOption').value = loadOption;
    document.getElementById('startRegion').value = selectedStartRegion;
    document.getElementById('endRegion').value = selectedEndRegion;
    document.getElementById('previewPriceField').value = priceText;
    document.getElementById('previewPriceRaw').value = priceText.replace(/[^\d]/g, '');
    document.getElementById('routeText').value = route.start + ' → ' + route.end;
  }

  window.nardaUpdatePreview = function () {
    updateServiceAvailability();
    syncSummary();

    var route = getCurrentRoute();
    var service = getActiveValue('.service-chip', '독차');
    var ton = getActiveValue('.ton-chip', '1톤');
    var vehicle = getActiveValue('.vehicle-chip', '카고');
    var loadOption = getActiveValue('.option-chip', '일반');
    if (ton !== '1톤' && service === '혼적') service = '독차';

    var start = route.start;
    var end = route.end;
    var startOfficeData = officeMap[start];
    var endOfficeData = officeMap[end];

    document.getElementById('startCity').value = start;
    document.getElementById('endCity').value = end;

    var officeText = '행정기관 확인 필요';
    var straightDistanceText = '거리 확인 필요';
    var distanceText = '거리 확인 필요';
    var vehicleTypeText = ton + ' ' + vehicle;
    var ruleText = '기준 확인 필요';
    var optionText = '실배차 시 상·하차 조건에 따라 변동될 수 있습니다.';
    var badgeText = '참고 운임';
    var basePriceText = '0원';
    var servicePriceText = '0원';
    var tonPriceText = '0원';
    var vehiclePriceText = '0원';
    var optionPriceText = '0원';
    var finalPrice = 0;

    if (start === end) {
      officeText = start + ' 동일 지역';
      straightDistanceText = '약 0.0km';
      distanceText = '약 0km';
      ruleText = '동일 지역 기본요금 적용';
      badgeText = '근거리요금 적용';
      var sameAreaBasePrice = 40000;
      var sameServiceMultiplier = serviceRate[service] || 1;
      var sameAdjustedBasePrice = roundToNearestThousand(sameAreaBasePrice * sameServiceMultiplier);
      var sameServiceDiff = sameAdjustedBasePrice - sameAreaBasePrice;
      var sameTonPrice = tonExtra[ton] || 0;
      var sameVehiclePrice = vehicleExtra[vehicle] || 0;
      var sameOptionPrice = optionExtra[loadOption] || 0;
      finalPrice = sameAdjustedBasePrice + sameTonPrice + sameVehiclePrice + sameOptionPrice;
      basePriceText = formatPrice(sameAreaBasePrice);
      servicePriceText = sameServiceDiff === 0 ? '0원' : formatPrice(sameServiceDiff);
      tonPriceText = formatPrice(sameTonPrice);
      vehiclePriceText = formatPrice(sameVehiclePrice);
      optionPriceText = formatPrice(sameOptionPrice);
    } else if (startOfficeData && endOfficeData) {
      officeText = startOfficeData.office + ' ↔ ' + endOfficeData.office;
      var straightDistance = getDistanceKm(startOfficeData.lat, startOfficeData.lng, endOfficeData.lat, endOfficeData.lng);
      var adjustedDistance = Math.round(straightDistance * 1.25);
      straightDistanceText = '약 ' + straightDistance.toFixed(1) + 'km';
      distanceText = '약 ' + adjustedDistance + 'km';
      var fixedBasePrice = getFixedRouteRate1Ton(start, end);
      var basePrice = null;
      if (fixedBasePrice !== null) {
        basePrice = fixedBasePrice;
        ruleText = '노선별 고정요금 적용';
        badgeText = '고정요금 적용';
      } else {
        basePrice = get1TonBasePriceByDistance(adjustedDistance);
        ruleText = '거리 운임표 적용';
        badgeText = '거리요금 적용';
      }
      var serviceMultiplier = serviceRate[service] || 1;
      var serviceAdjustedBasePrice = roundToNearestThousand(basePrice * serviceMultiplier);
      var serviceDiff = serviceAdjustedBasePrice - basePrice;
      var tonPrice = tonExtra[ton] || 0;
      var vehiclePrice = vehicleExtra[vehicle] || 0;
      var extraOptionPrice = optionExtra[loadOption] || 0;
      finalPrice = serviceAdjustedBasePrice + tonPrice + vehiclePrice + extraOptionPrice;
      basePriceText = formatPrice(basePrice);
      servicePriceText = serviceDiff === 0 ? '0원' : formatPrice(serviceDiff);
      tonPriceText = formatPrice(tonPrice);
      vehiclePriceText = formatPrice(vehiclePrice);
      optionPriceText = formatPrice(extraOptionPrice);
      if (loadOption === '초장축') optionText = '초장축 추가요금 반영 / 실배차 시 상세 조건에 따라 변동될 수 있습니다.';
      if (ton !== '1톤') optionText += ' / 혼적은 1톤 차량에만 적용됩니다.';
      if (fixedBasePrice === null && adjustedDistance > 300) ruleText += ' (300km 초과 자동추가 적용)';
    }

    document.getElementById('previewRoute').innerText = start + ' → ' + end;
    document.getElementById('previewCondition').innerText = service + ' · ' + ton + ' · ' + vehicle + ' · ' + loadOption;
    document.getElementById('previewOffice').innerText = officeText;
    document.getElementById('previewStraightDistance').innerText = straightDistanceText;
    document.getElementById('previewDistance').innerText = distanceText;
    document.getElementById('previewVehicleType').innerText = vehicleTypeText;
    document.getElementById('previewBasePrice').innerText = basePriceText;
    document.getElementById('previewServicePrice').innerText = servicePriceText;
    document.getElementById('previewTonPrice').innerText = tonPriceText;
    document.getElementById('previewVehiclePrice').innerText = vehiclePriceText;
    document.getElementById('previewOptionPrice').innerText = optionPriceText;
    document.getElementById('previewRule').innerText = ruleText;
    document.getElementById('previewOption').innerText = optionText;
    document.getElementById('previewBadge').innerText = badgeText;
    document.getElementById('previewMileage').innerText = '건당 3,000원 적립';
    document.getElementById('previewPrice').innerText = formatPrice(finalPrice);
    syncOrderForm();
  };

  window.focusOrderPhone = function () {
    nardaUpdatePreview();
    var target = document.getElementById('customerPhoneSingle');
    if (target) target.focus();
  };

  function buildCustomerPhone() {
    var phone = document.getElementById('customerPhoneSingle').value.trim();
    document.getElementById('customerPhone').value = phone;
  }

  window.submitNardaOrderByType = async function (channel) {
    buildCustomerPhone();
    syncOrderForm();
    var customerPhone = document.getElementById('customerPhone').value.trim();
    if (!customerPhone) {
      alert('연락처를 입력해주세요.');
      document.getElementById('customerPhoneSingle').focus();
      return;
    }
    document.getElementById('orderChannel').value = channel;
    var payload = {
      customer_phone: customerPhone,
      memo: document.getElementById('memo').value.trim(),
      service_type: document.getElementById('orderService').value,
      ton_type: document.getElementById('orderTon').value,
      vehicle_type: document.getElementById('orderVehicle').value,
      load_option: document.getElementById('orderOption').value,
      start_region: document.getElementById('startRegion').value,
      end_region: document.getElementById('endRegion').value,
      preview_price_text: document.getElementById('previewPriceField').value,
      preview_price: document.getElementById('previewPriceRaw').value,
      route_text: document.getElementById('routeText').value,
      order_channel: channel
    };
    var clickedButton = document.querySelector('.sms-btn');
    var originalText = clickedButton ? clickedButton.innerText : '';
    try {
      if (channel === 'sms' && clickedButton) {
        clickedButton.disabled = true;
        clickedButton.innerText = '진행중';
      }
      var response = await fetch(API_BASE + '/api/order/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
      var result = await response.json();
      if (!response.ok || !result.success) {
        alert(result.message || '접수 처리 중 문제가 발생했습니다.');
        return;
      }
      alert(channel === 'sms' ? '문자접수가 완료되었습니다.' : '접수가 완료되었습니다.');
      document.getElementById('nardaOrderForm').reset();
      document.getElementById('customerPhone').value = '';
      document.getElementById('orderChannel').value = '';
      syncOrderForm();
    } catch (error) {
      console.error(error);
      alert('접수 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      if (channel === 'sms' && clickedButton) {
        clickedButton.disabled = false;
        clickedButton.innerText = originalText;
      }
    }
  };

  setActiveTarget('start');
  bindSelectButtons('.service-chip');
  bindSelectButtons('.ton-chip', function () { updateServiceAvailability(); });
  bindSelectButtons('.vehicle-chip');
  bindSelectButtons('.option-chip');
  updateServiceAvailability();
  nardaUpdatePreview();
})();
</script>
</body>
</html>
