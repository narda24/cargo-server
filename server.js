const express = require('express');
const cors = require('cors');
const { SolapiMessageService } = require('solapi');

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 솔라피 키 입력 (여기 실제 값 넣으세요)
const messageService = new SolapiMessageService(
  "NCSSC1HEEIXVSHJO",
  "R4VQQV5GQGYVGK4KSXTA7UP35SFAERYX"
);

// 🔥 발신번호 (솔라피 등록 번호)
const FROM = "01051206909";

app.post('/api/order/create', async (req, res) => {
  try {
    const data = req.body;

    console.log('접수 데이터:', data);

    // 🔥 문자 내용 구성
    const text = `
[화물 접수]
연락처: ${data.customer_phone}
노선: ${data.route_text}
차량: ${data.service_type} / ${data.ton_type} / ${data.vehicle_type}
옵션: ${data.load_option}
운임: ${data.preview_price_text}
메모: ${data.memo || '없음'}
    `;

    // 🔥 문자 발송
    await messageService.sendOne({
      to: data.customer_phone,   // 고객에게 보내기
      from: FROM,
      text: text
    });

    res.json({
      success: true,
      message: '문자 발송 완료'
    });

  } catch (err) {
    console.error('문자 오류:', err);

    res.status(500).json({
      success: false,
      message: '문자 발송 실패'
    });
  }
});

app.get('/', (req, res) => {
  res.send('서버 정상 실행 중');
});

app.listen(3000, () => {
  console.log('서버 실행됨 http://localhost:3000');
});