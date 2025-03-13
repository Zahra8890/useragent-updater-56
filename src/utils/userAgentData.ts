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
