import React from 'react';
import { DashboardTemplate } from '../components/templates/dashboard/dashboard.template';
import { ArtifactsOverviewOrganism } from '../components/organisms/artifacts-overview/artifacts-overview. organism';
import { usePage } from '@inertiajs/inertia-react';
import { dashboardArtifacts } from '../enums/dashboard-artifacts.enum';
import { LengthAwarePaginator } from '../models/length-aware-paginator';
import { Action } from '../models/action';
import { ActivityFeedOrganism } from '../components/organisms/activity-feed/activity-feed.organism';
import { useSharedData } from "../hooks/shared-data.effect";

export default function Dashboard() {
  const { myRecentActivity, recentActivity } = usePage().props;

  const {user, itemsCount, tagsCount, storesCount} = useSharedData();

  return (
    <DashboardTemplate>
      <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArtifactsOverviewOrganism
          artifacts={dashboardArtifacts(storesCount, itemsCount, tagsCount)}
        />
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <ActivityFeedOrganism
              title="My latest activities"
              buttonText="More activities"
              buttonUrl={`/activity?search=${user.name}`}
              actions={myRecentActivity as LengthAwarePaginator<Action[]>}
            />
          </div>
          <div className="col-span-1">
            <ActivityFeedOrganism
              title="All latest activities"
              buttonText="More activities"
              buttonUrl="/activity"
              actions={recentActivity as LengthAwarePaginator<Action[]>}
            />
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
}
