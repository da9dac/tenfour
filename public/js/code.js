//메뉴들
//메인메뉴
var menu = `<div>
자주 찾는 메뉴들을 모아놨어요! 📃<br>필요한 메뉴를 선택해주세요! 😉
</div>
<p></p>
<div class="btn_group">
  <a class="btn_link" onclick='kkinfoButton()'>🎓교육과정 안내</a>
  <a class="btn_link" onclick='facilinfoButton()'>🌁시설안내</a>
  <a class="btn_link" onclick='phoneinfoButton()'>📞교내 연락처</a>
  <a class="btn_link" onclick='kkButton()'>📃공지사항</a>
</div>`
//교육과정 안내 전체메뉴
var kkinfo = `<div>
🌼 필요한 메뉴를 선택해주세요!
</div>
<p></p>
<div class="btn_group">
  <a class="btn_link" onclick='kkButton()'>🎓교육과정</a>
  <a class="btn_link" onclick='mpButton()'>🎓최소이수학점</a>
  <a class="btn_link" onclick='hakjumButton()'>🎓나의 남은학점</a>
  <a class="btn_link" onclick='haksafaqButton()'>🎓학사제도 FAQ</a>
</div>`;
//교내 연락처 전체메뉴
var phoneinfo = `<div>
🌼 필요한 메뉴를 선택해주세요!
</div>
<p></p>
<div class="btn_group">
  <a class="btn_link" onclick='depphoneButton()'>📞학과 연락처</a>
  <a class="btn_link" onclick='mainphoneButton()'>📞주요 연락처</a>
  <a class="btn_link" onclick='phonepop()'>📞전체 연락처</a>
</div>`;
//시설안내 전체메뉴
var facilinfo = `<div>
🌼 필요한 메뉴를 선택해주세요!
</div>
<p></p>
<div class="btn_group">
  <a class="btn_link" onclick='library()'>📖도서관 이용안내</a>
  <a class="btn_link" onclick='dormitory()'>🏠기숙사 이용안내</a>
  <a class="btn_link" onclick='wifi()'>💻와이파이 이용안내</a>
  <a class="btn_link" onclick='physical()'>⚽체육시설 이용안내</a>
  <a class="btn_link" onclick='mappop()'>🕍캠퍼스맵</a>
</div>`;
//캘린더
var cal = `<div>
📆 날짜를 선택해주세요!
</div>
<div>
<select name="monthList" id="monthList" onchange="iljung(this.value)">
  <option>원하시는 달을 선택해주세요.</option>
  <option value="1">1월</option>
  <option value="2">2월</option>
  <option value="3">3월</option>
  <option value="4">4월</option>
  <option value="5">5월</option>
  <option value="6">6월</option>
  <option value="7">7월</option>
  <option value="8">8월</option>
  <option value="9">9월</option>
  <option value="10">10월</option>
  <option value="11">11월</option>
  <option value="12">12월</option>
</select>
</div>
<div class="btn_group">
<a class="btn_link" onclick='calenderButton()'>전체일정 보러가기</a>
</div>`;
//기타 내보내기
newAll = function sendAll() {
    return [cal, kkinfo, phoneinfo, menu, facilinfo];
}
//교육과정  코드
var civil = `<h3>토목공학과 교육과정</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">학년-학기</th>
                      <th style="width:250px">과목명</th>
                      <th style="width:110px">분류</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 - 1</td>
                      <td>토목직업의탐색</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>공업정역학</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>창의적토목설계입문</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>기초응용역학</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>유체역학및실험</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>공학전산실무</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>구조역학및실험</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>측량학및실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>토질역학및실험1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>지형공간정보학</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>철근콘크리트공학1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>관수로종합설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>상하수도공학및설계1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>PS콘크리트구조설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>토질역학및실험2</td>
                      <td>전공선택</td>
                    </tr>
                    <td>3 - 2</td>
                    <td>수문학종합설계</td>
                    <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>개수로종합설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>상하수도공학및설계2</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>토목종합설계1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>강구조및합성구조설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>기초공학및설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>토목시공학</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>건설교재연구및지도법</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>건설교육론</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>토목종합설계2</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>해양항만및종합설계</td>
                      <td>전공선택</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학과의 교육과정이 궁금하신가요?
              </div>
              <div>
                <select name="kkList" id="kkList" onchange="kkSelect(this.value)">
                    <option>학과를 선택해주세요.</option>
                    <option value="1">건축공학과</option>
                    <option value="2">건축학부(5년제)</option>
                    <option value="3">소프트웨어학과</option>
                    <option value="4">전자공학과</option>
                    <option value="5">토목공학과</option>
                </select>
              </div>`;

