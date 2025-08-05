import React from 'react';
import { ArtifactsOverviewProps } from './artifacts-overview.props';
import { InertiaLink } from '@inertiajs/inertia-react';

export const ArtifactsOverviewOrganism = (props: ArtifactsOverviewProps) => {
  return (
    <div>
      <h2 className="header">Overview</h2>
      <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {props.artifacts.slice(0, 3).map((card) => (
          <div key={card.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <card.icon className="h-10 w-10 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{card.name}</dt>
                    <dd>
                      <div className="text-xl font-bold text-primary-color-dark">{card.text}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <InertiaLink
                  href={card.href}
                  className="font-medium text-cyan-700 hover:text-cyan-900"
                >
                  View all
                </InertiaLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
