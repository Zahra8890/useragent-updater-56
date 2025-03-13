
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
  {
    id: '1',
    name: 'Chrome 122 (Windows)',
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    browser: 'Chrome',
    os: 'Windows',
    device: 'Desktop',
    lastUpdated: '2023-05-15',
    popularity: 28.4,
    category: 'desktop',
    description: 'The latest Chrome browser version for Windows desktop computers. This user agent is commonly seen in website analytics and represents a significant portion of web traffic.'
  },
  {
    id: '2',
    name: 'Safari 16 (iOS)',
    value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
    browser: 'Safari',
    os: 'iOS',
    device: 'Mobile',
    lastUpdated: '2023-05-14',
    popularity: 22.1,
    category: 'mobile',
    description: 'The Safari browser on iOS 16 devices. This user agent is sent by iPhones running the iOS 16 operating system and is one of the most common mobile user agents.'
  },
  {
    id: '3',
    name: 'Firefox 113 (macOS)',
    value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:113.0) Gecko/20100101 Firefox/113.0',
    browser: 'Firefox',
    os: 'macOS',
    device: 'Desktop',
    lastUpdated: '2023-05-16',
    popularity: 4.3,
    category: 'desktop',
    description: 'Firefox browser version 113 running on macOS Catalina (10.15). Firefox is known for its privacy features and rendering capabilities.'
  },
  {
    id: '4',
    name: 'Edge 113 (Windows)',
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.42',
    browser: 'Edge',
    os: 'Windows',
    device: 'Desktop',
    lastUpdated: '2023-05-12',
    popularity: 5.2,
    category: 'desktop',
    description: 'Microsoft Edge browser based on Chromium. This version runs on Windows 10 and uses the Blink rendering engine.'
  },
  {
    id: '5',
    name: 'Chrome 113 (Android)',
    value: 'Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Safari/537.36',
    browser: 'Chrome',
    os: 'Android',
    device: 'Mobile',
    lastUpdated: '2023-05-15',
    popularity: 18.7,
    category: 'mobile',
    description: 'Chrome browser on Android 13 devices. This user agent is from a Samsung Galaxy S22 Ultra running the latest Chrome version.'
  },
  {
    id: '6',
    name: 'Safari 16 (macOS)',
    value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15',
    browser: 'Safari',
    os: 'macOS',
    device: 'Desktop',
    lastUpdated: '2023-05-10',
    popularity: 7.8,
    category: 'desktop',
    description: 'Safari 16 on macOS. Safari is the default browser on Apple devices and is known for its performance and battery efficiency.'
  },
  {
    id: '7',
    name: 'Chrome 113 (iPad)',
    value: 'Mozilla/5.0 (iPad; CPU OS 16_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/113.0.5672.109 Mobile/15E148 Safari/604.1',
    browser: 'Chrome',
    os: 'iOS',
    device: 'Tablet',
    lastUpdated: '2023-05-16',
    popularity: 2.1,
    category: 'tablet',
    description: 'Chrome browser running on an iPad with iOS 16. This shows Chrome installed on an iPad rather than the default Safari browser.'
  },
  {
    id: '8',
    name: 'Googlebot (Web Crawler)',
    value: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    browser: 'Googlebot',
    os: 'N/A',
    device: 'Bot',
    lastUpdated: '2023-05-01',
    popularity: 1.2,
    category: 'bot',
    description: 'Google\'s web crawler that indexes content for the Google search engine. Identifying this user agent is important for SEO optimization.'
  }
];

export const adviceArticles = [
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
  }
];
