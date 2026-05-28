import s from "./page.module.css";

export default function GenreBg() {
  return (
    <div className={s.pageBg}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/genre-bg.jpg" alt="" className={s.pageBgImg} />
    </div>
  );
}
