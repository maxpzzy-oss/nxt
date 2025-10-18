import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DiscordButton } from './components/DiscordButton';
import { HomePage } from './pages/HomePage';
import { FreeTrialPage } from './pages/FreeTrialPage';
import { InternetPurchasePage } from './pages/InternetPurchasePage';
import { StreamingPurchasePage } from './pages/StreamingPurchasePage';
import { BundlePurchasePage } from './pages/BundlePurchasePage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { HelpPage } from './pages/HelpPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="trial" element={<FreeTrialPage />} />
            <Route path="internet-plans" element={<InternetPurchasePage />} />
            <Route path="streaming" element={<StreamingPurchasePage />} />
            <Route path="bundle" element={<BundlePurchasePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="help" element={<HelpPage />} />
          </Route>
        </Routes>
        <DiscordButton />
      </div>
    </Router>
  );
}

export default App;