var arche = `<h3>건축공학과 교육과정</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">학년-학기</th>
                      <th style="width:250px">과목명</th>
                      <th style="width:110px">분류</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 - 1</td>
                      <td>건축설계기초1</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>1 - 1</td>
                      <td>건축개론</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>창의적공학설계입문</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>BIM및연습</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>건축일반구조</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>건축재료학</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>건축공정관리실습</td>
                      <td>전공심화</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>건축컴퓨터프로그래밍</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>건축일반구조</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>건축환경및설비</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>건축구조역학1</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>건축시공학</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>건설관리</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>건축재료실험및설계</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>건축구조역학2</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>리모델링공학</td>
                      <td>전공심환</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축산학</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축구조실험캡스톤디자인</td>
                      <td>전공심화</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축실무캡스톤디자인</td>
                      <td>전공심화</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축품질관리</td>
                      <td>전공심화</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축법규</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>건축공학종합설계1</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>강구조공학</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>건설교과교육론</td>
                      <td>전공심화</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>전산해석및실습</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>건축공학종합설계2</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>건설교과교재연구및지도법</td>
                      <td>전공심화</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학과의 교육과정이 궁금하신가요?
              </div>
              <div>
                <select name="kkList" id="kkList" onchange="kkSelect(this.value)">
                    <option>학과를 선택해주세요.</option>
                    <option value="1">건축공학과</option>
                    <option value="2">건축학부(5년제)</option>
                    <option value="3">소프트웨어학과</option>
                    <option value="4">전자공학과</option>
                    <option value="5">토목공학과</option>
                </select>
              </div>`;

var sw = `<h3>소프트웨어학과 교육과정</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">학년-학기</th>
                      <th style="width:250px">과목명</th>
                      <th style="width:110px">분류</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 - 1</td>
                      <td>문제해결기법과 코딩</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>1 - 1</td>
                      <td>창의적소프트웨어설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>C프로그래밍과 실습1</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>R프로그래밍과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>C프로그래밍과 실습2</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>웹프로그래밍과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>자바프로그래밍과 실습1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>오라클중심의 데이터베이스와 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>자바프로그래밍과 실습2</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>유닉스프로그래밍과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>AI활용을 위한 머신러닝 기초</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>자료구조</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>모바일프로그래밍과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>빅데이터 분석과 활용</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>사물인터넷과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>소프트웨어 설계 및 개발</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>고급데이터베이스구축과 실무</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>고급모바일프로그래밍과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>정보시스템 구축</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>운영체제</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>소프트웨어 캡스톤디자인1</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>프로그래밍언어응용과 컴파일러</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>데이터구현기반 알고리즘</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>응용SW기반 인공지능이론과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>데이터통신과 SW보안</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>소프트웨어 캡스톤디자인2</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>컴퓨터보안과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>증강현실과 가상현실</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>무선통신과 인터넷</td>
                      <td>전공선택</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학과의 교육과정이 궁금하신가요?
              </div>
              <div>
                <select name="kkList" id="kkList" onchange="kkSelect(this.value)">
                    <option>학과를 선택해주세요.</option>
                    <option value="1">건축공학과</option>
                    <option value="2">건축학부(5년제)</option>
                    <option value="3">소프트웨어학과</option>
                    <option value="4">전자공학과</option>
                    <option value="5">토목공학과</option>
                </select>
              </div>`;

