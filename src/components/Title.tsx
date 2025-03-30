export default function Title({
  title = "Deno is awesome!",
}) {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl hover:border-b-4 hover:border-[var(--deno-green)] transition-all">
        {title}
      </h1>
    </>
  );
}
