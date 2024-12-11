import loader from "../../assets/loader.png";

export const Spinner = () => {
  return (
    <div
      style={{
        position: "fixed",
        overflow: "auto",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        transition: "all 1s ease",
        padding: "50px",
        zIndex: "2",
        background: "rgba(0, 0, 0, 0.5)",
        textAlign: "center",
      }}
    >
      <img
        src={loader}
        alt="loading"
        style={{ maxWidth: "200px", marginTop: "calc(50% - 300px)" }}
      />
    </div>
  );
};
