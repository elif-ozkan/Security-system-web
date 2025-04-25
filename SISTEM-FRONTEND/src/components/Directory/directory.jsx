import React from "react";
import Navbar from "../Login/Navbar";

export default function Directory() {
  return (
    <>
      <Navbar />
      <style>
        {`
          /* Genel Stil Ayarları */
          section {
            font-family: Arial, sans-serif;
            margin: 20px;
          }

          h1, h2 {
            color: #333;
            line-height: 1.5;
          }

          h1 {
            font-size: 2em;
            margin-top: 15px;
          }

          h2 {
            font-size: 1.5em;
            margin-top: 20px;
          }

          /* Paragraflar */
          p {
            font-size: 1em;
            color: #555;
            line-height: 1.6;
            margin-bottom: 15px;
          }

          /* İçeriği daha temiz ve okunabilir hale getirmek için */
          p + p {
            margin-top: 10px;
          }

          /* Mobile / Tablet İçin Responsive Ayarları */
          @media (max-width: 768px) {
            section {
              margin: 10px;
            }

            h1 {
              font-size: 1.8em;
              margin-top: 15px;
            }

            h2 {
              font-size: 1.3em;
            }

            p {
              font-size: 0.95em;
            }
          }

          /* Small Screen (Telefonlar) İçin Daha Küçük Ayarlar */
          @media (max-width: 480px) {
            h1 {
              font-size: 1.5em;
              margin-top: 10px;
            }

            h2 {
              font-size: 1.1em;
            }

            p {
              font-size: 0.9em;
            }

            section {
              margin: 5px;
            }
          }
        `}
      </style>
      <section>
        <h1>Siber Güvenlik Rehberi: Ne Kadar Güvendesiniz?</h1>
        <h2>1. Parola Güvenliği</h2>
        <p>
          Parolalar, dijital güvenliğin en temel unsurlarından biridir. Güçlü ve
          benzersiz parolalar kullanarak hesaplarınızı koruyabilirsiniz.En az 12
          karakter uzunluğunda bir parola kullanın.Büyük ve küçük harf, rakam ve
          semboller içeren karmaşık parolalar oluşturun.Her hesap için farklı
          parolalar kullanmaya özen gösterin. Parola yöneticisi uygulamaları
          kullanarak parolalarınızı güvenli bir şekilde saklayın.
        </p>

        <h2>2. İki Faktörlü Kimlik Doğrulama (2FA)</h2>
        <p>
          İki faktörlü kimlik doğrulama (2FA), hesaplarınızı ek bir güvenlik
          katmanı ile korumanıza yardımcı olur. Parolanızı doğru girseniz bile,
          telefonunuza gönderilen bir doğrulama kodu olmadan hesabınıza giriş
          yapılamaz.Hangi hesaplarınızda 2FA kullanabileceğinizi kontrol edin
          SMS, e-posta veya uygulama tabanlı doğrulama yöntemlerinden birini
          seçin.
        </p>
        <h2>3. Güncellemeleri Yapın</h2>
        <p>
          Yazılım güncellemeleri, siber güvenlik açıklarını kapatmak için kritik
          öneme sahiptir. Eski yazılımlar genellikle güvenlik açıkları içerir.
          İşletim sisteminizi ve uygulamalarınızı düzenli olarak
          güncelleyin.Otomatik güncellemeleri etkinleştirin, böylece her zaman
          en son güvenlik yamalarına sahip olursunuz.
        </p>
        <h2>4. Güvenli Bağlantılar Kullanın</h2>
        <p>
          İnternette gezinirken güvenli bağlantılar kullanmak çok önemlidir.
          Özellikle banka işlemleri veya kişisel bilgiler içeren sitelere
          girerken HTTPS protokolü kullanmaya dikkat edin.Yalnızca HTTPS ile
          başlayan güvenli bağlantıları tercih edin. Bağlantının güvenli
          olduğunu doğrulamak için tarayıcınızda kilit simgesine tıklayın.
        </p>
      </section>
    </>
  );
}
