import RootLayout from "./layout";

export default function about() {
  return (
    <>
      <RootLayout>
        <section className="flex flex-col gap-6 px-section pb-20">
          <h4 className="text-center font-raleway font-semibold text-headline-l text-secondary">
            The people behind the work
          </h4>
          <p className="font-raleway text-center font-title-gray text-title-m ">
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
          </p>
          <img
            src="https://s3-alpha-sig.figma.com/img/4793/ca56/9324685e4c71189c3a04a54f85383905?Expires=1686528000&Signature=Xf~SGEPtJMf5gh4Rc5EByHEI9d15UWcMHXEdvslpC~e3jnv00VyXAEfAQwiUb8eOZs3KxnPe6gVUlPgKemnLYrtkYcD0zofLXPg9rRR6yjkNhzYTtsEVbOnDT2QjCkatoXMxPHWgIZ2Yqi7EdWdQ2SMHbD22cWxYCBNyHnK1CT~E6lUecTmyXjWPE8aM5KDFmUGviVC6lLyUSes66XZzSJyy56PPgXgHzNgDkFp0UeOPZGCscK6PvgqzUiFV-OfY5HWiKlxrx84RyUcUXDPcPjfCf~cI3WKST3qUbWXbORPNo0tSfx4E5rfWGL0NBMhMwlytUBH63f2GpMFrYcZz0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Description of the image"
          />
        </section>
      </RootLayout>
    </>
  );
}