var arch = `<h3>건축학부 교육과정</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">학년-학기</th>
                      <th style="width:250px">과목명</th>
                      <th style="width:110px">분류</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 - 1</td>
                      <td>건축설계기초1</td>
                      <td>전공필수</td>
                    </tr>
                    <td>1 - 1</td>
                    <td>건축개론</td>
                    <td>전공필수</td>
                  </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>건축설계기초2</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>건축조형론</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>건축설계1</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>서양건축사</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>건축CAD</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>건축일반구조</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>BIM및연습</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>한국건축사</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>건축설계2</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>건축재료및구법</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>건축설계3</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>건축환경계획</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>구조디자인</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>건축계획론</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축설계4</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축법규</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축시공학</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>환경친화건축</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>현대건축론</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>건축설비</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>건축설계5</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>환경심리및행동론</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>도시설계론</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>목조건축계획및설계</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>단지및도시계획</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>건축설계6</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>특수공간디자인</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>주택과커뮤니티</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>건축작품분석</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>5 - 1</td>
                      <td>건축실무</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>5 - 1</td>
                      <td>건축종합설계1</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>5 - 1</td>
                      <td>건축과조경</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>5 - 1</td>
                      <td>주거환경조사론</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>5 - 2</td>
                      <td>건축종합설계2</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>5 - 2</td>
                      <td>목조건축계획및설계2</td>
                      <td>전공선택</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학과의 교육과정이 궁금하신가요?
              </div>
              <div>
                <select name="kkList" id="kkList" onchange="kkSelect(this.value)">
                    <option>학과를 선택해주세요.</option>
                    <option value="1">건축공학과</option>
                    <option value="2">건축학부(5년제)</option>
                    <option value="3">소프트웨어학과</option>
                    <option value="4">전자공학과</option>
                    <option value="5">토목공학과</option>
                </select>
              </div>`;

var elec = `<h3>전자공학과 교육과정</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">학년-학기</th>
                      <th style="width:250px">과목명</th>
                      <th style="width:110px">분류</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 - 1</td>
                      <td>전자공학직업탐색</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>1 - 1</td>
                      <td>C프로그래밍</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>전자공학의설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>파이썬응용프로그래밍</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>기초전자실험1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>회로이론1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>전기자기학</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>디지털논리설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>기초전자실험2</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>마이크로프로세서설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td><회로이론2/td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>디지털신호처리이론및설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>전자공학실험1</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>전자회로이론및설계1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>임베디드시스템설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>전기전자공학실험2</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>IOT시스템설계</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>전자회로이온및설계2</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>디지털통신</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>전자종합설계1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>이동통신</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>제어공학</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>전자종합설계2</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>RF회로설계</td>
                      <td>전공필수</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학과의 교육과정이 궁금하신가요?
              </div>
              <div>
                <select name="kkList" id="kkList" onchange="kkSelect(this.value)">
                    <option>학과를 선택해주세요.</option>
                    <option value="1">건축공학과</option>
                    <option value="2">건축학부(5년제)</option>
                    <option value="3">소프트웨어학과</option>
                    <option value="4">전자공학과</option>
                    <option value="5">토목공학과</option>
                </select>
              </div>`;

newKk = function sendkk() {
    return [sw, arch, arche, civil, elec];
}

//졸업요건

