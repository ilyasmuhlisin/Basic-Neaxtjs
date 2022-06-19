import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

function IndexPage() {
  const contentStyle = {
    minHeight: "90vh",
    top: "56px",
    backgroundColor: "#f1f1f9",
    overflowX: "hidden",
  };

  return (
    <div style={{ backgroundColor: "#f1f1f9" }}>
      <Header />
      <div className="container content position-relative" style={contentStyle}>
        <div className="row">
          <div className="col-12 d-flex justify-content-center text-center">
            <p className="mt-5 h2">KAWAL COVID19</p>
          </div>
          <div className="col-12 d-flex justify-content-center text-center">
            <p className="mt-3 f18">
              Webiste Pemantauan Terkini Kasus Virus Covid19
            </p>
          </div>
        </div>
      </div>
      <Footer
        rightContent={""}
        leftContent={<div className="ml-2 font-weight-bold">Ilyas @2022</div>}
      />
    </div>
  );
}

export default IndexPage;
