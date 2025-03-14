
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import usePageTitle from '@/hooks/usePageTitle';

const MyAgents = () => {
  usePageTitle('My Agents');
  const [userAgentData, setUserAgentData] = useState<Record<string, string>>({});
  const [browserName, setBrowserName] = useState('');
  const [operatingSystem, setOperatingSystem] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Extract user agent information
    const parseUserAgent = () => {
      setIsLoading(true);
      const ua = navigator.userAgent;
      const uaString = ua.toString();

      // Create the basic information object
      const data: Record<string, string> = {
        'User Agent': uaString,
        'App Code Name': navigator.appCodeName,
        'App Name': navigator.appName,
        'App Version': navigator.appVersion,
        'Platform': navigator.platform,
        'Vendor': navigator.vendor,
        'Language': navigator.language,
        'Cookies Enabled': navigator.cookieEnabled.toString(),
        'Online': navigator.onLine.toString(),
        'Do Not Track': navigator.doNotTrack || 'Not specified',
      };

      // Detect browser
      let browser = 'Unknown';
      if (ua.includes('Firefox')) {
        browser = 'Mozilla Firefox';
      } else if (ua.includes('SamsungBrowser')) {
        browser = 'Samsung Browser';
      } else if (ua.includes('Opera') || ua.includes('OPR')) {
        browser = 'Opera';
      } else if (ua.includes('Edg')) {
        browser = 'Microsoft Edge';
      } else if (ua.includes('Chrome')) {
        browser = 'Google Chrome';
      } else if (ua.includes('Safari') && !ua.includes('Chrome')) {
        browser = 'Safari';
      } else if (ua.includes('Trident') || ua.includes('MSIE')) {
        browser = 'Internet Explorer';
      }
      setBrowserName(browser);

      // Detect OS
      let os = 'Unknown';
      if (ua.includes('Win')) {
        os = 'Windows';
      } else if (ua.includes('Mac')) {
        os = 'macOS';
      } else if (ua.includes('Android')) {
        os = 'Android';
      } else if (ua.includes('iPhone') || ua.includes('iPad') || ua.includes('iPod')) {
        os = 'iOS';
      } else if (ua.includes('Linux')) {
        os = 'Linux';
      }
      setOperatingSystem(os);

      // Detect device type
      let device = 'Unknown';
      if (ua.includes('Mobile')) {
        device = 'Mobile';
      } else if (ua.includes('Tablet')) {
        device = 'Tablet';
      } else {
        device = 'Desktop';
      }
      setDeviceType(device);

      setUserAgentData(data);
      setIsLoading(false);
    };

    parseUserAgent();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-10 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">My User Agent</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                This page displays information about your current browser and device detected from your user agent string.
              </p>
            </div>

            {isLoading ? (
              <div className="text-center py-10">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
                <p className="mt-4 text-gray-600">Analyzing your user agent...</p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className={cn("rounded-xl shadow-sm", "transition-all duration-300")}>
                    <CardHeader className="pb-2">
                      <CardDescription>Browser</CardDescription>
                      <CardTitle className="text-xl">{browserName}</CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className={cn("rounded-xl shadow-sm", "transition-all duration-300")}>
                    <CardHeader className="pb-2">
                      <CardDescription>Operating System</CardDescription>
                      <CardTitle className="text-xl">{operatingSystem}</CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card className={cn("rounded-xl shadow-sm", "transition-all duration-300")}>
                    <CardHeader className="pb-2">
                      <CardDescription>Device Type</CardDescription>
                      <CardTitle className="text-xl">{deviceType}</CardTitle>
                    </CardHeader>
                  </Card>
                </div>

                <Card className="rounded-xl shadow-sm overflow-hidden">
                  <CardHeader>
                    <CardTitle>Detailed User Agent Information</CardTitle>
                    <CardDescription>Technical details about your browser and system</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Property</TableHead>
                          <TableHead>Value</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Object.entries(userAgentData).map(([key, value]) => (
                          <TableRow key={key}>
                            <TableCell className="font-medium">{key}</TableCell>
                            <TableCell className="break-all">{value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card className="rounded-xl shadow-sm bg-blue-50">
                  <CardHeader>
                    <CardTitle>Why does this matter?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Websites and web applications use your user agent information to deliver optimized
                      content for your specific browser and device. This helps ensure the best possible
                      user experience. However, this information can also be used for fingerprinting and
                      tracking across websites. For privacy-focused browsing, consider using browsers with
                      strong privacy features or extensions that allow you to modify your user agent.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MyAgents;
