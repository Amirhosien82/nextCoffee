import Loading from "./_components/Loading/Loading";

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "var(--color-yellow-200)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loading />
    </div>
  );
}

export default Loader;
