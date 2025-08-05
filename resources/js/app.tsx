import { InertiaApp } from '@inertiajs/inertia-react';
import React from 'react';
import { render } from 'react-dom';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init();

const el = document.getElementById('app') as HTMLElement;

render(
  <InertiaApp
    initialPage={JSON.parse(el.dataset.page as string)}
    resolveComponent={(name: any) => require(`./pages/${name}`).default}
  />,
  el,
);

el.classList.add('h-full');