//이수학점
var ttyear = `<h3>2022학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축학</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>20</td>
                      <td>20</td>
                      <td>20</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>36</td>
                      <td>36</td>
                      <td>36</td>
                      <td>36</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>69</td>
                      <td>220</td>
                      <td>99</td>
                      <td>106</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>25</td>
                      <td>0</td>
                      <td>0</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>256</td>
                      <td>135</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var toyear = `<h3>2021학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축학</th>
                      <th style="width:120px">건축공학</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>26</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>20</td>
                      <td>20</td>
                      <td>20</td>
                      <td>20</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>36</td>
                      <td>36</td>
                      <td>36</td>
                      <td>36</td>
                      <td>56</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>69</td>
                      <td>220</td>
                      <td>99</td>
                      <td>106</td>
                      <td>66</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>25</td>
                      <td>0</td>
                      <td>0</td>
                      <td>18</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>256</td>
                      <td>135</td>
                      <td>160</td>
                      <td>130</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

//tz 20 ~ e 08
var tzyear = `<h3>2020학번 최소 이수학점</h3>
<div class="table-box">
  <table class="table table--min" cellspacing="15" cellpadding="0">
    <thead>
      <tr>
        <th style="width:120px">구분</th>
        <th style="width:120px">일반학과</th>
        <th style="width:120px">의학</th>
        <th style="width:120px">간호</th>
        <th style="width:120px">건축학(5년과정)</th>
        <th style="width:120px">건축공학</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>교양필수</td>
        <td>16</td>
        <td>16</td>
        <td>16</td>
        <td>16</td>
        <td>26</td>
      </tr>
      <tr>
        <td>교양선택</td>
        <td>20</td>
        <td>18</td>
        <td>20</td>
        <td>20</td>
        <td>30</td>
      </tr>
      <tr>
        <td>교양합계</td>
        <td>36</td>
        <td>34</td>
        <td>36</td>
        <td>36</td>
        <td>56</td>
      </tr>
      <tr>
        <td>전공필수<br>전공선택</td>
        <td>69</td>
        <td>220</td>
        <td>99</td>
        <td>106</td>
        <td>66</td>
      </tr>
      <tr>
        <td>일반선택</td>
        <td>25</td>
        <td>0</td>
        <td>0</td>
        <td>18</td>
        <td>8</td>
      </tr>
      <tr>
        <td>합계</td>
        <td>130</td>
        <td>254</td>
        <td>135</td>
        <td>160</td>
        <td>130</td>
      </tr>
    </tbody>
  </table>
</div>
<p></p>
<div>
  다른 학번의 이수학점이 궁금하신가요?
</div>
<div>
  <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
      <option>입학연도를 선택해주세요.</option>
      <option value="2022">2022년</option>
      <option value="2021">2021년</option>
      <option value="2020">2020년</option>
      <option value="2019">2019년</option>
      <option value="2018">2018년</option>
      <option value="2017">2017년</option>
      <option value="2016">2016년</option>
      <option value="2015">2015년</option>
      <option value="2014">2014년</option>
      <option value="2013">2013년</option>
      <option value="2012">2012년</option>
      <option value="2011">2011년</option>
      <option value="2010">2010년</option>
      <option value="2009">2009년</option>
      <option value="2008">2008년</option>
  </select>
 </div>`;

