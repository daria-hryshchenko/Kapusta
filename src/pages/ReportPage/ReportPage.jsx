import React from 'react';
import { ReportsStat } from 'components/Reports/ReportsStat/ReportsStat';
import { ReportsNav } from 'components/Reports/ReportsNav/ReportsNav';
import { WraperBg } from './ReportPage.styled';
import BgCabbage from 'components/Backgrounds/BgCabbage/BgCabbage';
import { Background } from '../HomePage/HomePage.styled';
export function ReportPage() {
  return (
    <>
      <Background>
        <WraperBg>
          <ReportsNav />
          <ReportsStat />
        </WraperBg>
        <BgCabbage />
      </Background>
    </>
  );
}

export default ReportPage;
