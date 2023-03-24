import Link from 'next/link';
import Image from 'next/image';
import { getTweetCount, getStarCount } from 'lib/metrics';
import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
  let starCount, views;

  try {
    [starCount, views] = await Promise.all([
      getStarCount(),
      getTweetCount(),
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
        <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
          <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
            <Image
              alt={name}
              className="rounded-full grayscale"
              src={avatar}
              placeholder="blur"
              width={100}
              priority
            />
            <p className="my-5 mx-8 max-w-[460px] text-neutral-800 dark:text-neutral-200">
              {about()}
            </p>
          </div>
          <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
            {bio()}
          </p>
          <h2 className="font-bold text-3x2 font-serif">Recent Projects</h2>
          <div className="flex flex-col gap-2 md:flex-row md:gap-2">
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/chndr1/CellularAutomata" className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"><div className="flex items-center"><div className="ml-3">Cellular Automata</div></div><svg className="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg></a>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/chndr1/ASCII-SDF" className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"><div className="flex items-center"><div className="ml-3">ASCII-SDF</div></div><svg className="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg></a>
          </div>
          <div className="flex flex-col my-2 gap-2 md:flex-row md:gap-2">
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/chndr1/LALU" className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"><div className="flex items-center"><div className="ml-3">ALU</div></div><svg className="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg></a>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/chndr1/mandelbulb" className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"><div className="flex items-center"><div className="ml-3">Mandelbulb</div></div><svg className="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg></a>
          </div>
        </div>
      </div>
    </section>
  );
}
