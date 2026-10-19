
const { useState } = React;

function App() {
  const [clicks, setClicks] = useState(0);
  const [opened, setOpened] = useState(false);

  function handleSealClick() {
    if (opened) return;

    const next = clicks + 1;
    setClicks(next);

    if (next >= 3) {
      window.setTimeout(() => setOpened(true), 450);
    }
  }

  return (
    <main className={`scene ${opened ? "opened" : ""}`}>
      <p className="eyebrow">С особенным теплом</p>

      <h1 className="heading">
        С днём рождения!
      </h1>

      <p className="hint">
        {opened
          ? " "
          : "У Вас есть письмо. Коснитесь печати три раза, чтобы открыть его."}
      </p>

      <div className="envelope-wrap">
        <div className="envelope">
          <div className="envelope-back"></div>

          <article className="letter">
            <div className="letter-content">
              <h2 className="letter-title">
                Дорогая именинница!
              </h2>

              <p>
                Хочу поздравить Вас с днём рождения. В Вашей
                жизни было много разных моментов — и радостных,
                и не очень. Наверняка приходилось сталкиваться
                с разными трудностями, но самое главное —
                чтобы, несмотря ни на что, у Вас всегда были
                силы идти дальше и поводы улыбаться.
              </p>

              <p>
                Я хочу пожелать Вам крепкого здоровья, счастья
                и побольше хороших моментов в жизни. Чтобы
                рядом всегда были близкие люди, которые
                поддержат в трудную минуту, помогут справиться
                с любыми проблемами и разделят с Вами самые
                счастливые моменты. Чтобы Вы никогда не
                чувствовали себя одиноко и всегда знали,
                что есть люди, которым Вы дороги.
              </p>
            </div>
          </article>

          <div className="envelope-front"></div>
          <div className="flap"></div>

          {!opened && (
            <button
              className={`seal-button ${clicks >= 2 ? "cracked" : ""}`}
              onClick={handleSealClick}
              aria-label="Нажать на восковую печать"
            >
              <span>♥</span>
            </button>
          )}
        </div>

        {!opened && (
          <p className="seal-count">
            {clicks === 0
              ? "НАЖМИТЕ НА ПЕЧАТЬ"
              : clicks === 1
              ? "ЕЩЁ ДВА КАСАНИЯ"
              : "ЕЩЁ ОДНО КАСАНИЕ"}
          </p>
        )}
      </div>

      <p className="footer">
        С ТЕПЛОМ И НАИЛУЧШИМИ ПОЖЕЛАНИЯМИ
      </p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
