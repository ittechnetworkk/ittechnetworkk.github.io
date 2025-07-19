const CACHE_NAME = 'ittechnetworkk-v1.0.0';
const CACHE_URLS = [
  '/',
  '/posts/',
  '/tools/',
  '/about/',
  '/library/',
  '/resources/',
  '/css/custom.css',
  '/css/lightbox.css',
  '/css/posts-cards.css',
  '/css/tools-cards.css',
  '/js/main.js',
  '/js/lightbox.js',
  '/manifest.json'
];

// Install event - cache essential resources
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching essential files');
        return cache.addAll(CACHE_URLS);
      })
      .then(() => {
        console.log('Service Worker: Installation complete');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Installation failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activation complete');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip external requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('Service Worker: Serving from cache', event.request.url);
          return cachedResponse;
        }

        // If not in cache, fetch from network
        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response as it can only be consumed once
            const responseToCache = response.clone();

            // Add to cache for future use
            caches.open(CACHE_NAME)
              .then(cache => {
                // Cache strategy based on content type
                const url = event.request.url;
                
                // Cache HTML pages, CSS, JS, and images
                if (url.includes('.html') || 
                    url.includes('.css') || 
                    url.includes('.js') || 
                    url.includes('.png') || 
                    url.includes('.jpg') || 
                    url.includes('.jpeg') || 
                    url.includes('.svg') || 
                    url.includes('.webp') ||
                    url.endsWith('/') ||
                    url.includes('/posts/') ||
                    url.includes('/tools/')) {
                  console.log('Service Worker: Caching new resource', url);
                  cache.put(event.request, responseToCache);
                }
              });

            return response;
          })
          .catch(error => {
            console.log('Service Worker: Network request failed', error);
            
            // Return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html') || 
                     caches.match('/') || 
                     new Response('You are offline. Please check your internet connection.', {
                       status: 200,
                       headers: { 'Content-Type': 'text/html' }
                     });
            }
            
            // Return cached version or error response
            return caches.match(event.request) || 
                   new Response('Resource not available offline', {
                     status: 503,
                     headers: { 'Content-Type': 'text/plain' }
                   });
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Background sync triggered');
    event.waitUntil(
      // Handle background sync operations
      handleBackgroundSync()
    );
  }
});

// Push notification handling
self.addEventListener('push', event => {
  if (!event.data) return;

  const data = event.data.json();
  const options = {
    body: data.body || 'New content available on ITTechNetworkk',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    tag: 'ittechnetworkk-notification',
    vibrate: [200, 100, 200],
    actions: [
      {
        action: 'open',
        title: 'Open',
        icon: '/icons/open-24x24.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/close-24x24.png'
      }
    ],
    data: {
      url: data.url || '/'
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'ITTechNetworkk', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'open' || !event.action) {
    const url = event.notification.data?.url || '/';
    event.waitUntil(
      clients.openWindow(url)
    );
  }
});

// Message handling for communication with main thread
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Background sync helper function
async function handleBackgroundSync() {
  try {
    // Handle any queued operations when back online
    const queuedRequests = await getQueuedRequests();
    
    for (const request of queuedRequests) {
      try {
        await fetch(request);
        await removeQueuedRequest(request);
      } catch (error) {
        console.error('Failed to sync request:', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Helper functions for offline queue management
async function getQueuedRequests() {
  // Implement queue storage logic
  return [];
}

async function removeQueuedRequest(request) {
  // Implement queue removal logic
}

// Performance monitoring
self.addEventListener('fetch', event => {
  const startTime = performance.now();
  
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        // Log slow requests for optimization
        if (duration > 1000) {
          console.warn(`Slow request detected: ${event.request.url} took ${duration}ms`);
        }
        
        return response;
      })
  );
});

console.log('Service Worker: Script loaded successfully'); 