var onyear = `<h3>2019학번 최소 이수학점</h3>
<div class="table-box">
  <table class="table table--min" cellspacing="15" cellpadding="0">
    <thead>
      <tr>
        <th style="width:120px">구분</th>
        <th style="width:120px">일반학과</th>
        <th style="width:120px">의학</th>
        <th style="width:120px">간호</th>
        <th style="width:120px">건축학(5년과정)</th>
        <th style="width:120px">건축공학</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>교양필수</td>
        <td>16</td>
        <td>16</td>
        <td>16</td>
        <td>16</td>
        <td>26</td>
      </tr>
      <tr>
        <td>교양선택</td>
        <td>20</td>
        <td>18</td>
        <td>20</td>
        <td>20</td>
        <td>30</td>
      </tr>
      <tr>
        <td>교양합계</td>
        <td>36</td>
        <td>34</td>
        <td>36</td>
        <td>36</td>
        <td>56</td>
      </tr>
      <tr>
        <td>전공필수<br>전공선택</td>
        <td>69</td>
        <td>220</td>
        <td>99</td>
        <td>106</td>
        <td>66</td>
      </tr>
      <tr>
        <td>일반선택</td>
        <td>25</td>
        <td>0</td>
        <td>0</td>
        <td>18</td>
        <td>8</td>
      </tr>
      <tr>
        <td>합계</td>
        <td>130</td>
        <td>254</td>
        <td>135</td>
        <td>160</td>
        <td>130</td>
      </tr>
    </tbody>
  </table>
</div>
<p></p>
<div>
  다른 학번의 이수학점이 궁금하신가요?
</div>
<div>
  <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
      <option>입학연도를 선택해주세요.</option>
      <option value="2022">2022년</option>
      <option value="2021">2021년</option>
      <option value="2020">2020년</option>
      <option value="2019">2019년</option>
      <option value="2018">2018년</option>
      <option value="2017">2017년</option>
      <option value="2016">2016년</option>
      <option value="2015">2015년</option>
      <option value="2014">2014년</option>
      <option value="2013">2013년</option>
      <option value="2012">2012년</option>
      <option value="2011">2011년</option>
      <option value="2010">2010년</option>
      <option value="2009">2009년</option>
      <option value="2008">2008년</option>
  </select>
 </div>`;

