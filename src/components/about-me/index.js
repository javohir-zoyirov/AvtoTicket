import { Header } from "../header";

export const About = () => {
  return (
    <div style={{ backgroundColor: "#f5f8fa" }}>
      <Header />
      <div className="container">
        <h1 style={{ color: "#26404d" }} className="text-black fw-bold mt-4">Biz haqimizda</h1>
        <p style={{ color: "#26404d" }} className="text-black fw-bold">
          Avtobus chiptalarini qidirish xizmati
        </p>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card p-2 bg-transparent border-0">
              <span className="p-3 border rounded-pill bg-white w-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="currentColor"
                  class="bi bi-bus-front-fill text-info"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 7a1 1 0 0 1-1 1v3.5c0 .818-.393 1.544-1 2v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a2.5 2.5 0 0 1-1-2V8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1V2.64C1 1.452 1.845.408 3.064.268A44 44 0 0 1 8 0c2.1 0 3.792.136 4.936.268C14.155.408 15 1.452 15 2.64V4a1 1 0 0 1 1 1zM3.552 3.22A43 43 0 0 1 8 3c1.837 0 3.353.107 4.448.22a.5.5 0 0 0 .104-.994A44 44 0 0 0 8 2c-1.876 0-3.426.109-4.552.226a.5.5 0 1 0 .104.994M8 4c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9s3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44 44 0 0 0 8 4m-3 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0m8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-7 0a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1" />
                </svg>
              </span>
              <h5 style={{ color: "#26404d" }} className="fw-bold my-3">
                Bu qanday xizmat?
              </h5>
              <p style={{ color: "#26404d" }} className="">
                Ushbu xizmat yordamida osongina va tezda MDHda avtobus reyslari
                uchun chiptalarni topish va bron qilish yoki darhol sotib olish
                mumkinÏ
              </p>
            </div>
          </div>

          <div className="col-lg-4  col-md-6 col-12">
            <div className="card p-2 bg-transparent border-0">
              <span className="p-3 border rounded-pill bg-white w-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="currentColor"
                  class="bi bi-ticket-detailed text-info"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
                  <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z" />
                </svg>
              </span>
              <h5 style={{ color: "#26404d" }} className="fw-bold my-3">
                Qanday foydalaniladi?
              </h5>
              <p style={{ color: "#26404d" }} className="">
                Bo'limda "Chiptani qanday sotib olish mumkin" Siz chipta sotib
                olish, bron qilish va bekor qilish bo'yicha video darslarni
                ko'rishingiz mumkin
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card p-2 bg-transparent border-0">
              <span className="p-3 border rounded-pill bg-white w-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="currentColor"
                  class="bi bi-bank text-info"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
                </svg>
              </span>
              <h5 style={{ color: "#26404d" }} className="fw-bold my-3">
                Biz kimmiz?
              </h5>
              <p style={{ color: "#26404d" }} className="">
                Biz O'zbekiston Respublikasi Transport vazirliklarining
                vakillarimiz, ushbu portal ishlab chiqilgan Genesis Innovation
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card p-2 bg-transparent border-0">
              <span className="p-3 border rounded-pill bg-white w-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="currentColor"
                  class="bi bi-credit-card text-info"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
              </span>
              <h5 style={{ color: "#26404d" }} className="fw-bold my-3">
                Foydalanish qulayligi
              </h5>
              <p style={{ color: "#26404d" }} className="">
                Bizning xizmatimiz yordamida siz kerakli yo'nalishni va
                chiptalarni oddiy narxda osongina va tezda topishingiz mumkin,
                siz borishingiz va chipta sotib olishingiz shart emas
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card p-2 bg-transparent border-0">
              <span className="p-3 border rounded-pill bg-white w-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="currentColor"
                  class="bi bi-check-circle text-info"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                </svg>
              </span>
              <h5 style={{ color: "#26404d" }} className="fw-bold my-3">
                Xavfsizlik
              </h5>
              <p style={{ color: "#26404d" }} className="">
                Bizning xizmatimiz sizga xavfsiz tranzaksiyani va, avvalo,
                marshrutingiz bo'ylab, qayerga bormang, xavfsiz sayohat qilishni
                kafolatlaydi
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card p-2 bg-transparent border-0">
              <span className="p-3 border rounded-pill bg-white w-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="currentColor"
                  class="bi bi-compass text-info"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                  <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                </svg>
              </span>
              <h5 style={{ color: "#26404d" }} className="fw-bold my-3">
                Istalgan vaqtda yordam berish
              </h5>
              <p style={{ color: "#26404d" }} className="">
                Agar siz chiptalarni sotib olishda yoki to'g'ridan-to'g'ri
                sayohat paytida muammolarga duch kelsangiz, sizga yordam beramiz
                (8:00-20:00)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
