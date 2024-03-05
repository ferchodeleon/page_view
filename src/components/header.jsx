import icon_nxtwave from "../icons/logo_nxtwave.png";

export const Header = () => {
  return (
    <>
      <header>
        <figure>
          <img className="logo-nxtwave" src={icon_nxtwave} alt="icon-nxtwave" />
        </figure>
        <h1 className="title">NxtWave</h1>
      </header>
    </>
  );
};