var oeyear = `<h3>2018학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축학(5년과정)</th>
                      <th style="width:120px">건축공학</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>26</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>20</td>
                      <td>18</td>
                      <td>20</td>
                      <td>20</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>36</td>
                      <td>34</td>
                      <td>36</td>
                      <td>36</td>
                      <td>56</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>69</td>
                      <td>220</td>
                      <td>99</td>
                      <td>106</td>
                      <td>66</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>25</td>
                      <td>0</td>
                      <td>0</td>
                      <td>18</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>254</td>
                      <td>135</td>
                      <td>160</td>
                      <td>130</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var osyear = `<h3>2017학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>28</td>
                      <td>26</td>
                      <td>28</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>8</td>
                      <td>8</td>
                      <td>8</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>36</td>
                      <td>34</td>
                      <td>36</td>
                      <td>36</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>69</td>
                      <td>220</td>
                      <td>99</td>
                      <td>106</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>25</td>
                      <td>0</td>
                      <td>0</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>254</td>
                      <td>135</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var osixyear = `<h3>2016학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>28</td>
                      <td>26</td>
                      <td>28</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>8</td>
                      <td>6</td>
                      <td>6</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>36</td>
                      <td>32</td>
                      <td>34</td>
                      <td>36</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>69</td>
                      <td>219</td>
                      <td>99</td>
                      <td>106</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>25</td>
                      <td>0</td>
                      <td>0</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>251</td>
                      <td>133</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var ofyear = `<h3>2015학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>27</td>
                      <td>24</td>
                      <td>24</td>
                      <td>29</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>12</td>
                      <td>10</td>
                      <td>10</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>39</td>
                      <td>34</td>
                      <td>34</td>
                      <td>41</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>68</td>
                      <td>220</td>
                      <td>97</td>
                      <td>107</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>23</td>
                      <td>0</td>
                      <td>0</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>254</td>
                      <td>131</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var ofouryear = `<h3>2014학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축공학(공학인증)</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>30</td>
                      <td>24</td>
                      <td>24</td>
                      <td>16</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>10</td>
                      <td>10</td>
                      <td>10</td>
                      <td>40</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>40</td>
                      <td>34</td>
                      <td>34</td>
                      <td>56</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>67</td>
                      <td>226</td>
                      <td>97</td>
                      <td>60</td>
                      <td>106</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>23</td>
                      <td>0</td>
                      <td>0</td>
                      <td>14</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>260</td>
                      <td>131</td>
                      <td>130</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var othreeyear = `<h3>2013학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축공학(공학인증)</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>22</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>18</td>
                      <td>18</td>
                      <td>18</td>
                      <td>40</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>40</td>
                      <td>34</td>
                      <td>34</td>
                      <td>56</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>67</td>
                      <td>226</td>
                      <td>97</td>
                      <td>60</td>
                      <td>106</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>23</td>
                      <td>0</td>
                      <td>0</td>
                      <td>14</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>260</td>
                      <td>131</td>
                      <td>130</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var otyear = `<h3>2012학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축공학(공학인증)</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>22</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>18</td>
                      <td>18</td>
                      <td>18</td>
                      <td>40</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>40</td>
                      <td>34</td>
                      <td>34</td>
                      <td>56</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>67</td>
                      <td>226</td>
                      <td>97</td>
                      <td>60</td>
                      <td>106</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>23</td>
                      <td>0</td>
                      <td>0</td>
                      <td>14</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>260</td>
                      <td>131</td>
                      <td>130</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var ooyear = `<h3>2011학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축공학(공학인증)</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>22</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>18</td>
                      <td>18</td>
                      <td>18</td>
                      <td>40</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>40</td>
                      <td>34</td>
                      <td>34</td>
                      <td>56</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>67</td>
                      <td>217</td>
                      <td>97</td>
                      <td>60</td>
                      <td>106</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>23</td>
                      <td>0</td>
                      <td>0</td>
                      <td>14</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>251</td>
                      <td>131</td>
                      <td>130</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var ozyear = `<h3>2010학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축공학(공학인증)</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>18</td>
                      <td>12</td>
                      <td>12</td>
                      <td>16</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>16</td>
                      <td>20</td>
                      <td>20</td>
                      <td>40</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>34</td>
                      <td>32</td>
                      <td>32</td>
                      <td>56</td>
                      <td>34</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>65</td>
                      <td>217</td>
                      <td>97</td>
                      <td>60</td>
                      <td>95</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>31</td>
                      <td>0</td>
                      <td>0</td>
                      <td>14</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>249</td>
                      <td>129</td>
                      <td>130</td>
                      <td>150</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var nyear = `<h3>2009학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축공학(공학인증)</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>18</td>
                      <td>12</td>
                      <td>12</td>
                      <td>16</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>16</td>
                      <td>20</td>
                      <td>20</td>
                      <td>40</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>34</td>
                      <td>32</td>
                      <td>32</td>
                      <td>56</td>
                      <td>34</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>65</td>
                      <td>217</td>
                      <td>97</td>
                      <td>60</td>
                      <td>95</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>31</td>
                      <td>0</td>
                      <td>0</td>
                      <td>14</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>249</td>
                      <td>129</td>
                      <td>130</td>
                      <td>150</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var eyear = `<h3>2008학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">공학인증</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>11</td>
                      <td>9</td>
                      <td>9</td>
                      <td>8</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>22</td>
                      <td>24</td>
                      <td>24</td>
                      <td>40</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>33</td>
                      <td>33</td>
                      <td>33</td>
                      <td>48</td>
                      <td>33</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>65</td>
                      <td>219</td>
                      <td>97</td>
                      <td>65</td>
                      <td>95</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>32</td>
                      <td>0</td>
                      <td>0</td>
                      <td>17</td>
                      <td>26</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>252</td>
                      <td>130</td>
                      <td>130</td>
                      <td>154</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

newMp = function sendmp() {
    return [ttyear, toyear, tzyear, onyear, oeyear, osyear, osixyear, ofyear, ofouryear, othreeyear, otyear, ooyear, ozyear, nyear, eyear];
}

//학과연락처
//토목
var civilp = `<h3>📞토목공학과 연락처</h3>
<div  style="word-break: break-word;">
	교학팀 전화번호 : 033-649-7525
</div>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
			<th style="width:120px">교수명</th>
			<th style="width:250px">전화번호</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>김규한</td>
				<td>033-649-7511</td>
			</tr>
			<tr>
				<td>유승운</td>
				<td>033-649-7513</td>
			</tr>
			<tr>
				<td>박창근</td>
				<td>033-649-7514</td>
			</tr>
		</tbody>
	</table>
