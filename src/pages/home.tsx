import { Icon } from '@iconify/react';

interface Feat {
  icon: string;
  title: string;
}

const features: Feat[] = [
  {
    icon: 'logos:react',
    title: 'React v18.x.x'
  },
  {
    icon: 'logos:vitejs',
    title: 'ViteJs'
  },
  {
    icon: 'logos:redux',
    title: 'Redux Toolkit'
  },
  {
    icon: 'logos:eslint',
    title: 'Eslint - set of rules'
  },
  {
    icon: 'logos:typescript-icon',
    title: 'Typescript - 4.9.x'
  },
  {
    icon: 'logos:prettier',
    title: 'Prettier - code formatter'
  },
  {
    icon: 'logos:tailwindcss-icon',
    title: 'TailwindCSS - CSS Framework'
  },
  {
    icon: 'carbon:data-format',
    title: 'Formik - Form validations'
  }
];
const Home = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="flex items-center gap-3 mb-5">
            <h1>What's inside</h1>
            <span>
              <Icon width={30} icon="ph:arrow-right" />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center justify-between text-center gap-5 rounded items-center bg-white dark:bg-dark-100 shadow drop-shadow p-5 md:p-8"
              >
                <span className="text-2xl">
                  <Icon width={50} height={50} icon={feature.icon} />
                </span>
                <span className="text-lg capitalize">{feature.title}</span>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 max-w-[850px] mx-auto">
          <p className="bg-success/10 mt-10 mb-3 p-5 text-lg text-center rounded shadow drop-shadow-sm">
            There are lots of eslint rules has been defined, you can toggle them as per your need. This is not a
            template or package. It's a quick starter project which I, personally use for different projects. For any
            feedback or suggestion or improvements, you can also ping me on{' '}
            <a href="https://github.com/r3dm4st3r" target="_blank" rel="noreferrer" className="text-theme">
              github
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
