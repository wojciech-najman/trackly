import React, { useState } from 'react';
import { DashboardProps } from './dashboard.props';
import { DashboardSidebarOrganism } from '../../organisms/dashboard-sidebar/dashboard-sidebar.organism';
import { DashboardHeaderOrganism } from '../../organisms/dashboard-header/dashboard-header.organism';
import { ToastContainer } from 'react-toastify';
import { SubheaderBoxOrganism } from '../../organisms/subheader-box/subheader-box.organism';

export const DashboardTemplate: React.FC = (props: DashboardProps) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <>
      <div className="min-h-full">
        <DashboardSidebarOrganism
          opened={sidebarOpened}
          setOpened={(opened) => setSidebarOpened(opened)}
        />
        <div className="lg:pl-64 flex flex-col flex-1">
          <div className="relative z-10">
              <DashboardHeaderOrganism openSidebar={() => setSidebarOpened(true)} />
          </div>
          <main className="relative z-0 flex-1 pb-8">
            <div className="relative z-10">{props.header}</div>
            <div className="relative z-0 mt-8">{props.children}</div>
          </main>
        </div>
        <ToastContainer
          style={{ maxWidth: '400px', width: '100%' }}
          toastClassName={() =>
            'm-3 cursor-pointer bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5'
          }
          position="bottom-right"
          autoClose={4000}
          closeButton={<></>}
          hideProgressBar={true}
        />
      </div>
    </>
  );
};

DashboardTemplate.defaultProps = {
  header: <SubheaderBoxOrganism />,
};
