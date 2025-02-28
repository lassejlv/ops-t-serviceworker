  // Registrer serviceworker når siden loader
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                        console.log('ServiceWorker registration successful:', registration.scope);
                    })
                    .catch(function(error) {
                        console.log('ServiceWorker registration failed:', error);
                    });
            });
        }

self.addEventListener('install', function(event) {
    console.log('ServiceWorker: Installed');
});

self.addEventListener('activate', function(event) {
    console.log('ServiceWorker: Activated');
});

self.addEventListener('fetch', function(event) {
    console.log('ServiceWorker: Fetching', event.request.url);
});
