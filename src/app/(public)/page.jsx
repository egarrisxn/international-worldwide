import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Button from "@/components/ui/button";
import GithubIcon from "@/components/icons/github";

export default function LandingPage() {
  const t = useTranslations("landing");

  return (
    <>
      <div className="mx-auto flex w-full max-w-2xl grow flex-col px-4 py-10 sm:px-0 xl:pt-20">
        <section className="flex flex-col items-start gap-2">
          <h1 className="text-5xl font-black tracking-tight 2xl:text-6xl">
            {t("heading")}
          </h1>
          <p className="max-w-[460px] pt-2 text-xl 2xl:max-w-[580px] 2xl:text-2xl">
            {t("subheading")}
          </p>
        </section>

        <section className="mt-14">
          <h2 className="pb-4 text-2xl font-semibold tracking-tight underline underline-offset-2 2xl:text-3xl">
            {t("features")}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h3 className="pb-1 leading-5 font-bold 2xl:text-lg">
                {t("feature1.label")}
              </h3>
              <p className="text-sm 2xl:text-base">{t("feature1.snippet")}</p>
            </div>
            <div>
              <h3 className="pb-1 leading-5 font-bold 2xl:text-lg">
                {t("feature2.label")}
              </h3>
              <p className="text-sm 2xl:text-base">{t("feature2.snippet")}</p>
            </div>
            <div>
              <h3 className="pb-1 leading-5 font-bold 2xl:text-lg">
                {t("feature3.label")}
              </h3>
              <p className="text-sm 2xl:text-base">{t("feature3.snippet")}</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <Link href="/auth">
            <Button variant="primary" size="primary">
              {t("cta")}
            </Button>
          </Link>
        </section>
      </div>

      <footer className="w-full">
        <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-row items-center justify-between px-4 py-5">
          <div className="flex items-center">
            <GithubIcon />
          </div>
          <div>
            <Link
              className="group hover:text-button flex flex-row items-center gap-1 font-semibold transition-all"
              href="/auth"
            >
              <span>{t("login")}</span>
              <ArrowLongRightIcon className="size-5 -translate-x-0.5 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:scale-x-105" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

// import Link from "next/link";
// import Image from "next/image";
// import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
// import Button from "@/components/ui/button";
// import ThemeSwitcher from "@/components/theme-switcher";
// import LocaleSwitcher from "@/components/locale-switcher";
// import GithubIcon from "@/components/icons/github";
// // import { useTranslations } from "next-intl";

// export default function LandingPage() {
//   // const t = useTranslations("landing");

//   return (
//     <main className="flex grow flex-col">
//       <header className="w-full border-b-2 shadow-lg">
//         <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-row items-center justify-between px-4 py-5">
//           <nav className="flex flex-row items-center">
//             <div className="text-3xl font-light tracking-tighter">Intl</div>
//             <Image
//               src="/intl-wrld.png"
//               alt="International Worldwide Icon"
//               width={36}
//               height={36}
//               className="ml-0.5 size-9"
//               priority
//             />
//             <div className="flex flex-col gap-0 text-base leading-3 font-black">
//               <span className="tracking-tight">World</span>
//               <span className="pl-[3px]">Wide</span>
//             </div>
//           </nav>
//           <div className="flex flex-row items-center gap-3">
//             <ThemeSwitcher />
//             <LocaleSwitcher />
//           </div>
//         </div>
//       </header>
//       <div className="mx-auto flex w-full max-w-2xl grow flex-col px-4 py-10 sm:px-0 xl:pt-20">
//         <section className="flex flex-col items-start gap-2">
//           <h1 className="text-5xl font-black tracking-tight 2xl:text-6xl">
//             Test Your Web Development Skills Globally!
//           </h1>
//           <p className="max-w-[460px] pt-2 text-xl 2xl:max-w-[580px] 2xl:text-2xl">
//             A simple platform offering web development quizzes in multiple
//             languages. Challenge yourself and expand your knowledge in your
//             preferred language.
//           </p>
//         </section>

//         <section className="mt-14">
//           <h2 className="pb-4 text-2xl font-semibold tracking-tight underline underline-offset-2 2xl:text-3xl">
//             Key Features
//           </h2>
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
//             <div>
//               <h3 className="pb-1 leading-5 font-bold 2xl:text-lg">
//                 Multiple Languages Supported
//               </h3>
//               <p className="text-sm 2xl:text-base">
//                 Take quizzes in: ar, de, en, es, fa, fr, ja, ru and more to
//                 come!
//               </p>
//             </div>
//             <div>
//               <h3 className="pb-1 leading-5 font-bold 2xl:text-lg">
//                 Wide Range of Topics
//               </h3>
//               <p className="text-sm 2xl:text-base">
//                 Explore quizzes covering: CSS, HTML, JavaScript, Next.js,
//                 Node.js, React, SQL, Tailwind CSS, TypeScript, Vercel.
//               </p>
//             </div>
//             <div>
//               <h3 className="pb-1 leading-5 font-bold 2xl:text-lg">
//                 Simple and Intuitive
//               </h3>
//               <p className="text-sm 2xl:text-base">
//                 Enjoy a clean and straightforward interface for a seamless
//                 learning experience.
//               </p>
//             </div>
//           </div>
//         </section>

//         <section className="mt-8">
//           <Link href="/auth">
//             <Button variant="primary" size="primary">
//               Start Quizzing!
//             </Button>
//           </Link>
//         </section>
//       </div>
//       <footer className="w-full">
//         <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-row items-center justify-between px-4 py-5">
//           <div className="flex items-center">
//             <GithubIcon />
//           </div>
//           <div>
//             <Link
//               className="group hover:text-button flex flex-row items-center gap-1 font-semibold transition-all"
//               href="/auth"
//             >
//               <p>login</p>
//               <ArrowLongRightIcon className="size-5 -translate-x-0.5 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:scale-x-105" />
//             </Link>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }

// // import { redirect } from "next/navigation";

// // export default function IndexPage() {
// //   redirect("/auth");
// // }
