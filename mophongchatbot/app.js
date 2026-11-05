const faq = [
  {
    keys: ["nganh", "dao tao", "chuyen nganh", "cntt", "marketing", "kinh doanh"],
    answer: "Theo bộ dữ liệu giả lập của Lab 9, Đại học ABC có các ngành mẫu: Công nghệ thông tin, Khoa học dữ liệu, Quản trị kinh doanh, Marketing và Ngôn ngữ Anh. Đây không phải danh mục ngành chính thức."
  },
  {
    keys: ["hoc phi", "tien hoc", "chi phi", "hoc bao nhieu"],
    answer: "Mức học phí trong dữ liệu mô phỏng là khoảng 32–42 triệu đồng/năm tùy ngành và số tín chỉ. Đây chỉ là số liệu minh họa; mức chính thức cần kiểm tra trên thông báo của trường."
  },
  {
    keys: ["hoc bong", "ho tro", "mien giam"],
    answer: "Bộ dữ liệu mô phỏng có học bổng đầu vào và hỗ trợ học tập theo thành tích. Tỷ lệ và điều kiện trong demo chỉ để minh họa quy trình, không phải cam kết hay chính sách chính thức."
  },
  {
    keys: ["xet tuyen", "phuong thuc", "thi tot nghiep", "hoc ba"],
    answer: "Các phương thức mẫu gồm xét điểm thi tốt nghiệp THPT, xét học bạ và tuyển thẳng theo quy định áp dụng. Hãy xem đề án tuyển sinh chính thức để biết điều kiện và thời hạn."
  },
  {
    keys: ["ho so", "lich", "thoi gian", "dang ky", "nop"],
    answer: "Tài liệu mẫu khuyến nghị chuẩn bị học bạ, giấy tờ tùy thân và minh chứng ưu tiên nếu có. Lịch và danh mục hồ sơ thật thay đổi theo từng năm; vui lòng kiểm tra thông báo tuyển sinh mới nhất."
  }
];

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
}

function appendMessage(text, role) {
  const messages = document.querySelector("#messages");
  const row = document.createElement("div");
  row.className = `message-row ${role === "user" ? "user-row" : ""}`;
  if (role === "bot") {
    const avatar = document.createElement("div");
    avatar.className = "bot-avatar bot-avatar-small";
    avatar.textContent = "A";
    row.append(avatar);
  }
  const bubble = document.createElement("div");
  bubble.className = `message ${role === "user" ? "user-message" : "bot-message"}`;
  bubble.textContent = text;
  row.append(bubble);
  messages.append(row);
  messages.scrollTop = messages.scrollHeight;
}

function answerQuestion(question) {
  const normalized = normalize(question);
  const match = faq.find(item => item.keys.some(key => normalized.includes(normalize(key))));
  return match?.answer ?? "Mình chưa tìm thấy câu trả lời trong bộ dữ liệu mẫu. Bạn hãy liên hệ Trung tâm Tuyển sinh để được hỗ trợ; chatbot demo không thu thập thông tin cá nhân.";
}

function ask(question) {
  const value = question.trim();
  if (!value) return;
  appendMessage(value, "user");
  window.setTimeout(() => appendMessage(answerQuestion(value), "bot"), 320);
}

document.querySelector("#chat-form").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.querySelector("#question");
  ask(input.value);
  input.value = "";
  input.focus();
});

document.querySelector("#suggestions").addEventListener("click", event => {
  const button = event.target.closest("button[data-question]");
  if (button) ask(button.dataset.question);
});

