var parentWords = [
    "ต้อง",
    "ห้าม",
    "ควร",
    "อย่าทำ",
    "เป็นระเบียบ",
    "ปฏิบัติตาม",
    "ไม่อนุญาต",
    "ต้องห้าม",
    "จำเป็น",
    "กฎ",
    "ข้อบังคับ",
    "ควบคุม",
    "ระเบียบ",
    "กำหนด",
    "อย่าลืม",
    "ห้ามลืม",
    "ต้องทำ",
    "ฟังคำสั่ง",
    "อย่าขัดขืน",
    "ให้เชื่อฟัง",
    "ระมัดระวัง",
    "อย่าประมาท",
    "ต้องเชื่อฟัง",
    "ผิดกฎ",
    "เป็นเรื่องสำคัญ",
    "อย่าเถียง",
    "ไม่ยอมรับ",
    "ห้ามทำผิด",
    "ต้องรับผิดชอบ",
    "ต้องเคารพ",
    "จงฟัง",
    "ทำตามคำสั่ง",
    "เป็นหน้าที่",
    "ห้ามละเลย",
    "ให้แน่ใจ",
    "ต้องจัดการให้ดี",
];
var adultWords = [
    "วิเคราะห์",
    "เหตุผล",
    "ข้อมูล",
    "ตรวจสอบ",
    "เป็นไปได้",
    "ข้อเท็จจริง",
    "สมเหตุสมผล",
    "ตรรกะ",
    "หลักฐาน",
    "คำนวณ",
    "เปอร์เซ็นต์",
    "โอกาส",
    "เปรียบเทียบ",
    "ข้อดี",
    "ข้อเสีย",
    "เป็นกลาง",
    "ตามหลักวิทยาศาสตร์",
    "การทดสอบ",
    "การทดลอง",
    "ข้อสรุป",
    "เหตุและผล",
    "ใช้เหตุผล",
    "การคาดการณ์",
    "สถิติ",
    "หลักฐานสนับสนุน",
    "ไม่มีอคติ",
    "โครงสร้าง",
    "วิเคราะห์ข้อมูล",
    "พิจารณา",
    "อ้างอิง",
    "ความแม่นยำ",
    "กระบวนการ",
    "ทฤษฎี",
    "คำนวณทางคณิตศาสตร์",
    "ประเมินค่า",
    "สามารถพิสูจน์ได้",
];
var childWords = [
    "สนุก",
    "อยากได้",
    "รัก",
    "เกลียด",
    "ดีใจ",
    "เสียใจ",
    "เบื่อ",
    "ไม่อยาก",
    "ตื่นเต้น",
    "ตลก",
    "น่าเบื่อ",
    "โกรธ",
    "เศร้า",
    "กลัว",
    "ฝัน",
    "อารมณ์ดี",
    "แฮปปี้",
    "ร้องไห้",
    "หัวเราะ",
    "เฮฮา",
    "น้อยใจ",
    "ดีสุดๆ",
    "เยี่ยมไปเลย",
    "เจ๋งมาก",
    "ฟิน",
    "อยากลอง",
    "อยากทำ",
    "อยากเป็น",
    "เหนื่อย",
    "คิดถึง",
    "หวังว่า",
    "ไม่มีเหตุผล",
    "ทำเพราะอยาก",
    "ตามใจ",
    "อยากสนุก",
    "สนุกสุดๆ",
    "บ้าไปแล้ว",
];
function analyzeText() {
    var inputElement = document.getElementById("inputText");
    var resultElement = document.getElementById("result");
    var text = inputElement.value.trim();
    if (!text) {
        resultElement.innerHTML = "กรุณากรอกข้อความ";
        return;
    }
    var scoreP = 0, scoreA = 0, scoreC = 0;
    for (var _i = 0, parentWords_1 = parentWords; _i < parentWords_1.length; _i++) {
        var word = parentWords_1[_i];
        console.log(text);
        if (text.indexOf(word) !== -1) {
            scoreP++;
        }
    }
    for (var _a = 0, adultWords_1 = adultWords; _a < adultWords_1.length; _a++) {
        var word = adultWords_1[_a];
        if (text.indexOf(word) !== -1) {
            scoreA++;
        }
    }
    for (var _b = 0, childWords_1 = childWords; _b < childWords_1.length; _b++) {
        var word = childWords_1[_b];
        if (text.indexOf(word) !== -1) {
            scoreC++;
        }
    }
    var resultHTML = "";
    if (scoreP > scoreA && scoreP > scoreC) {
        resultHTML = "\n      <div class='result-box parent'>\n        \uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66 <strong>\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E04\u0E33\u0E1E\u0E39\u0E14\u0E41\u0E1A\u0E1A P (\u0E1C\u0E39\u0E49\u0E1B\u0E01\u0E04\u0E23\u0E2D\u0E07\u0E2B\u0E23\u0E37\u0E2D\u0E1E\u0E48\u0E2D\u0E41\u0E21\u0E48)</strong>\n      </div>\n    ";
    }
    else if (scoreA > scoreP && scoreA > scoreC) {
        resultHTML = "\n      <div class='result-box adult'>\n        \uD83E\uDDD1\u200D\uD83D\uDCBC <strong>\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E04\u0E33\u0E1E\u0E39\u0E14\u0E41\u0E1A\u0E1A A (\u0E1C\u0E39\u0E49\u0E43\u0E2B\u0E0D\u0E48)</strong>\n      </div>\n    ";
    }
    else if (scoreC > scoreP && scoreC > scoreA) {
        resultHTML = "\n      <div class='result-box child'>\n        \uD83D\uDC76 <strong>\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E04\u0E33\u0E1E\u0E39\u0E14\u0E41\u0E1A\u0E1A C (\u0E40\u0E14\u0E47\u0E01)</strong>\n      </div>\n    ";
    }
    else {
        resultHTML = "\n      <div class='result-box neutral'>\n        \uD83E\uDD14 <strong>\u0E04\u0E33\u0E1E\u0E39\u0E14\u0E19\u0E35\u0E49\u0E44\u0E21\u0E48\u0E0A\u0E31\u0E14\u0E40\u0E08\u0E19 \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E25\u0E32\u0E07</strong>\n      </div>\n    ";
    }
    resultElement.innerHTML = resultHTML;
}
// เพิ่ม CSS ให้ UI อลังการ
var style = document.createElement('style');
style.innerHTML = "\n  .result-box {\n    font-size: 1.5em;\n    padding: 20px;\n    border-radius: 10px;\n    margin-top: 20px;\n    color: white;\n    text-align: center;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);\n  }\n  .parent { background: linear-gradient(135deg, #1e3c72, #2a5298); }\n  .adult { background: linear-gradient(135deg, #2e8b57, #3cb371); }\n  .child { background: linear-gradient(135deg, #ff9800, #ff5722); }\n  .neutral { background: linear-gradient(135deg, #6c757d, #adb5bd); }\n";
document.head.appendChild(style);
