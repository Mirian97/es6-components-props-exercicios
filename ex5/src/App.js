import CardCookies from "./components/CardCookies";
import cookie from "./assets/cookie.svg";
import alert from "./assets/alert.svg";
import "./App.css";

const cookies = [
  {
    id: 0,
    cookieImage: cookie,
    cookieText: "Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.",
    buttonText: "Tudo bem!",
    buttonColor: "red"
  },
  {
    id: 1,
    cookieImage: alert,
    cookieText: "Você será deslogado imediatamente!",
    buttonText: "Extender login",
    buttonColor: "blue"
  }
]

export default function App() {
  return (
    <div className="container">
      {cookies.map((cookie) =>
        <CardCookies
          key={cookie.id}
          cookieImage={cookie.cookieImage}
          cookieText={cookie.cookieText}
          buttonText={cookie.buttonText}
          buttonColor={cookie.buttonColor}
        >
        </CardCookies>
      )}
    </div>
  );
}
