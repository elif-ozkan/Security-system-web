import React, { useState } from "react";

export default function Question() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>
        {`
          .container-question {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            background: #ffffff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          }

          h1 {
            text-align: center;
            color: #222;
            font-size: 2em;
            margin-bottom: 20px;
          }

          .faq-item {
            border-bottom: 1px solid #ddd;
            padding: 15px 0;
          }

          .faq-question {
            font-size: 1.2em;
            font-weight: bold;
            cursor: pointer;
            color: #007bff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: color 0.3s ease;
          }

          .faq-question:hover {
            color: #0056b3;
          }

          .faq-answer {
            font-size: 1em;
            color: #555;
            margin-top: 10px;
            display: none;
          }

          .faq-answer.open {
            display: block;
          }

          @media (max-width: 768px) {
            .container-question {
              padding: 15px;
            }

            h1 {
              font-size: 1.8em;
            }

            .faq-question {
              font-size: 1.1em;
            }

            .faq-answer {
              font-size: 0.95em;
            }
          }
        `}
      </style>

      <div className="container-question">
        <h1>Sıkça Sorulan Sorular</h1>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(1)}>
            Zero Trust (Sıfır Güven) modeli nedir ve neden önemlidir?{" "}
            <span>{openIndex === 1 ? "▲" : "▼"}</span>
          </div>
          <div className={`faq-answer ${openIndex === 1 ? "open" : ""}`}>
            Zero Trust, kullanıcıların veya cihazların kimliğine güvenmek
            yerine, her erişim isteğinin sürekli doğrulanmasını gerektiren bir
            güvenlik modelidir. Ağ içindeki tehditleri engellemek için
            önemlidir.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(2)}>
            Bir siber saldırıyı tespit etmek için hangi göstergeler takip
            edilmelidir? <span>{openIndex === 2 ? "▲" : "▼"}</span>
          </div>
          <div className={`faq-answer ${openIndex === 2 ? "open" : ""}`}>
            Anormal ağ trafiği, yetkisiz erişim girişimleri, beklenmedik sistem
            davranışları, güvenlik kayıtlarında olağandışı hareketler gibi
            göstergeler, potansiyel bir siber saldırının işaretleri olabilir.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(3)}>
            Kimlik avı saldırılarından nasıl korunurum?{" "}
            <span>{openIndex === 3 ? "▲" : "▼"}</span>
          </div>
          <div className={`faq-answer ${openIndex === 3 ? "open" : ""}`}>
            Çalışanlara güvenlik farkındalık eğitimi verilmeli, çok faktörlü
            kimlik doğrulama (MFA) kullanılmalı, e-posta filtreleme sistemleri
            devreye alınmalı ve şüpheli bağlantılara tıklamaktan kaçınılmalıdır
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(4)}>
            Bir veri ihlali durumunda ilk yapılması gerekenler nelerdir?{" "}
            <span>{openIndex === 4 ? "▲" : "▼"}</span>
          </div>
          <div className={`faq-answer ${openIndex === 4 ? "open" : ""}`}>
            Etkilenen sistemleri izole edin, olay müdahale ekibini
            bilgilendirin, sistem loglarını analiz edin, ilgili otoriteleri
            bilgilendirin ve gerekli güvenlik önlemlerini güncelleyin.
          </div>
        </div>
      </div>
    </>
  );
}