</div>
<p></p>
<div>
	❓ 다른 학과의 연락처가 궁금하신가요
</div>
<div>
	<select name="depphoneList" id="depphoneList" onchange="depphoneSelect(this.value)">
		<option>학과를 선택해주세요.</option>
		<option value="1">건축공학과</option>
		<option value="2">건축학부(5년제)</option>
		<option value="3">소프트웨어학과</option>
		<option value="4">전자공학과</option>
		<option value="5">토목공학과</option>
	</select>
</div>`;
//건축학부
var archp = `<h3>📞건축학부 연락처</h3>
<div  style="word-break: break-word;">
	교학팀 전화번호 : 033-649-7525
</div>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
			<th style="width:120px">교수명</th>
			<th style="width:250px">전화번호</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>고상균</td>
				<td>033-649-7547</td>
			</tr>
			<tr>
				<td>심대영</td>
				<td>033-649-7518</td>
			</tr>
			<tr>
				<td>문정인</td>
				<td>033-649-7673</td>
			</tr>
			<tr>
				<td>이재영</td>
				<td>033-649-7527</td>
			</tr>
			<tr>
				<td>김주민</td>
				<td>033-649-7598</td>
			</tr>
		</tbody>
	</table>
</div>
<p></p>
<div>
	❓ 다른 학과의 연락처가 궁금하신가요
</div>
<div>
	<select name="depphoneList" id="depphoneList" onchange="depphoneSelect(this.value)">
		<option>학과를 선택해주세요.</option>
		<option value="1">건축공학과</option>
		<option value="2">건축학부(5년제)</option>
		<option value="3">소프트웨어학과</option>
		<option value="4">전자공학과</option>
		<option value="5">토목공학과</option>
	</select>
</div>`;
//건축공학
var archep = `<h3>📞건축공학과 연락처</h3>
<div  style="word-break: break-word;">
	교학팀 전화번호 : 033-649-7525
</div>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
			<th style="width:120px">교수명</th>
			<th style="width:250px">전화번호</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>김병윤</td>
				<td>033-649-7528</td>
			</tr>
			<tr>
				<td>이웅균</td>
				<td>033-649-7548</td>
			</tr>
			<tr>
				<td>신진원</td>
				<td>033-649-7694</td>
			</tr>
		</tbody>
	</table>
</div>
<p></p>
<div>
	❓ 다른 학과의 연락처가 궁금하신가요
</div>
<div>
	<select name="depphoneList" id="depphoneList" onchange="depphoneSelect(this.value)">
		<option>학과를 선택해주세요.</option>
		<option value="1">건축공학과</option>
		<option value="2">건축학부(5년제)</option>
		<option value="3">소프트웨어학과</option>
		<option value="4">전자공학과</option>
		<option value="5">토목공학과</option>
	</select>
</div>`;
//전자공학
var elecp = `<h3>📞전자공학과 연락처</h3>
<div  style="word-break: break-word;">
	교학팀 전화번호 : 033-649-7506
</div>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
			<th style="width:120px">교수명</th>
			<th style="width:250px">전화번호</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>이금원</td>
				<td>033-649-7556</td>
			</tr>
			<tr>
				<td>김종일</td>
				<td>033-649-7557</td>
			</tr>
			<tr>
				<td>유용경</td>
				<td>033-649-7379</td>
			</tr>
			<tr>
				<td>송호승</td>
				<td>033-649-7553</td>
			</tr>
		</tbody>
	</table>
</div>
<p></p>
<div>
	❓ 다른 학과의 연락처가 궁금하신가요
</div>
<div>
	<select name="depphoneList" id="depphoneList" onchange="depphoneSelect(this.value)">
		<option>학과를 선택해주세요.</option>
		<option value="1">건축공학과</option>
		<option value="2">건축학부(5년제)</option>
		<option value="3">소프트웨어학과</option>
		<option value="4">전자공학과</option>
		<option value="5">토목공학과</option>
	</select>
