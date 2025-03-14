
export interface UserAgent {
  id: string;
  name: string;
  value: string;
  browser: string;
  os: string;
  device: string;
  lastUpdated: string;
  popularity: number;
  category: 'desktop' | 'mobile' | 'tablet' | 'bot';
  description: string;
}

export const userAgents: UserAgent[] = [
  // Desktop Browsers (Windows)
  {
    id: '1',
    name: 'Chrome 135 (Windows)',
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    browser: 'Chrome',
    os: 'Windows',
    device: 'Desktop',
    lastUpdated: '2025-03-15',
    popularity: 24.8,
    category: 'desktop',
    description: 'Chrome 135 on Windows 10/11 desktop computers. This represents the standard browsing experience for most Windows users in 2025.'
  },
  {
    id: '2',
    name: 'Edge 135 (Windows)',
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.2357.81',
    browser: 'Edge',
    os: 'Windows',
    device: 'Desktop',
    lastUpdated: '2025-03-12',
    popularity: 8.7,
    category: 'desktop',
    description: 'Microsoft Edge 135 on Windows. The default browser on Windows systems, featuring enhanced integration with Microsoft services and AI assistants.'
  },
  {
    id: '3',
    name: 'Firefox 130 (Windows)',
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:130.0) Gecko/20100101 Firefox/130.0',
    browser: 'Firefox',
    os: 'Windows',
    device: 'Desktop',
    lastUpdated: '2025-02-28',
    popularity: 5.3,
    category: 'desktop',
    description: 'Firefox 130 on Windows systems. Known for its privacy features and independent rendering engine, Firefox maintains a dedicated user base in 2025.'
  },
  {
    id: '4',
    name: 'Opera 111 (Windows)',
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 OPR/111.0.0.0',
    browser: 'Opera',
    os: 'Windows',
    device: 'Desktop',
    lastUpdated: '2025-03-05',
    popularity: 2.1,
    category: 'desktop',
    description: 'Opera 111 on Windows desktop. Features built-in VPN and optimized performance for multimedia content consumption.'
  },
  {
    id: '5',
    name: 'Brave 135 (Windows)',
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Brave/135.0.0.0',
    browser: 'Brave',
    os: 'Windows',
    device: 'Desktop',
    lastUpdated: '2025-03-15',
    popularity: 3.5,
    category: 'desktop',
    description: 'Brave 135 on Windows. Privacy-focused browser with built-in ad and tracker blocking capabilities and crypto features.'
  },
  {
    id: '6',
    name: 'Vivaldi 7.5 (Windows)',
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Vivaldi/7.5.3030.50',
    browser: 'Vivaldi',
    os: 'Windows',
    device: 'Desktop',
    lastUpdated: '2025-03-10',
    popularity: 1.2,
    category: 'desktop',
    description: 'Vivaldi 7.5 on Windows. Highly customizable browser with power-user features like tab stacking, built-in notes, and web panels.'
  },
  {
    id: '7',
    name: 'Tor Browser 13.0 (Windows)',
    value: 'Mozilla/5.0 (Windows NT 10.0; rv:130.0) Gecko/20100101 Firefox/130.0',
    browser: 'Tor Browser',
    os: 'Windows',
    device: 'Desktop',
    lastUpdated: '2025-02-20',
    popularity: 1.0,
    category: 'desktop',
    description: 'Tor Browser 13.0 on Windows. Based on Firefox, focused on privacy and anonymity through the Tor network. User agent is deliberately generic to prevent fingerprinting.'
  },
  
  // Desktop Browsers (macOS)
  {
    id: '8',
    name: 'Safari 19 (macOS)',
    value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5_1) AppleWebKit/625.2.7 (KHTML, like Gecko) Version/19.1 Safari/625.2.7',
    browser: 'Safari',
    os: 'macOS',
    device: 'Desktop',
    lastUpdated: '2025-02-18',
    popularity: 7.9,
    category: 'desktop',
    description: 'Safari 19 on macOS 14.5 (Sequoia). Optimized for Apple hardware with industry-leading power efficiency and privacy features.'
  },
  {
    id: '9',
    name: 'Chrome 135 (macOS)',
    value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    browser: 'Chrome',
    os: 'macOS',
    device: 'Desktop',
    lastUpdated: '2025-03-15',
    popularity: 6.2,
    category: 'desktop',
    description: 'Chrome 135 on macOS 14.5. Features enhanced integration with Google services and support for the latest web standards.'
  },
  {
    id: '10',
    name: 'Firefox 130 (macOS ARM)',
    value: 'Mozilla/5.0 (Macintosh; Apple Silicon Mac OS X 14_5_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/19.1 Firefox/130.0',
    browser: 'Firefox',
    os: 'macOS',
    device: 'Desktop',
    lastUpdated: '2025-02-28',
    popularity: 1.8,
    category: 'desktop',
    description: 'Firefox 130 optimized for Apple Silicon Macs. Features native ARM performance with enhanced battery life and rendering capabilities.'
  },
  {
    id: '11',
    name: 'Arc 3.2 (macOS)',
    value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5_1) AppleWebKit/625.2.7 (KHTML, like Gecko) Arc/3.2.5 Safari/625.2.7',
    browser: 'Arc',
    os: 'macOS',
    device: 'Desktop',
    lastUpdated: '2025-03-01',
    popularity: 3.2,
    category: 'desktop',
    description: 'Arc 3.2 browser on macOS. A modern, privacy-focused browser with a reimagined user interface that has gained significant popularity since 2023.'
  },
  {
    id: '12',
    name: 'Brave 135 (macOS)',
    value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Brave/135.0.0.0',
    browser: 'Brave',
    os: 'macOS',
    device: 'Desktop',
    lastUpdated: '2025-03-15',
    popularity: 2.1,
    category: 'desktop',
    description: 'Brave 135 on macOS. Privacy-focused browser with built-in ad and tracker blocking and a crypto wallet for Web3 integration.'
  },
  {
    id: '13',
    name: 'Orion 2.0 (macOS)',
    value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5_1) AppleWebKit/625.2.7 (KHTML, like Gecko) Version/19.1 Orion/2.0.5 Safari/625.2.7',
    browser: 'Orion',
    os: 'macOS',
    device: 'Desktop',
    lastUpdated: '2025-03-10',
    popularity: 0.8,
    category: 'desktop',
    description: 'Orion 2.0 on macOS. A newer browser that combines WebKit rendering with support for Chrome and Firefox extensions. Focused on privacy and performance.'
  },
  {
    id: '14',
    name: 'Opera 111 (macOS)',
    value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 OPR/111.0.0.0',
    browser: 'Opera',
    os: 'macOS',
    device: 'Desktop',
    lastUpdated: '2025-03-05',
    popularity: 0.9,
    category: 'desktop',
    description: 'Opera 111 on macOS. Features built-in VPN, AI sidebars, and optimization for multimedia content.'
  },
  
  // Desktop Browsers (Linux)
  {
    id: '15',
    name: 'Chrome 135 (Linux)',
    value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    browser: 'Chrome',
    os: 'Linux',
    device: 'Desktop',
    lastUpdated: '2025-03-15',
    popularity: 2.3,
    category: 'desktop',
    description: 'Chrome 135 running on various Linux distributions. Preferred by developers and technical users who value open-source software.'
  },
  {
    id: '16',
    name: 'Firefox 130 (Linux)',
    value: 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
    browser: 'Firefox',
    os: 'Linux',
    device: 'Desktop',
    lastUpdated: '2025-02-28',
    popularity: 1.9,
    category: 'desktop',
    description: 'Firefox 130 on Linux. Popular among privacy-conscious users and those who prefer open-source software ecosystems.'
  },
  {
    id: '17',
    name: 'Brave 135 (Linux)',
    value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Brave/135.0.0.0',
    browser: 'Brave',
    os: 'Linux',
    device: 'Desktop',
    lastUpdated: '2025-03-15',
    popularity: 1.2,
    category: 'desktop',
    description: 'Brave 135 on Linux distributions. Popular among privacy-focused Linux users who want Chrome compatibility with enhanced privacy features.'
  },
  {
    id: '18',
    name: 'Chromium 135 (Linux)',
    value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chromium/135.0.0.0 Chrome/135.0.0.0 Safari/537.36',
    browser: 'Chromium',
    os: 'Linux',
    device: 'Desktop',
    lastUpdated: '2025-03-15',
    popularity: 1.1,
    category: 'desktop',
    description: 'Chromium 135 on Linux. The open-source project that powers Chrome and many other browsers, preferred by users who avoid proprietary components.'
  },
  {
    id: '19',
    name: 'Opera 111 (Linux)',
    value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 OPR/111.0.0.0',
    browser: 'Opera',
    os: 'Linux',
    device: 'Desktop',
    lastUpdated: '2025-03-05',
    popularity: 0.6,
    category: 'desktop',
    description: 'Opera 111 on Linux. Features a customizable interface with built-in tools like VPN and ad blocker for Linux users.'
  },
  {
    id: '20',
    name: 'Vivaldi 7.5 (Linux)',
    value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Vivaldi/7.5.3030.50',
    browser: 'Vivaldi',
    os: 'Linux',
    device: 'Desktop',
    lastUpdated: '2025-03-10',
    popularity: 0.8,
    category: 'desktop',
    description: 'Vivaldi 7.5 on Linux. Highly customizable browser with extensive keyboard shortcuts and power-user features popular in the Linux community.'
  },
  {
    id: '21',
    name: 'Tor Browser 13.0 (Linux)',
    value: 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
    browser: 'Tor Browser',
    os: 'Linux',
    device: 'Desktop',
    lastUpdated: '2025-02-20',
    popularity: 0.7,
    category: 'desktop',
    description: 'Tor Browser 13.0 on Linux. Often used on security-focused Linux distributions for maximum privacy and anonymity.'
  },
  
  // Mobile Browsers (iOS)
  {
    id: '22',
    name: 'Safari 19 (iOS 18)',
    value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_4 like Mac OS X) AppleWebKit/625.2.7 (KHTML, like Gecko) Version/19.0 Mobile/15E148 Safari/625.2.7',
    browser: 'Safari',
    os: 'iOS',
    device: 'Mobile',
    lastUpdated: '2025-03-10',
    popularity: 18.6,
    category: 'mobile',
    description: 'Safari 19 on iOS 18.4. The default browser on iPhone with Apple Intelligence integration and enhanced privacy features.'
  },
  {
    id: '23',
    name: 'Chrome 135 (iOS)',
    value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_4 like Mac OS X) AppleWebKit/625.2.7 (KHTML, like Gecko) CriOS/135.0.0.0 Mobile/15E148 Safari/625.2.7',
    browser: 'Chrome',
    os: 'iOS',
    device: 'Mobile',
    lastUpdated: '2025-03-15',
    popularity: 6.7,
    category: 'mobile',
    description: 'Chrome 135 on iOS 18.4. Uses WebKit rendering engine as required by Apple guidelines but offers Google account synchronization.'
  },
  {
    id: '24',
    name: 'Firefox 130 (iOS)',
    value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_4 like Mac OS X) AppleWebKit/625.2.7 (KHTML, like Gecko) FxiOS/130.0 Mobile/15E148 Safari/625.2.7',
    browser: 'Firefox',
    os: 'iOS',
    device: 'Mobile',
    lastUpdated: '2025-02-28',
    popularity: 1.2,
    category: 'mobile',
    description: 'Firefox 130 on iOS. Like all iOS browsers, it uses WebKit rendering engine while providing Firefox account sync and privacy features.'
  },
  {
    id: '25',
    name: 'Edge 135 (iOS)',
    value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_4 like Mac OS X) AppleWebKit/625.2.7 (KHTML, like Gecko) EdgiOS/135.0.0.0 Mobile/15E148 Safari/625.2.7',
    browser: 'Edge',
    os: 'iOS',
    device: 'Mobile',
    lastUpdated: '2025-03-12',
    popularity: 0.9,
    category: 'mobile',
    description: 'Microsoft Edge 135 on iOS 18. Features Microsoft account integration and AI assistant features, using the WebKit rendering engine.'
  },
  {
    id: '26',
    name: 'Brave 135 (iOS)',
    value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_4 like Mac OS X) AppleWebKit/625.2.7 (KHTML, like Gecko) BraveIOS/135.0.0.0 Mobile/15E148 Safari/625.2.7',
    browser: 'Brave',
    os: 'iOS',
    device: 'Mobile',
    lastUpdated: '2025-03-15',
    popularity: 1.3,
    category: 'mobile',
    description: 'Brave 135 on iOS 18.4. Privacy-focused browser with built-in ad blocking and tracking protection for mobile users.'
  },
  {
    id: '27',
    name: 'Opera Touch 6.0 (iOS)',
    value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_4 like Mac OS X) AppleWebKit/625.2.7 (KHTML, like Gecko) OPiOS/6.0.0.0 Mobile/15E148 Safari/625.2.7',
    browser: 'Opera Touch',
    os: 'iOS',
    device: 'Mobile',
    lastUpdated: '2025-03-05',
    popularity: 0.5,
    category: 'mobile',
    description: 'Opera Touch 6.0 on iOS 18.4. Designed for one-handed use with a floating action button and built-in ad blocking features.'
  },
  {
    id: '28',
    name: 'DuckDuckGo 15.0 (iOS)',
    value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_4 like Mac OS X) AppleWebKit/625.2.7 (KHTML, like Gecko) Version/19.0 DuckDuckGo/15 Mobile/15E148 Safari/625.2.7',
    browser: 'DuckDuckGo',
    os: 'iOS',
    device: 'Mobile',
    lastUpdated: '2025-03-01',
    popularity: 0.8,
    category: 'mobile',
    description: 'DuckDuckGo 15.0 on iOS 18.4. Privacy-focused browser with built-in tracker blocking, encrypted connections, and private search features.'
  },
  {
    id: '29',
    name: 'Safari 19 (iOS 18 - iPhone 18 Pro)',
    value: 'Mozilla/5.0 (iPhone18,1; CPU iPhone OS 18_4 like Mac OS X) AppleWebKit/625.2.7 (KHTML, like Gecko) Version/19.0 Mobile/15E148 Safari/625.2.7',
    browser: 'Safari',
    os: 'iOS',
    device: 'Mobile',
    lastUpdated: '2025-03-10',
    popularity: 4.2,
    category: 'mobile',
    description: 'Safari 19 on the iPhone 18 Pro running iOS 18.4. Takes advantage of the device\'s advanced CPU and GPU for enhanced web performance.'
  },
  
  // Mobile Browsers (Android)
  {
    id: '30',
    name: 'Chrome 135 (Android)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36',
    browser: 'Chrome',
    os: 'Android',
    device: 'Mobile',
    lastUpdated: '2025-03-15',
    popularity: 20.3,
    category: 'mobile',
    description: 'Chrome 135 on Android 16. The most popular mobile browser globally in 2025, featuring Google AI integration and enhanced performance.'
  },
  {
    id: '31',
    name: 'Samsung Internet 25 (Android)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/25.0 Chrome/135.0.0.0 Mobile Safari/537.36',
    browser: 'Samsung Internet',
    os: 'Android',
    device: 'Mobile',
    lastUpdated: '2025-03-08',
    popularity: 5.4,
    category: 'mobile',
    description: 'Samsung Internet 25 on Android 16. Default browser on Samsung devices with optimized performance for Samsung hardware and Knox security features.'
  },
  {
    id: '32',
    name: 'Edge 135 (Android)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36 EdgA/135.0.0.0',
    browser: 'Edge',
    os: 'Android',
    device: 'Mobile',
    lastUpdated: '2025-03-12',
    popularity: 1.8,
    category: 'mobile',
    description: 'Microsoft Edge 135 on Android 16. Features advanced integration with Microsoft services and AI assistants.'
  },
  {
    id: '33',
    name: 'Firefox 130 (Android)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-S928B) Gecko/130.0 Firefox/130.0',
    browser: 'Firefox',
    os: 'Android',
    device: 'Mobile',
    lastUpdated: '2025-02-28',
    popularity: 1.5,
    category: 'mobile',
    description: 'Firefox 130 on Android 16. Uses the Gecko rendering engine and offers enhanced privacy features with tracking protection.'
  },
  {
    id: '34',
    name: 'Brave 135 (Android)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36 Brave/135.0.0.0',
    browser: 'Brave',
    os: 'Android',
    device: 'Mobile',
    lastUpdated: '2025-03-15',
    popularity: 2.2,
    category: 'mobile',
    description: 'Brave 135 on Android 16. Privacy-focused browser with built-in ad blocking and crypto features for mobile users.'
  },
  {
    id: '35',
    name: 'Opera Mini 35 (Android)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36 OPR/35.0.0.0',
    browser: 'Opera Mini',
    os: 'Android',
    device: 'Mobile',
    lastUpdated: '2025-03-05',
    popularity: 1.3,
    category: 'mobile',
    description: 'Opera Mini 35 on Android 16. Data-saving browser with server-side compression, popular in regions with limited bandwidth.'
  },
  {
    id: '36',
    name: 'UC Browser 17 (Android)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/135.0.0.0 Mobile Safari/537.36 UCBrowser/17.2.0.1306',
    browser: 'UC Browser',
    os: 'Android',
    device: 'Mobile',
    lastUpdated: '2025-02-15',
    popularity: 1.9,
    category: 'mobile',
    description: 'UC Browser 17 on Android 16. Popular in Asian markets with data compression technology and a feature-rich interface.'
  },
  {
    id: '37',
    name: 'DuckDuckGo 15.0 (Android)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36 DuckDuckGo/15',
    browser: 'DuckDuckGo',
    os: 'Android',
    device: 'Mobile',
    lastUpdated: '2025-03-01',
    popularity: 0.7,
    category: 'mobile',
    description: 'DuckDuckGo 15.0 on Android 16. Privacy-focused browser with built-in App Tracking Protection and one-tap data clearing.'
  },
  {
    id: '38',
    name: 'Vivaldi 7.5 (Android)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36 Vivaldi/7.5.3030.50',
    browser: 'Vivaldi',
    os: 'Android',
    device: 'Mobile',
    lastUpdated: '2025-03-10',
    popularity: 0.5,
    category: 'mobile',
    description: 'Vivaldi 7.5 on Android 16. Feature-rich browser with customizable speed dials, tab management, and tracking protection.'
  },
  
  // Tablet Browsers (iOS)
  {
    id: '39',
    name: 'Safari 19 (iPadOS)',
    value: 'Mozilla/5.0 (iPad; CPU OS 18_4 like Mac OS X) AppleWebKit/625.2.7 (KHTML, like Gecko) Version/19.0 Mobile/15E148 Safari/625.2.7',
    browser: 'Safari',
    os: 'iPadOS',
    device: 'Tablet',
    lastUpdated: '2025-03-10',
    popularity: 6.2,
    category: 'tablet',
    description: 'Safari 19 on iPadOS 18.4. Features desktop-class browsing experience with support for web apps and enhanced multitasking.'
  },
  {
    id: '40',
    name: 'Chrome 135 (iPadOS)',
    value: 'Mozilla/5.0 (iPad; CPU OS 18_4 like Mac OS X) AppleWebKit/625.2.7 (KHTML, like Gecko) CriOS/135.0.0.0 Mobile/15E148 Safari/625.2.7',
    browser: 'Chrome',
    os: 'iPadOS',
    device: 'Tablet',
    lastUpdated: '2025-03-15',
    popularity: 1.9,
    category: 'tablet',
    description: 'Chrome 135 on iPadOS 18.4. Uses WebKit rendering engine while offering Google account synchronization and services integration.'
  },
  {
    id: '41',
    name: 'Firefox 130 (iPadOS)',
    value: 'Mozilla/5.0 (iPad; CPU OS 18_4 like Mac OS X) AppleWebKit/625.2.7 (KHTML, like Gecko) FxiOS/130.0 Mobile/15E148 Safari/625.2.7',
    browser: 'Firefox',
    os: 'iPadOS',
    device: 'Tablet',
    lastUpdated: '2025-02-28',
    popularity: 0.7,
    category: 'tablet',
    description: 'Firefox 130 on iPadOS 18.4. Features Firefox account synchronization with enhanced privacy controls, limited by Apple\'s WebKit requirement.'
  },
  {
    id: '42',
    name: 'Edge 135 (iPadOS)',
    value: 'Mozilla/5.0 (iPad; CPU OS 18_4 like Mac OS X) AppleWebKit/625.2.7 (KHTML, like Gecko) EdgiOS/135.0.0.0 Mobile/15E148 Safari/625.2.7',
    browser: 'Edge',
    os: 'iPadOS',
    device: 'Tablet',
    lastUpdated: '2025-03-12',
    popularity: 0.5,
    category: 'tablet',
    description: 'Microsoft Edge 135 on iPadOS 18.4. Optimized for iPad with Microsoft 365 integration and AI-powered features.'
  },
  {
    id: '43',
    name: 'Brave 135 (iPadOS)',
    value: 'Mozilla/5.0 (iPad; CPU OS 18_4 like Mac OS X) AppleWebKit/625.2.7 (KHTML, like Gecko) BraveIOS/135.0.0.0 Mobile/15E148 Safari/625.2.7',
    browser: 'Brave',
    os: 'iPadOS',
    device: 'Tablet',
    lastUpdated: '2025-03-15',
    popularity: 0.6,
    category: 'tablet',
    description: 'Brave 135 on iPadOS 18.4. Privacy-focused browser with built-in ad and tracker blocking for tablet users.'
  },
  {
    id: '44',
    name: 'Opera Touch 6.0 (iPadOS)',
    value: 'Mozilla/5.0 (iPad; CPU OS 18_4 like Mac OS X) AppleWebKit/625.2.7 (KHTML, like Gecko) OPiOS/6.0.0.0 Mobile/15E148 Safari/625.2.7',
    browser: 'Opera Touch',
    os: 'iPadOS',
    device: 'Tablet',
    lastUpdated: '2025-03-05',
    popularity: 0.4,
    category: 'tablet',
    description: 'Opera Touch 6.0 on iPadOS 18.4. Optimized for tablet experience with quick access to bookmarks and search.'
  },
  {
    id: '45',
    name: 'Safari 19 (iPadOS - iPad Pro M5)',
    value: 'Mozilla/5.0 (iPad14,6; CPU OS 18_4 like Mac OS X) AppleWebKit/625.2.7 (KHTML, like Gecko) Version/19.0 Mobile/15E148 Safari/625.2.7',
    browser: 'Safari',
    os: 'iPadOS',
    device: 'Tablet',
    lastUpdated: '2025-03-10',
    popularity: 1.8,
    category: 'tablet',
    description: 'Safari 19 on iPad Pro with M5 chip running iPadOS 18.4. Takes advantage of the device\'s desktop-class processor for enhanced browsing performance.'
  },
  
  // Tablet Browsers (Android)
  {
    id: '46',
    name: 'Chrome 135 (Android Tablet)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-X810) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    browser: 'Chrome',
    os: 'Android',
    device: 'Tablet',
    lastUpdated: '2025-03-15',
    popularity: 3.1,
    category: 'tablet',
    description: 'Chrome 135 on Android 16 tablets. Features tablet-optimized UI with enhanced productivity tools and multitasking capabilities.'
  },
  {
    id: '47',
    name: 'Samsung Internet 25 (Android Tablet)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-X810) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/25.0 Chrome/135.0.0.0 Safari/537.36',
    browser: 'Samsung Internet',
    os: 'Android',
    device: 'Tablet',
    lastUpdated: '2025-03-08',
    popularity: 1.2,
    category: 'tablet',
    description: 'Samsung Internet 25 on Samsung tablets running Android 16. Optimized for S-Pen integration and Samsung\'s ecosystem.'
  },
  {
    id: '48',
    name: 'Firefox 130 (Android Tablet)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-X810) Gecko/130.0 Firefox/130.0',
    browser: 'Firefox',
    os: 'Android',
    device: 'Tablet',
    lastUpdated: '2025-02-28',
    popularity: 0.6,
    category: 'tablet',
    description: 'Firefox 130 optimized for Android tablets. Features enhanced tab management for larger screens and support for Firefox extensions.'
  },
  {
    id: '49',
    name: 'Edge 135 (Android Tablet)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-X810) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 EdgA/135.0.0.0',
    browser: 'Edge',
    os: 'Android',
    device: 'Tablet',
    lastUpdated: '2025-03-12',
    popularity: 0.7,
    category: 'tablet',
    description: 'Microsoft Edge 135 on Android tablets. Optimized for larger screens with enhanced productivity features for tablet users.'
  },
  {
    id: '50',
    name: 'Opera 111 (Android Tablet)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-X810) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 OPR/111.0.0.0',
    browser: 'Opera',
    os: 'Android',
    device: 'Tablet',
    lastUpdated: '2025-03-05',
    popularity: 0.5,
    category: 'tablet',
    description: 'Opera 111 on Android tablets. Features split-screen browsing and optimized UI for larger displays.'
  },
  {
    id: '51',
    name: 'Vivaldi 7.5 (Android Tablet)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-X810) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Vivaldi/7.5.3030.50',
    browser: 'Vivaldi',
    os: 'Android',
    device: 'Tablet',
    lastUpdated: '2025-03-10',
    popularity: 0.3,
    category: 'tablet',
    description: 'Vivaldi 7.5 on Android tablets. Features advanced tab management, split-screen browsing, and extensive customization options for tablet users.'
  },
  {
    id: '52',
    name: 'Brave 135 (Android Tablet)',
    value: 'Mozilla/5.0 (Linux; Android 16; SM-X810) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Brave/135.0.0.0',
    browser: 'Brave',
    os: 'Android',
    device: 'Tablet',
    lastUpdated: '2025-03-15',
    popularity: 0.4,
    category: 'tablet',
    description: 'Brave 135 on Android tablets. Privacy-focused browser with optimized layout for larger screens and enhanced productivity features.'
  },
  
  // Web Crawlers and Bots
  {
    id: '53',
    name: 'Googlebot (2025)',
    value: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.5; +http://www.google.com/bot.html) Chrome/135.0.0.0 Safari/537.36',
    browser: 'Googlebot',
    os: 'N/A',
    device: 'Bot',
    lastUpdated: '2025-01-15',
    popularity: 2.8,
    category: 'bot',
    description: 'Google\'s web crawler that indexes content for the Google search engine. 2025 version with enhanced JavaScript rendering capabilities.'
  },
  {
    id: '54',
    name: 'Bingbot (2025)',
    value: 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
    browser: 'Bingbot',
    os: 'N/A',
    device: 'Bot',
    lastUpdated: '2025-02-10',
    popularity: 0.9,
    category: 'bot',
    description: 'Microsoft Bing\'s web crawler that indexes content for the Bing search engine and Microsoft\'s AI services.'
  },
  {
    id: '55',
    name: 'DuckDuckGo Bot (2025)',
    value: 'DuckDuckBot/1.2; (+http://duckduckgo.com/duckduckbot.html)',
    browser: 'DuckDuckBot',
    os: 'N/A',
    device: 'Bot',
    lastUpdated: '2025-01-30',
    popularity: 0.4,
    category: 'bot',
    description: 'Web crawler for the privacy-focused search engine DuckDuckGo, which has gained market share in the privacy-conscious segment.'
  },
  {
    id: '56',
    name: 'ChatGPT Web Crawler',
    value: 'ChatGPT-User/1.0 (+https://openai.com/crawler)',
    browser: 'ChatGPT',
    os: 'N/A',
    device: 'Bot',
    lastUpdated: '2025-03-01',
    popularity: 1.1,
    category: 'bot',
    description: 'OpenAI\'s web crawler that indexes content to provide up-to-date information to AI models and chatbots.'
  },
  {
    id: '57',
    name: 'Applebot (2025)',
    value: 'Mozilla/5.0 (compatible; Applebot/0.3; +http://www.apple.com/go/applebot)',
    browser: 'Applebot',
    os: 'N/A',
    device: 'Bot',
    lastUpdated: '2025-02-15',
    popularity: 0.6,
    category: 'bot',
    description: 'Apple\'s web crawler used for services like Siri and Spotlight Suggestions. Increasingly important for indexing content for Apple Intelligence features.'
  },
  {
    id: '58',
    name: 'Yandex Bot (2025)',
    value: 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)',
    browser: 'YandexBot',
    os: 'N/A',
    device: 'Bot',
    lastUpdated: '2025-01-20',
    popularity: 0.5,
    category: 'bot',
    description: 'Web crawler for Yandex search engine, primarily focused on Russian and Eastern European content but with global reach.'
  },
  {
    id: '59',
    name: 'Anthropic Claude Crawler',
    value: 'Claude-Web/1.0 (+https://www.anthropic.com/crawler)',
    browser: 'Claude',
    os: 'N/A',
    device: 'Bot',
    lastUpdated: '2025-03-05',
    popularity: 0.8,
    category: 'bot',
    description: 'Anthropic\'s web crawler that indexes content for their Claude AI assistant, focusing on up-to-date information for AI responses.'
  },
  {
    id: '60',
    name: 'Baidu Spider (2025)',
    value: 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)',
    browser: 'Baiduspider',
    os: 'N/A',
    device: 'Bot',
    lastUpdated: '2025-02-05',
    popularity: 0.7,
    category: 'bot',
    description: 'Web crawler for Baidu, China\'s largest search engine. Important for visibility in the Chinese market.'
  }
];

