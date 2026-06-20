import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { LandingPage } from '@/pages/LandingPage';
import { CitizenDashboard } from '@/pages/CitizenDashboard';
import { FileComplaintPage } from '@/pages/FileComplaintPage';
import { TrackComplaintPage } from '@/pages/TrackComplaintPage';
import { AIAssistantPage } from '@/pages/AIAssistantPage';
import { SchemesPage } from '@/pages/SchemesPage';
import { AnalyticsDashboard } from '@/pages/AnalyticsDashboard';
import { OfficerDashboard } from '@/pages/OfficerDashboard';
import { TransparencyDashboard } from '@/pages/TransparencyDashboard';
import { ProfilePage } from '@/pages/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="dashboard" element={<CitizenDashboard />} />
          <Route path="file-complaint" element={<FileComplaintPage />} />
          <Route path="track" element={<TrackComplaintPage />} />
          <Route path="assistant" element={<AIAssistantPage />} />
          <Route path="schemes" element={<SchemesPage />} />
          <Route path="analytics" element={<AnalyticsDashboard />} />
          <Route path="officer" element={<OfficerDashboard />} />
          <Route path="transparency" element={<TransparencyDashboard />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
