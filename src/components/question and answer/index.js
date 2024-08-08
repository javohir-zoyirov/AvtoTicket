import { Collapse, Divider } from "antd";
import { Header } from "../header";

export const Questions = () => {
  return (
    <div style={{ backgroundColor: "#f5f8fa", height:"100vh" }}>
      <Header />
      <div className="container">
        <h1 style={{ color: "#26404d" }} className="text-black fw-bold mt-4">
          Ko'p so'raladigan savollar{" "}
        </h1>
        <p style={{ color: "#26404d" }} className="text-black fw-bold mb-4">
          Siz barcha javoblarni topishingiz mumkin
        </p>

        <div className="row">
          <div className="col-lg-6 mt-4">
            <Collapse
              items={[
                {
                  key: "1",
                  label: (
                    <p className="p-0 m-0">
                      {" "}
                      Avtobus stantsiyasida avtobusimni qanday topsam bo'ladi ?
                    </p>
                  ),
                  children: (
                    <p>
                      Chiptangizda peron raqami ko'rsatiladi. Avtovokzaldagi
                      platformalarning har birida belgi bor, siz undan kerakli
                      narsani osongina aniqlashingiz mumkin.
                    </p>
                  ),
                },
              ]}
            />
          </div>

          <div className="col-lg-6 mt-4">
            <Collapse
              items={[
                {
                  key: "1",
                  label: (
                    <p className="p-0 m-0">
                      {" "}
                      Men chiptamni yo'qotdim, chiptamni qaytarib olsam
                      bo'ladimi ?
                    </p>
                  ),
                  children: (
                    <p>
                      Ha, va juda oson. Siz Avtovokzal kassalariga murojaat
                      qilishingiz, ism-sharifingizni va reysingizni yoki
                      chiptaning raqamini ko'rsatishingiz kerak va u tiklanadi.
                    </p>
                  ),
                },
              ]}
            />
          </div>

          <div className="col-lg-6 mt-4">
            <Collapse
              items={[
                {
                  key: "1",
                  label: (
                    <p className="p-0 m-0">
                      {" "}
                      Bepul chipta olish uchun bolalar necha yoshda bolishi
                      kerak ?
                    </p>
                  ),
                  children: (
                    <p>
                      Yo‘lovchi o‘zi bilan birga besh yoshgacha bo‘lgan bir
                      bolani bepul — alohida o‘rinsiz, besh yoshdan o‘n
                      yoshgacha bo‘lgan bolani chiptaning to‘liq bahosi 50 foiz
                      chegirilgan holda — alohida o‘rin berilgan holda olib
                      yurish huquqiga egadir, o‘n yoshgacha bo‘lgan ikki nafar
                      va undan ko‘proq bolalar olib yurilganda ulardan bittasi
                      bepul, qolganlari — chipta to‘liq bahosining 50 foizi
                      chegirilib, alohida o‘rin berilgan holda olib yuriladi.
                    </p>
                  ),
                },
              ]}
            />
          </div>

          <div className="col-lg-6 mt-4">
            <Collapse
              items={[
                {
                  key: "1",
                  label: (
                    <p className="p-0 m-0">
                      {" "}
                      Mening rejalarim o'zgarib qoldi yoki men reysga kech
                      qoldim menga chipta pulim qaytarib beriladimi?
                    </p>
                  ),
                  children: (
                    <p>
                      O‘ZBEKISTON RESPUBLIKASI VAZIRLAR MAHKAMASINING QARORI
                      O‘ZBEKISTON RESPUBLIKASIDA AVTOMOBIL TRANSPORTIDA
                      YO‘LOVCHILAR VA BAGAJ TASHISH QOIDALARINI HAMDA
                      AVTOBUSLARDA YO‘LOVCHILAR TASHISH XAVFSIZLIGINI
                      TA’MINLASHGA DOIR TALABLARNI TASDIQLASH HAQIDA O‘zbekiston
                      Respublikasi Vazirlar Mahkamasining qarori, 04.11.2003
                      yildagi 482-son 62 - bandida batafsil ma'lumot mavjud
                      https://lex.uz/docs/246740.
                    </p>
                  ),
                },
              ]}
            />
          </div>

          <div className="col-lg-6 mt-4">
            <Collapse
              items={[
                {
                  key: "1",
                  label: (
                    <p className="p-0 m-0">
                      {" "}
                      Avtobusda hayvonlarni tashiy olamanmi?
                    </p>
                  ),
                  children: (
                    <p>
                      Bu mumkin. Asosiy shart - bu hayvonni bagajda tashish. Uy
                      hayvoningiz sayohat davomida boshqa yo'lovchilarga va
                      haydovchiga xalaqit bermasligiga ishonch hosil qiling.
                    </p>
                  ),
                },
              ]}
            />
          </div>

          <div className="col-lg-6 mt-4">
            <Collapse
              items={[
                {
                  key: "1",
                  label: (
                    <p className="p-0 m-0">
                      {" "}
                      Chipta sotib olish uchun qanday hujjatlar kerak?
                    </p>
                  ),
                  children: (
                    <p>
                      Agar siz O'zbekistonning ikkita shahri o'rtasida parvoz
                      qilmoqchi bo'lsangiz - kattalar uchun hujjatlar talab
                      qilinmaydi. Agar siz Respublikadan tashqarida parvoz
                      qilmoqchi bo'lsangiz, siz bilan birga pasportingiz
                      bo'lishi kerak.
                    </p>
                  ),
                },
              ]}
            />
          </div>

          <div className="col-lg-6 mt-4">
            <Collapse
              items={[
                {
                  key: "1",
                  label: (
                    <p className="p-0 m-0">
                      {" "}
                      Mening yuklarim yo'qoldi, yordam so'rash kerak?
                    </p>
                  ),
                  children: (
                    <p>
                      Agar yukingizni topa olmasangiz, aniq ma'lumot uchun
                      Avtovokzal dispetcherlik xizmatiga murojaat qilishingiz
                      yoki qo'ng'iroqlarni qabul qilish markaziga qo'ng'iroq
                      qilishingiz kerak.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