export interface AdviceArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  publishDate: string;
  category: string;
  readTime: string;
}

export const adviceArticles: AdviceArticle[] = [
  {
    id: '1',
    title: 'Why User Agents Matter for Web Development',
    summary: 'Understanding how different browsers identify themselves and why it matters for your website.',
    content: `User agents are strings of text that identify the browser, operating system, and device to websites. They play a crucial role in web development for several reasons:

1. **Browser Compatibility**: Different browsers render HTML, CSS, and JavaScript differently. By detecting user agents, you can serve compatible code.

2. **Responsive Design**: User agents help identify mobile vs. desktop devices, allowing you to serve appropriate layouts.

3. **Feature Detection**: While feature detection is preferred, sometimes user agent sniffing is necessary for legacy browser support.

4. **Analytics**: Understanding your user base helps prioritize development efforts for the most common browsers.

5. **Security**: Some attacks can be mitigated by validating user agents, though this should never be your only security measure.

Best practice is to use feature detection when possible, but understanding user agents remains valuable for comprehensive web development.`,
    publishDate: '2023-05-10',
    category: 'Development',
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'How to Properly Handle User Agents in JavaScript',
    summary: 'Learn the best practices for detecting and responding to different browsers and devices.',
    content: `While feature detection is generally preferred over user agent sniffing, there are legitimate cases where you need to work with user agents directly. Here's how to do it properly:

\`\`\`javascript
// Getting the user agent string
const userAgent = navigator.userAgent;

// Modern approach - Use the User-Agent Client Hints API when available
if (navigator.userAgentData) {
  navigator.userAgentData.getHighEntropyValues([
    "architecture",
    "model",
    "platform",
    "platformVersion",
    "uaFullVersion"
  ]).then(ua => {
    console.log('Brand:', ua.brands);
    console.log('Mobile:', ua.mobile);
    console.log('Platform:', ua.platform);
  });
}

// Only fall back to UA string parsing when necessary
function isIOS() {
  return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
}

// Prefer feature detection when possible
function supportsTouch() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
\`\`\`

Remember that user agent strings can be spoofed, so never rely on them for security-critical features. They should be used for enhancing user experience, not for access control.`,
    publishDate: '2023-05-12',
    category: 'JavaScript',
    readTime: '8 min'
  },
  {
    id: '3',
    title: 'The Future of User Agents with Client Hints',
    summary: 'Explore how Client Hints are changing the way browsers identify themselves to websites.',
    content: `Traditional User-Agent strings have become problematic - they're bloated, privacy-concerning, and often misleading. Enter Client Hints, a modern solution:

Client Hints are a set of HTTP request header fields that provide the server with information about the client's device capabilities and preferences. Unlike the traditional User-Agent string, which packs all information into one string, Client Hints distribute this information across multiple headers.

**Benefits of Client Hints:**

1. **Privacy Improvement**: Reduces passive fingerprinting by only sending the information that's explicitly requested.

2. **Simplified Parsing**: No more error-prone regex parsing of complex UA strings.

3. **Performance**: Reduces header size by only sending requested information.

4. **Accuracy**: Provides more reliable and standardized device information.

To use Client Hints, servers include the \`Accept-CH\` header in their responses to indicate which client hints they want to receive:

\`\`\`
Accept-CH: Sec-CH-UA, Sec-CH-UA-Mobile, Sec-CH-UA-Platform
\`\`\`

The client can then include these headers in subsequent requests:

\`\`\`
Sec-CH-UA: "Google Chrome";v="113", "Chromium";v="113"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
\`\`\`

For high-entropy values that might impact privacy (like detailed device models), explicit permission is required through the \`Permissions-Policy\` header.

As browsers continue to adopt Client Hints, we're moving toward a more organized, privacy-respecting way of sharing client information with servers.`,
    publishDate: '2023-05-15',
    category: 'Web Standards',
    readTime: '6 min'
  },
  {
    id: '4',
    title: 'Optimizing For Mobile User Agents',
    summary: 'Essential strategies for ensuring your website performs well on mobile devices across different browsers.',
    content: `Mobile optimization is no longer optional in today's web development landscape. Here's how to effectively handle mobile user agents:

# Device Detection Best Practices

When optimizing for mobile devices, it's important to use reliable detection methods. While user agent strings provide information, they should be used in conjunction with other techniques:

1. **Responsive Design First**: Use CSS media queries as your primary approach for adapting to different screen sizes.

2. **Feature Detection**: Libraries like Modernizr help identify device capabilities rather than making assumptions based on user agent alone.

3. **Touch Events**: Detect touch capabilities to enhance interaction on mobile devices:

\`\`\`javascript
const isTouchDevice = () => {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}

if (isTouchDevice()) {
  // Implement touch-optimized interactions
}
\`\`\`

4. **Performance Considerations**: Mobile devices often have bandwidth and processing constraints:
   - Minimize JavaScript execution time
   - Optimize images and assets
   - Implement lazy loading for below-the-fold content
   - Keep DOM manipulation to a minimum

5. **Testing Across Devices**: Use real device testing or emulators for iOS, Android, and other mobile platforms to verify behavior.

Remember that the mobile web landscape is diverse, with various screen sizes, browsers, and capabilities. A flexible approach that doesn't rely solely on user agent detection will be more future-proof.`,
    publishDate: '2023-06-01',
    category: 'Mobile Development',
    readTime: '7 min'
  },
  {
    id: '5',
    title: 'Browser Fingerprinting and Privacy Concerns',
    summary: 'Understanding the ethical implications of user agent data collection and browser fingerprinting techniques.',
    content: `Browser fingerprinting has become increasingly sophisticated, raising important privacy considerations for web developers and users alike.

# Understanding Browser Fingerprinting

Browser fingerprinting is the process of collecting various browser and device attributes to create a unique identifier for tracking purposes. The user agent string is just one component of a potential fingerprint.

## Common Fingerprinting Techniques

- **Canvas Fingerprinting**: Exploits how different devices render graphics
- **Font Detection**: Identifies installed fonts 
- **Plugin Enumeration**: Catalogues browser plugins and extensions
- **WebRTC IP Leakage**: Reveals true IP addresses even with VPNs
- **User Agent Analysis**: Examines detailed browser and OS information

\`\`\`javascript
// Example of a simple fingerprinting technique
function getCanvasFingerprint() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.textBaseline = 'top';
  ctx.font = '14px Arial';
  ctx.fillText('Hello, world!', 0, 0);
  return canvas.toDataURL();
}
\`\`\`

## Privacy Implications

With the increasing focus on user privacy through regulations like GDPR and CCPA, developers need to carefully consider:

1. **Transparency**: Users should be informed about data collection
2. **Consent**: Explicit permission should be obtained before fingerprinting
3. **Data Minimization**: Only collect what's necessary
4. **Legal Compliance**: Follow regional privacy laws

## Alternatives to Invasive Tracking

- **Anonymous Analytics**: Aggregate data without personal identifiers
- **First-Party Cookies**: More transparent and under user control
- **Privacy-Respecting UX**: Design with privacy in mind

As web professionals, we have a responsibility to balance business needs with user privacy concerns. The most ethical approach is to be transparent about data collection and provide users with meaningful choices about their privacy.`,
    publishDate: '2023-06-15',
    category: 'Privacy & Security',
    readTime: '9 min'
  },
  {
    id: '6',
    title: 'Debugging Cross-Browser Issues with User Agent Testing',
    summary: 'Practical approaches to identifying and fixing browser-specific bugs using user agent analysis.',
    content: `Cross-browser compatibility remains one of the most challenging aspects of web development. User agent testing can be a valuable tool in your debugging arsenal.

# Systematic Cross-Browser Debugging

When faced with browser-specific issues, follow this structured approach:

## 1. Identify the Problem

First, document exactly which browsers and versions exhibit the issue:

\`\`\`javascript
// Helper function to log browser details with problematic behavior
function logBrowserIssue(issueDescription) {
  console.log({
    issue: issueDescription,
    userAgent: navigator.userAgent,
    browser: getBrowserName(),
    version: getBrowserVersion(),
    os: getOperatingSystem(),
    timestamp: new Date().toISOString()
  });
}
\`\`\`

## 2. Isolate the Code

Create a minimal reproduction case that demonstrates only the problematic behavior. This helps identify if the issue is in your code or a browser quirk.

## 3. Check Known Issues

Many browsers have documented quirks and behaviors:
- **Safari**: Often has unique CSS implementation details
- **Internet Explorer/Edge Legacy**: Historical compatibility issues
- **Chrome vs. Firefox**: May handle newer JavaScript features differently

## 4. Use Feature Detection

Rather than user agent sniffing, test for the specific feature causing problems:

\`\`\`javascript
// Instead of checking browser name
if (typeof document.createElement('dialog').showModal === 'function') {
  // Safe to use the dialog element
} else {
  // Use a polyfill or alternative approach
}
\`\`\`

## 5. Implement Targeted Fixes

When absolutely necessary, you can use user agent information to apply specific fixes:

\`\`\`css
/* Example of a targeted CSS fix */
@supports (-webkit-touch-callout: none) {
  /* iOS-specific fix */
  .problematic-element {
    /* Fix properties */
  }
}
\`\`\`

## 6. Test Extensively

Always verify your fixes across:
- Different browser versions
- Multiple operating systems
- Various device types and screen sizes

Remember that user agent strings change frequently, so avoid hard-coding specific version checks when possible. Focus on capability detection and standards-compliant code first, with user agent analysis as a last resort for stubborn compatibility issues.`,
    publishDate: '2023-07-01',
    category: 'Development',
    readTime: '10 min'
  },
  {
    id: '7',
    title: 'Evolution of User Agents: Past, Present, and Future',
    summary: 'A historical perspective on how user agent strings have evolved and where they are headed in the web ecosystem.',
    content: `The user agent string has a fascinating history that reflects the evolution of the web itself. Understanding this history provides insight into their current complexity and future direction.

# The History of User Agent Strings

## The Early Days: Browser Wars

In the early days of the web, Netscape Navigator and Internet Explorer competed fiercely for market share. This led to user agent strings that often included references to competing browsers to ensure compatibility:

\`\`\`
Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)
\`\`\`

Notice how Internet Explorer identified itself as "Mozilla" - this compatibility token persists even in modern browsers.

## The Rise of Standards and Fragmentation

As more browsers entered the market, user agent strings became increasingly complex:

- **Chrome** added "Safari" to its user agent for WebKit compatibility
- **Edge** initially included "Chrome" and "Safari" references
- **Mobile browsers** added device information

This led to the lengthy, often confusing strings we see today.

## Present: The Compatibility Mess

Current user agents are filled with historical baggage and redundant information:

\`\`\`
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36
\`\`\`

This Chrome browser string references Mozilla, WebKit, KHTML, and Safari - none of which are actually Chrome!

## Future: Client Hints and Privacy

The future of user agent strings is changing due to:

1. **Privacy Concerns**: Detailed user agents contribute to browser fingerprinting
2. **Client Hints**: A modern replacement that provides information only when requested by servers
3. **Reduced Information**: Major browsers are planning to "freeze" and simplify user agent strings

Google Chrome is leading this change with their User-Agent Reduction plan, gradually limiting the information exposed in the default user agent string.

# Preparing for the Future

As developers, we should:

- Move away from user agent parsing for browser detection
- Implement feature detection instead of browser detection
- Begin adopting Client Hints for cases where device information is necessary
- Focus on developing to web standards rather than specific browsers

The evolution of user agents reflects the web's ongoing balance between compatibility, functionality, and privacy. By understanding this history, we can better prepare for the changes coming to this fundamental aspect of web architecture.`,
    publishDate: '2023-07-15',
    category: 'Web Standards',
    readTime: '11 min'
  }
];