</div>`;
//소프트웨어
var swp = `<h3>📞소프트웨어학과 연락처</h3>
<div  style="word-break: break-word;">
	교학팀 전화번호 : 033-649-7430
</div>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
			<th style="width:120px">교수명</th>
			<th style="width:250px">전화번호</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>정이나</td>
				<td>033-649-7597</td>
			</tr>
			<tr>
				<td>심손권</td>
				<td>033-649-7208</td>
			</tr>
			<tr>
				<td>장원중</td>
				<td>033-649-7265</td>
			</tr>
			<tr>
				<td>조병호</td>
				<td>033-649-7567</td>
			</tr>
		</tbody>
	</table>
</div>
<p></p>
<div>
	❓ 다른 학과의 연락처가 궁금하신가요
</div>
<div>
	<select name="depphoneList" id="depphoneList" onchange="depphoneSelect(this.value)">
		<option>학과를 선택해주세요.</option>
		<option value="1">건축공학과</option>
		<option value="2">건축학부(5년제)</option>
		<option value="3">소프트웨어학과</option>
		<option value="4">전자공학과</option>
		<option value="5">토목공학과</option>
	</select>
</div>`;

newDepphone = function sendDepphone() {
    return [archep, archp, swp, elecp, civilp];
}

//주요 연락처
var mainp = `<h3>📞주요 연락처</h3>
<div  style="word-break: break-word;">
	학교대표 전화번호 : 033-649-7114
</div>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
			<th style="width:200px">부서명</th>
			<th style="width:250px">전화번호</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>교육혁신팀</td>
				<td>033-649-7223</td>
			</tr>
			<tr>
				<td>교수학습개발센터</td>
				<td>033-649-7088</td>
			</tr>
            <tr>
				<td>CKU 사회봉사·인성센터</td>
				<td>033-649-7878</td>
			</tr>
            <tr>
				<td>학사운영팀</td>
				<td>033-649-7962</td>
			</tr>
            <tr>
				<td>산학지원팀</td>
				<td>033-649-7189</td>
			</tr>
            <tr>
				<td>산학협력팀</td>
				<td>032-226-2608</td>
			</tr>
			<tr>
				<td>산학협력단</td>
				<td>033-649-7180</td>
			</tr>
            <tr>
				<td>입학관리팀</td>
				<td>033-649-7035</td>
			</tr>
            <tr>
				<td>입학사정센터</td>
				<td>033-649-7043</td>
			</tr>
            <tr>
				<td>학생장학복지팀</td>
				<td>033-649-7096</td>
			</tr>
            <tr>
				<td>취업지원팀</td>
				<td>033-649-7104</td>
			</tr>
			<tr>
				<td>진로개발지원센터</td>
				<td>033-649-7103</td>
			</tr>
            <tr>
				<td>학생상담센터</td>
				<td>033-649-7931</td>
			</tr>
            <tr>
				<td>현장실습지원센터</td>
				<td>033-649-7653</td>
			</tr>
            <tr>
				<td>장애학생지원센터</td>
				<td>033-649-7571</td>
			</tr>
            <tr>
				<td>국가시험지원센터</td>
				<td>033-649-7329</td>
			</tr>
			<tr>
				<td>대외협력팀</td>
				<td>033-649-7016</td>
			</tr>
            <tr>
				<td>국제교류교육팀</td>
				<td>033-649-7086</td>
			</tr>
            <tr>
				<td>대학원교학팀</td>
				<td>033-649-7172</td>
			</tr>
		</tbody>
	</table>
</div>
<p></p>
<div class="btn_group">
  <a class="btn_link" onclick='phonepop()'>전체 연락처 보기</a>
</div>`;

newMainphone = function sendMainphone() {
    return mainp;
}