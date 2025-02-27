const parentWords: string[] = [
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

const adultWords: string[] = [
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

const childWords: string[] = [
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

function analyzeText(): void {
  const inputElement = document.getElementById(
    "inputText"
  ) as HTMLTextAreaElement;
  const resultElement = document.getElementById("result") as HTMLDivElement;
  const text = inputElement.value.trim();

  if (!text) {
    resultElement.innerHTML = "กรุณากรอกข้อความ";
    return;
  }

  let scoreP = 0,
    scoreA = 0,
    scoreC = 0;
  for (const word of parentWords) {
    console.log(text);

    if (text.indexOf(word) !== -1) {
      scoreP++;
    }
  }
  for (const word of adultWords) {
    if (text.indexOf(word) !== -1) {
      scoreA++;
    }
  }
  for (const word of childWords) {
    if (text.indexOf(word) !== -1) {
      scoreC++;
    }
  }
  if (scoreP > scoreA && scoreP > scoreC) {
    resultElement.innerHTML = `👨‍👩‍👦 ลักษณะคำพูดแบบ <span class="parent">P (ผู้ปกครองหรือพ่อแม่)</span>`;
  } else if (scoreA > scoreP && scoreA > scoreC) {
    resultElement.innerHTML = `🧑‍💼 ลักษณะคำพูดแบบ <span class="adult">A (ผู้ใหญ่)</span>`;
  } else if (scoreC > scoreP && scoreC > scoreA) {
    resultElement.innerHTML = `👶 ลักษณะคำพูดแบบ <span class="child">C (เด็ก)</span>`;
  } else {
    resultElement.innerHTML = `🤔 คำพูดนี้ไม่ชัดเจน หรือเป็นกลาง`;
  }
}
