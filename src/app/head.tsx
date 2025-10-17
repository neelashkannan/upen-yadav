export default function Head() {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/";
  return (
    <>
      <base href={base} />
    </>
  );
}

